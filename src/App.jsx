import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import QuizApp from "../components/quiz/quiz";
function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />

        <QuizApp />

        <Footer />
      </section>
    </>
  );
}

export default App;
