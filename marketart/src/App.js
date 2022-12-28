import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Let's find a masterpiece"
        description="Buy, store, collect art pieces from everyehere. Join 33+ million people using MarketArt"
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
      <SectionWrapper
        title="Deploymet"
        description="MarketArt if built using Expo which runs natively on all users devices."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="An user friendly interface"
        description="The demo contains two different screens. The first screen shows the list of all art pieces availble and the second screen shows a detailed view of each art masterpiece."
        mockupImg={assets.mockup}
        banner="banner-02"
      />
      <Download />
    </>
  );
};

export default App;
