import { useEffect, useState } from "react";
import { pages } from "../../App";

export default () => {
  const pageIds = Object.keys(pages);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  function updateMenuEntry(id: string) {
    if (id === 'about') return;
    setActiveMenuItem(id);
  }

  useEffect(() => {
    pageIds.forEach(id => {
      const section = document.querySelector(`section#${id}`);
      if (!section) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateMenuEntry(id);
            }
          });
        },
        { rootMargin: "0px", threshold: 0 }
      );
      observer.observe(section);
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) updateMenuEntry('');
  })

  return (
    <header className="bg-primary-6 sticky top-0 left-0 w-full p-0.5 pl-0 pr-0 shadow-xl/5 z-1">
      <div className="container flex justify-between items-center pl-1 pr-1">
        <a href="#" onClick={() => setTimeout(() => setActiveMenuItem(''), 500)} className="bg-none">
          <img className="w-2.5" src="/logo.svg" alt="tommaso.cc" />
          <span className="visually-hidden">Home</span>
        </a>
        {pageIds.length > 0 && (
          <ul className="flex flex-wrap gap-0.5 md:gap-1 m-0 p-0 items-center">
            {pageIds.filter(i => i !== 'about').map(pageId => (
              <li key={pageId}>
                <a href={`#${pageId}`} className={`font-bold font-heading text-xs text-white ${activeMenuItem !== pageId &&'animated-underline-reverse'}`}>{pages[pageId].title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
};
