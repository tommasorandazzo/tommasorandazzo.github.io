import Footer from "../03-organisms/Footer"
import Header from "../03-organisms/Header"
import Contact from "../04-template/Contact"

export default ({}) => {
  return (
    <>
      <Header />
      <main id="main-content" className="container p-1 md:p-2 xl:p-4">
        <section className="md:min-h-screen snap-center w-full mt-1 mb-1 md:mt-2 md:mb-2 pt-2 pb-2 md:pt-4 md:pb-4" >
          <h1>Contact</h1>
          <Contact title=""/>
        </section>
        <Footer />
      </main>
    </>
  )
}
