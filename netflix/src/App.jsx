import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reasons from "./components/Reasons";
import HeroImage from "./assets/hero-img.jpg";
import TrendingNow from "./components/TrendingNow";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden items-center justify-center">
        <div className="relative w-full">
          <div className="relative w-full z-[1]">
            <div className="hero-gradient-wrapper">
              <div className="hero-radial-gradient"></div>
              <div dir="ltr" className="hero-line-gradient"></div>
            </div>
            <div className="header-gradient relative z-[2] w-full">
              <div className="w-full max-w-[120rem] h-[7.5rem] m-[0_auto_-7.5rem_auto] 3xl:p-[0_22.125rem] xl:p-[0_9.25rem] lg:p-[0_5rem] md:p-[0_2rem] px-8">
                <Header />
              </div>
            </div>
            <Hero />
          </div>
          <div
            className="lg:mt-12 sm:-mt-8 px-6 max-w-[120rem] mx-auto z-[2] w-full
           md:px-8 lg:px-20 xl:px-36 2xl:px-[20rem] overflow-x-hidden"
          >
            <div className="flex flex-col items-center justify-center">
              <TrendingNow />
            </div>
          </div>
        </div>

        {/* <Reasons />
      <FAQ />
      <Footer /> */}
      </div>
    </>
  );
}

export default App;
