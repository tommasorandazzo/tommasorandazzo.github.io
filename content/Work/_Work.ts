type ProjectTag = 'drupal'|'react'|'vue'|'wordpress';

interface Project {
  title: string,
  description?: string,
  tags: ProjectTag[],
  link: string,
  imageSrc: string,
  imageAlt?: string,
}

const Projects: { [id: string]: Project } = {
  'global-energy': {
    title: 'Global Energy',
    description: 'Ullamco sint ex ad eiusmod labore.',
    tags: ['drupal', 'react'],
    link: 'https://www.globalenergy.net/',
    imageSrc: 'https://placecats.com/900/600',
  },
  'gabybendtsensound': {
    title: 'Gaby Bendtsen Sound',
    description: 'Ullamco sint ex ad eiusmod labore.',
    tags: ['drupal'],
    link: 'https://gabybendtsensound.com/',
    imageSrc: 'https://placecats.com/900/600',
  },
  'dana-farber': {
    title: 'Dana-Farber Cancer Institute',
    description: 'Ullamco sint ex ad eiusmod labore.',
    tags: ['drupal', 'vue'],
    link: 'https://www.dana-farber.org/',
    imageSrc: 'https://placecats.com/900/600',
  },
};

export default Projects;
