import Skills from '../../../content/Skills/_Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useRef, useState, type ComponentType } from 'react';

const splideOptions: { [key: string]: any } = {
  type: 'fade',
  labelledby: 'skills-heading',
  perPage: 1,
  arrows: false,
  pagination: false,
  drag: false,
  snap: true,
  autoplay: false,
};

const modules: { [key: string]: { default: ComponentType<any> } } = import.meta.glob('/content/Skills/**.mdx', { eager: true });

const SkillDescription = ({ id }: { id: string }) => {
  const SkillComponent: ComponentType = modules[`/content/Skills/${id}.mdx`].default;
  return (
    <SkillComponent />
  )
}

export default ({ }) => {
  const splideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState<number|null>(splideOptions.start || null);

  return (
    <>
      {Skills.length && (
        <>
          <h2 id='skills-heading'>Skills</h2>
          {/* Content Display */}
          <Splide ref={splideRef} options={splideOptions} hasTrack={false} className='container max-w-4xl'>
            {/* Navigation */}
            <ul className='flex justify-center mt-1 mb-1' role='tablist' aria-label='Select a skill to show'>
              {Skills.map(skill => (
                <li key={skill.id} className='inline-block w-[calc(100%*2/9)] even:mt-[9.5%] first:ml-5% not-first:ml-[-5%]'>
                  <button
                    className={`after:content-[''] after:-z-1 after:w-[calc(100%-12px)] after:h-[calc(100%-12px)] after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:transition-all after:clip-path-hexagon clip-path-hexagon w-full h-auto grid place-items-center relative box-border p-[4%] pr-[25%] pl-[25%] shadow-2xl font-bold ${currentSlide === Skills.indexOf(skill) + 1 ? 'after:bg-primary-1 bg-secondary-1 text-secondary-1 shadow' : 'after:bg-primary-1 hover:after:bg-primary focus:after:bg-primary hover:bg-secondary-1 focus:bg-secondary-1 hover:text-secondary-1 focus:text-secondary-1 bg-primary-5 text-primary-5 hover:shadow focus:shadow'}`}
                    onClick={() => {
                      const index: number = Skills.indexOf(skill) + 1;
                      const splide: typeof Splide = splideRef.current;
                      setCurrentSlide(index);
                      splide.go(index);
                    }}
                  >
                    <FontAwesomeIcon icon={skill.icon} className='w-[80%]! h-[80%]!' />
                    <span className="visually-hidden">Go to {skill.name}</span>
                  </button>
                  <div className="flex justify-center items-center max-w-1/2 container text-center text-[15px] font-bold mt-0.5 rotate-180 md:rotate-0 [writing-mode:vertical-lr] md:[writing-mode:unset]">{skill.name}</div>
                </li>
              ))}
            </ul>
            <SplideTrack>
              <SplideSlide className="text-center pt-2">
                Select a skill...
              </SplideSlide>
              {Skills.map(skill => (
                <SplideSlide key={skill.id}>
                  <div className="max-w-2xl container pt-2">
                    <h3>{skill.name}</h3>
                    <div className="text-center">
                      <SkillDescription id={skill.id} />
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </>
      )}
    </>
  );
};
