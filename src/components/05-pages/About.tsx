import AboutBody from '../../../content/About/about-body.mdx';
import Button from '../01-atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinks from '../02-molecules/SocialLinks';

export default () => {
  return (
    <>
      <div className="max-w-xl lg:max-w-6xl flex flex-wrap-reverse gap-2 lg:gap-4 container">
        <div className='flex-1 basis-sm max-w-full'>
          <img className='w-full h-auto max-w-sm m-2 ml-auto mr-auto clip-path-hexagon object-cover' src="/headshot.jpg" alt="Tommaso Randazzo" />
          <div>
            <SocialLinks />
          </div>
        </div>
        <div className='grow-1 shrink-0 max-w-full basis-lg'>
          <h1>Tommaso Randazzo</h1>
          <p className="text-small font-bold mt-0">Full-Stack Drupal + React Developer</p>
          <AboutBody />
          <div className='flex gap-1 flex-wrap mt-2 mb-2'>
            <Button url='#work'>View My Work</Button>
            <Button url='#contact' inverse>Contact Me</Button>
          </div>
        </div>
      </div>
      <div className="m-2 ml-auto mr-auto flex flex-col justify-center items-center">
        <span className="visually-hidden">Scroll to view more...</span>
        <FontAwesomeIcon icon={['fas', 'angle-down']} size='2xl' className='animate-bounce' />
        <FontAwesomeIcon icon={['fas', 'angle-down']} size='xl' className='-mt-0.5 animate-bounce [animation-delay:calc(var(--default-transition-duration)/2)]' />
        <FontAwesomeIcon icon={['fas', 'angle-down']} size='lg' className='-mt-0.5 animate-bounce [animation-delay:var(--default-transition-duration)]' />
      </div>
    </>
  );
};
