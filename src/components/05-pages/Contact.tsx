import { type ReactNode, useState, type FormEvent, useRef, useEffect } from 'react';
import Contact from '../../../content/Contact/contact-body.mdx';
import Button from '../01-atoms/Button';
import Input from '../01-atoms/Input';
import createHttpHeaders from '../../lib/createHttpHeaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinks from '../02-molecules/SocialLinks';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import fetchJson from '../../lib/fetchJson';

export default () => {
  const [errorMessage, setErrorMessage] = useState<string|ReactNode>('')
  const [confirmation, setConfirmation] = useState(false)
  const [captchaSuccess, setCaptchaSuccess] = useState<string>('')
  const [turnstileAttrs, setTurnstileAttrs] = useState({
    siteKey: '',
    options: {},
  });
  const captchaRef = useRef<TurnstileInstance>(null);

  async function submitForm(event: FormEvent) {
    event.preventDefault();

    if (!captchaSuccess && captchaRef.current) {
      // Check for captcha first.
      setErrorMessage((
        <>CAPTCHA Failed.<br /><Button small onclick={() => captchaRef.current?.reset()}>Retry CAPTCHA?</Button></>
      ));
      return;
    }

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;
    const data = new FormData(form);
    const fieldValues: { [key: string]: string } = {
      ...Object.fromEntries(data.entries()),
      captcha: captchaSuccess,
    };

    if (Object.hasOwn(fieldValues, 'cf-turnstile-response')) delete fieldValues['cf-turnstile-response'];

    fetch(import.meta.env.VITE_API_URL + '/api/contact/submit', {
      method: 'POST',
      headers: createHttpHeaders(true),
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

  async function getTurnstileData() {
    await fetchJson('/api/contact/captcha', true).then(
      response => {
        setTurnstileAttrs({
          siteKey: response.site_key,
          options: {
            appearance: response.appearance,
            language: response.language,
            retry: response.retry,
            retry_interval: response.retry_interval,
            size: response.size,
            theme: response.theme,
          }
        });
      }
    );
  }

  useEffect(() => {
    if (window.localStorage.getItem('contact-form-filled')) {
      setConfirmation(true);
    }

    if (!turnstileAttrs.siteKey) {
      getTurnstileData();
    }
  }, [confirmation])

  return (
    <>
      <h2>Contact</h2>
      <div className='md:flex gap-1 gap-x-2 lg:gap-x-4'>
        <div className='flex-1 mb-4'>
          <Contact />
          <SocialLinks hideLocal />
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
                <Input label='Subject' type='text' id='subject' required />
                <Input label='Message' type='textarea' id='message' required />
                {turnstileAttrs.siteKey && (
                  <Turnstile
                    className='mt-1 mb-1'
                    onSuccess={(token) => setCaptchaSuccess(token)}
                    ref={captchaRef}
                    {...turnstileAttrs}
                  />
                )}
                <Button>Send Message</Button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};
