import type { ReactNode } from "react";

export default ({ url, text = '', classes = [], icon = '', iconClasses = [], children, attributes = []}: {url: string, text: string, classes: string[], icon: string, iconClasses: string[], children: ReactNode, attributes: any}) => {
  const elementClasses = [
    'text-secondary',
    'animated-underline',
    ...classes
  ];

  iconClasses = [
    'fa-solid',
    `fa-${icon}`,
    'mr-0.25',
    ...iconClasses,
  ];

  return (
    <a href={url} className={elementClasses.join(' ')} {...attributes}>
      {icon && <i className={iconClasses.join(' ')} />}
      {children || text}
    </a>
  );
};
