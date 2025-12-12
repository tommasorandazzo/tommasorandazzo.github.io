
import { library as FontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter, Route, Routes } from "react-router"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Home from "./components/05-pages/Home";
import Contact from './components/04-template/Contact'
import About from './components/04-template/About'
import Skills from './components/04-template/Skills'
import Work from './components/04-template/Work'
import Experience from './components/04-template/Experience'
import type { ReactNode } from 'react'
import ContactPage from './components/05-pages/ContactForm'
import ContactCard from './components/05-pages/ContactCard'

FontAwesomeLibrary.add(fas, far, fab)

export const sections: { [key: string]: { title: string, component: ReactNode } } = {
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

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ContactCard />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
