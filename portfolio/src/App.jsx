import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
      <Contact />
    </>
  );
}

export default App;
