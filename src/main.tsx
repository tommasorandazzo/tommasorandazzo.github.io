import { createRoot } from 'react-dom/client'
import Header from "./components/03-organisms/Header"
import Footer from "./components/03-organisms/Footer"
import './style.css'

const appRoot = document.querySelector('app-root')
if (appRoot) createRoot(appRoot).render(
  <>
    <Header />
    <main id="main-content" className="container">
      <h1>Hey this is a test</h1>
    </main>
    <Footer />
  </>
);
