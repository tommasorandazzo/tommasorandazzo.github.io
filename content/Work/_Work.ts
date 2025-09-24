type ProjectTag = 'drupal'|'react'|'vue'|'wordpress';

interface Project {
  title: string,
  description?: string,
  tags: ProjectTag[],
  link: string,
}

const Projects: { [id: string]: Project } = {
  'global-energy': {
    title: 'Global Energy',
    description: 'A Chicago energy broker managing the power utilities for the Archdoicese of Chicago.',
    tags: ['drupal', 'react'],
    link: 'https://www.globalenergy.net/',
  },
  'gabybendtsensound': {
    title: 'Gaby Bendtsen Sound',
    description: 'A professional sound designer and producer\'s portfolio site.',
    tags: ['drupal'],
    link: 'https://gabybendtsensound.com/',
  },
  // 'dana-farber': {
  //   title: 'Dana-Farber Cancer Institute',
  //   description: 'Ullamco sint ex ad eiusmod labore.',
  //   tags: ['drupal', 'vue'],
  //   link: 'https://www.dana-farber.org/',
  //   imageSrc: 'https://placecats.com/900/600',
  // },
};

export default Projects;
