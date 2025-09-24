import type { ReactNode } from "react";

export default ({ url, small, inverse, onclick, children, classes, attributes }: {url?: string, onclick?: any, children: string|ReactNode, small?: boolean, inverse?: boolean, classes?: string[], attributes?: { [key: string]: string } }) => {
  const Element = url ? 'a' : 'button';

  const buttonClasses: string[] = [
    'border-1',
    small ? 'p-1' : 'p-1.25',
    small ? 'pt-0.5' : 'pt-0.75',
    small ? 'pb-0.5' : 'pb-0.75',
    small ? 'text-[16px]' : 'text-base',
    'rounded-md',
    'font-bold',
    'hover:border-current',
    'focus:border-current',
    'font-heading',
    'bg-none'
  ];

  if (inverse) {
    buttonClasses.push(
      'text-secondary-1',
      'border-current',
      'hover:bg-secondary-1',
      'focus:bg-secondary-1',
      'hover:border-secondary-1',
      'focus:border-secondary-1',
      'hover:text-nearblack',
      'focus:text-nearblack',
    );
  } else {
    buttonClasses.push(
      'bg-primary-5',
      'text-white',
      'border-transparent',
      'hover:bg-primary',
      'focus:bg-primary',
    );
  }

  if (classes) buttonClasses.push(...classes);

  return (
    <Element href={url} onClick={onclick} className={buttonClasses.join(' ')} {...attributes}>{children}</Element>
  );
}
