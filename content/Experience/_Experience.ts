interface Experience {
  company: string,
  title: string,
  startDate: Date,
  endDate?: Date,
}

const Experience: { [id: string]: Experience } = {
  tag: {
    company: 'Third and Grove',
    title: 'Software Engineer',
    startDate: new Date('31 May 2023'),
    endDate: undefined,
  },
  gravity_works: {
    company: 'Gravity Work Design & Development',
    title: 'Front-End Engineer',
    startDate: new Date('22 September 2020'),
    endDate: new Date('30 May 2023'),
  },
  msu: {
    company: 'Michigan State University',
    title: 'B.A. Media and Information, Human-Centered Technology',
    startDate: new Date('1 January 2017'),
    endDate: new Date('18 August 2020'),
  },
};

export default Experience;
