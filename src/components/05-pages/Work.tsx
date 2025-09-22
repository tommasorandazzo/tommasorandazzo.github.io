import { useEffect, useState, type ComponentType } from 'react'
import Modal, { ModalTransitionTime } from '../03-organisms/Modal'
import WorkItems from '../../../content/Work/_Work'
import Card from '../02-molecules/Card'

const modules: { [key: string]: { default: ComponentType<any> } } = import.meta.glob('/content/Work/**.mdx', { eager: true });

const Description = ({ id }: { id: string }) => {
  const Component = modules[`/content/Work/${id}.mdx`]?.default;

  if (!Component) return;
  return (
    <Component />
  )
}

export default ({ }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeWorkItem, setActiveWorkItem] = useState('');
  const WorkIds: string[] = Object.keys(WorkItems);

  function openWorkItem(id: string) {
    window.location.hash = id;
    setActiveWorkItem(id);
    setIsOpen(true);
  }

  function closeWorkItem() {
    window.location.hash = 'work';
    setIsOpen(false);
    setTimeout(() => setActiveWorkItem(''), ModalTransitionTime);
  }

  useEffect(() => {
    if (!isLoaded) {
      const id = window.location.hash.replace('#', '');
      window.addEventListener('load', () => {
        if (WorkIds.includes(id)) {
          openWorkItem(id);
        }
      });
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return (
    <div>
      <h2>My Work</h2>
      <ul className='flex flex-wrap gap-2 justify-center align-top ml-0'>
        {WorkIds.map(id => {
          const item = WorkItems[id];
          return (
            <li key={id} className='basis-md flex-0 max-w-full'>
              <Card
                heading={item.title}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt || item.title}
                description={(<p>{item.description}</p>)}
                ctaOnclick={() => openWorkItem(id)}
                classes={['h-full']}
                ctaText={(
                  <>View More <span className='visually-hidden'>about {item.title}</span></>
                )}
              />
            </li>
          )
        })}
      </ul>
      <Modal label="My Work" isOpen={modalIsOpen} closeModal={closeWorkItem}>
        {WorkItems && activeWorkItem && (
          <>
            <a id={activeWorkItem}></a>
            <img src={WorkItems[activeWorkItem].imageSrc} alt={WorkItems[activeWorkItem].imageAlt || WorkItems[activeWorkItem].title} className="w-full h-auto" />
            <h2>{WorkItems[activeWorkItem]?.title}</h2>
            <Description id={activeWorkItem}/>
          </>
        )}
      </Modal>
    </div>
  );
};
