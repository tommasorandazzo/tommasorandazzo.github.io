import { Turnstile } from '@marsidev/react-turnstile'
import { useEffect, useState, type Ref } from 'react'
import fetchJson from '../../lib/fetchJson';

export default ({ onSuccess, onError, onExpire, ref }: { onSuccess?: Function, onError?: Function, onExpire?: Function, ref?: Ref<HTMLElement> }) => {
  const [siteKeyValue, setSiteKeyValue] = useState('')
  const [options, setOptions] = useState({})

  async function getData() {
    if (!siteKeyValue) {
      await fetchJson('/api/contact/captcha').then(
        response => {
          setSiteKeyValue(response.site_key);
          setOptions({
            appearance: response.appearance,
            language: response.language,
            retry: response.retry,
            retry_interval: response.retry_interval,
            size: response.size,
            theme: response.theme,
          })
        }
      );
    }
  }

  useEffect(() => {
    getData();
  }, [siteKeyValue])

  return (
    <>
      <Turnstile className='mt-1 mb-1' siteKey={siteKeyValue} options={options} onSuccess={onSuccess} onError={onError} onExpire={onExpire} ref={ref} />
    </>
  );
}
