import type { ReactNode } from "react";
import Footer from "./components/03-organisms/Footer";
import Header from "./components/03-organisms/Header";
import About from "./components/05-pages/About";
import Contact from "./components/05-pages/Contact";
import Experience from "./components/05-pages/Experience";
import Skills from "./components/05-pages/Skills";
import Work from "./components/05-pages/Work";
import Metatags from "./components/03-organisms/Metatags";
import { library as FontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

FontAwesomeLibrary.add(fas, far, fab)

type PagesInterface = {
  [key: string]: {
    title: string,
    component: ReactNode,
  }
}

export const pages: PagesInterface = {
  'about': {
    title: 'About',
    component: <About />,
  },
  'skills': {
    title: 'Skills',
    component: <Skills />,
  },
  'work': {
    title: 'Work',
    component: <Work />,
  },
  'experience': {
    title: 'Experience',
    component: <Experience />,
  },
  'contact': {
    title: 'Contact',
    component: <Contact />,
  },
}

export default ({ }) => {
  return (
    <>
      <Header />
      <main id="main-content" className="container p-1 md:p-2 xl:p-4">
        {Object.keys(pages).map(pageId => (
          <section key={pageId} className="md:min-h-screen snap-center w-full mt-1 mb-1 md:mt-2 md:mb-2 pt-2 pb-2 md:pt-4 md:pb-4" id={pageId}>
            {pages[pageId].component}
          </section>
        ))}
        <Footer />
      </main>
    </>
  );
};
