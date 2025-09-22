import type { ReactNode } from "react";

export default ({ url, small, inverse, onclick, children, classes }: {url?: string, onclick?: any, children: string|ReactNode, small?: boolean, inverse?: boolean, classes?: string|string[] }) => {
  const Element = url ? 'a' : 'button';

  const attributes: {[key: string]: string|string[]} = {
    className: [
      'border-1',
      small ? 'p-1' : 'p-1.25',
      small ? 'pt-0.5' : 'pt-0.75',
      small ? 'pb-0.5' : 'pb-0.75',
      small ? 'text-[16px]' : 'text-base',
      'rounded-md',
      'font-bold',
      'hover:border-current',
      'focus:border-current',
    ],
    onClick: onclick,
  }

  if (inverse) {
    attributes.className?.push(
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
    attributes.className?.push(
      'bg-primary-5',
      'text-white',
      'border-transparent',
      'hover:bg-primary',
      'focus:bg-primary',
    );
  }

  if (classes) attributes.className.push(classes);

  attributes.className = attributes.className.join(' ');


  if (url) attributes.href = url;

  return (
    <Element {...attributes}>{children}</Element>
  );
}
