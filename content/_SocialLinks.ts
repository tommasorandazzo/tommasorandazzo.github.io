import { type IconProp } from "@fortawesome/fontawesome-svg-core";

interface SocialLink {
  id: string,
  name: string,
  url: string,
  icon: IconProp,
}

const SocialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/tommasorandazzo',
    icon: ['fab', 'github'],
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tommasorandazzo/',
    icon: ['fab', 'linkedin-in'],
  },
  {
    id: 'drupal',
    name: 'Drupal',
    url: 'https://www.drupal.org/u/tommasorandazzo',
    icon: ['fab', 'drupal'],
  },
  {
    id: 'contact',
    name: 'Contact Me',
    url: '#contact',
    icon: ['fas', 'at'],
  }
];

export default SocialLinks;
