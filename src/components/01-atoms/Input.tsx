import type { Ref } from "react";

export default ({ type, label, id, ref, required = false, labelHidden = false, inputAttrs = {} }: { type: string, label: string, id: string, labelHidden?: boolean, ref?: Ref<HTMLInputElement|HTMLTextAreaElement>,required?: boolean|string, inputAttrs?: any }) => {
  const inputClasses: string[] = [
    'border-1',
    'bg-primary-5',
    'focus:bg-primary',
    'text-offwhite',
    'rounded-md',
    'p-0.5',
    'pl-1',
    'pr-1',
    'w-full',
    'mt-0.5'
  ];
  return (
    <div className="mt-1 mb-1 text-xs">
      {type !== 'hidden' && (
        <label className={`w-full inline-block ${labelHidden ? 'visually-hidden' : ''}`} htmlFor={id}>
          {label}
          {required && (<sup className="text-error-1 font-bold ml-0.25">*</sup>)}
        </label>
      )}
      {type === 'textarea' ? (<textarea ref={ref} className={[...inputClasses, ...['min-h-8']].join(' ')} type={type} name={id} id={id} required={required} {...inputAttrs} />) :
      (<input ref={ref} className={inputClasses.join(' ')} type={type} name={id} id={id} required={required} {...inputAttrs} />)}
    </div>
  );
};
