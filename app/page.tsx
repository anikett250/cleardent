import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
