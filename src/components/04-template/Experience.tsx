import type { ComponentType } from 'react';
import ExperienceItems from '../../../content/Experience/_Experience';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const modules: { [key: string]: { default: ComponentType<any> } } = import.meta.glob('/content/Experience/**.mdx', { eager: true });

const Description = ({ id }: { id: string }) => {
  const Component = modules[`/content/Experience/${id}.mdx`]?.default;
  if (!Component) return;
  return (
    <Component />
  )
}

export default ({ }) => {

  return (
    <>
      <h2>Experience</h2>
      <ul className='m-0'>
        {Object.keys(ExperienceItems).map((item_id, i) => {
          const item = ExperienceItems[item_id];
          return (
          <li key={item_id} className='flex gap-x-1 md:gap-x-2 lg:gap-x-4 gap-y-1'>
            {/* Wrapper + Border */}
            <div className={`relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:-left-1/2 after:border-r-4 md:after:border-r-8 after:border-r-secondary-1 after:translate-x-[2px] md:after:translate-x-[4px] after:-z-1 ${i === Object.keys(ExperienceItems).length - 1 ? 'after:border-dashed' : ''}`}>
              {/* Circle */}
              <div className={`${i === 0 ? 'text-nearblack bg-secondary-1' : 'bg-nearblack text-secondary-1'} w-2 sm:w-3 md:w-4 h-auto aspect-square [border-radius:100%] grid place-items-center border-3 md:border-4 border-secondary-1`}>
                {/* Icon */}
                <FontAwesomeIcon icon={['fas', 'plus']} className='w-[50%]! h-auto!' />
              </div>
            </div>

            <div className='grow-1 pb-2'>
              <div className='flex justify-between align-top gap-1'>
                <div>
                  <h3 className='mb-0.5 font-bold'>{item.company}</h3>
                  <p className='text-small uppercase mt-0'>{item.title}</p>
                </div>
                <div className='text-[16px] shrink-1 basis-max bg-offwhite text-primary-5 self-start p-0.75 pt-0.5 pb-0.5 rounded-bl-lg'>
                  <FontAwesomeIcon icon={['fas', 'calendar']} />&nbsp;
                  {format(item.startDate, 'LLL y')} &ndash; {item.endDate ? format(item.endDate, 'LLL y') : 'Present'}
                </div>
              </div>
              <div className='mt-1 mb-1'>
                <Description id={item_id} />
              </div>
            </div>
          </li>
        )})}
      </ul>
    </>
  );
};
