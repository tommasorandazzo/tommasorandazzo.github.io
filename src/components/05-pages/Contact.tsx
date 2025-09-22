import { type ReactNode, useState, type FormEvent, useRef, useEffect } from 'react';
import Contact from '../../../content/Contact/contact-body.mdx';
import Button from '../01-atoms/Button';
import Input from '../01-atoms/Input';
import createHttpHeaders from '../../lib/createHttpHeaders';
import Captcha from '../01-atoms/Captcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinks from '../02-molecules/SocialLinks';

export default () => {
  const [errorMessage, setErrorMessage] = useState<string|ReactNode>('')
  const [confirmation, setConfirmation] = useState(false)
  const [captchaSuccess, setCaptchaSuccess] = useState<string|false>(false)
  const captchaRef = useRef('');

  async function submitForm(event: FormEvent) {
    event.preventDefault();

    if (!captchaSuccess) {
      // Check for captcha first.
      setErrorMessage((
        <>CAPTCHA Failed.<br /><Button small onclick={() => captchaRef.current?.reset()}>Retry CAPTCHA?</Button></>
      ));
      return;
    }

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;
    const data = new FormData(form);
    const fieldValues = Object.fromEntries(data.entries());

    delete fieldValues['cf-turnstile-response'];
    fieldValues.captcha = captchaSuccess;

    fetch(import.meta.env.VITE_API_URL + '/api/contact/submit', {
      method: 'POST',
      headers: createHttpHeaders(),
      body: JSON.stringify(fieldValues),
    })
      .then(response => response.json())
      .then(
        result => {
          if (result.error) {
            setErrorMessage(result.error);
            document.querySelector('#contact-desc')?.scrollIntoView();
            console.error(result);
            return;
          }
          window.localStorage.setItem('contact-form-filled', JSON.stringify(result));
          setErrorMessage('');
          setConfirmation(true);
        },
        err => {
          setErrorMessage(err.error);
          console.error(err);
        },
      );
  }

  useEffect(() => {
    if (window.localStorage.getItem('contact-form-filled')) {
      setConfirmation(true);
    }
  }, [confirmation])

  return (
    <>
      <h2>Contact</h2>
      <div className='md:flex gap-1 gap-x-2 lg:gap-x-4'>
        <div className='flex-1'>
          <Contact />
          <SocialLinks />
        </div>
        <div className='flex-1'>
          {confirmation ? (
            <div>
              <h3><FontAwesomeIcon icon={['fas', 'envelope']} /> Message Sent</h3>
              <p>Your message has been successfully sent! I will be in contact with you as soon as possible.</p>
              <Button small onclick={() => {
                window.localStorage.removeItem('contact-form-filled');
                setConfirmation(false);
              }}>Send a new message</Button>
            </div>
          ) : (
            <>
              <h3 id="contact-title">Send a Message</h3>
              <form onSubmit={(e) => submitForm(e)} aria-labelledby='contact-title' aria-describedby='contact-desc'>
                <div id='contact-desc'>
                  {errorMessage && (
                    <div className='p-1 mb-1 text-error font-bold border-1 border-error-4 bg-error-2'>{errorMessage}</div>)}
                  <div>An asterisk<sup className="text-error-1 font-bold ml-[1px]">*</sup> indicates a required field</div>
                </div>
                <Input label='Name' type='text' id='name' required />
                <Input label='Email' type='email' id='email' required />
                <Input label='Company/Organization' type='text' id='company_organization' />
                <Input label='Subject' type='text' id='subject' />
                <Input label='Message' type='textarea' id='message' required />
                <Captcha
                  onSuccess={token => {
                    setCaptchaSuccess(token);
                  }}
                  ref={captchaRef}
                />
                <Button>Send Message</Button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};
