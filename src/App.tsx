import AboutPage from "./pages/AboutPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import EditorialMotion from "./components/ui/EditorialMotion";
import ContactPage from "./pages/ContactPage";
import FloatingWhatsApp from "./components/contact/FloatingWhatsApp";
export default function App({ path }: { path: string }) {
  const bookPage = path.replace(/\/$/, "") === "/livros/ainda-tenho-estradas";
  const aboutPage = path.replace(/\/$/, "") === "/sobre";
  const contactPage = path.replace(/\/$/, "") === "/contato";
  return (
    <>
      <EditorialMotion />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header
        bookPage={bookPage || contactPage || aboutPage}
        contactPage={contactPage}
        aboutPage={aboutPage}
      />
      <main id="conteudo">
        {bookPage ? (
          <BookPage />
        ) : contactPage ? (
          <ContactPage />
        ) : aboutPage ? (
          <AboutPage />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
      <FloatingWhatsApp context={bookPage ? "estradas" : "general"} />
    </>
  );
}
