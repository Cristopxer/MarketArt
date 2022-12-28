import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Let's find a masterpiece"
        description="Buy, store, collect art pieces from everyehere. Join 33+ million people using ArtMarketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart user interface marketplace"
        description="Experience and fluent interface with smooth and constant colors"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
    </>
  );
};

export default App;
