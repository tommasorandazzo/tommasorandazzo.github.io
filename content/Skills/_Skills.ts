import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Skill {
  name: string,
  id: string,
  icon: IconProp,
  description?: string,
}

const Skills: Skill[] = [
  {
    name: 'JavaScript',
    id: 'javascript',
    icon: ['fab', 'js'],
  },
  {
    name: 'Accessibility',
    id: 'accessibility',
    icon: ['fas', 'universal-access'],
  },
  {
    name: 'Security',
    id: 'security',
    icon: ['fas', 'shield-halved'],
  },
  {
    name: 'DevOps',
    id: 'devops',
    icon: 'hexagon-nodes-bolt'
  },
  {
    name: 'Drupal',
    id: 'drupal',
    icon: ['fab', 'drupal'],
  },
  {
    name: 'WordPress',
    id: 'wordpress',
    icon: ['fab', 'wordpress'],
  },
];

export default Skills;
