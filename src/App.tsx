import "./scss/app.scss";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer";
import { Location } from "./components/map";
import { FloatButton } from 'antd';
import { FamilyBlock } from "./components/family-block";
import { OurDoctor } from "./components/our-doctor";
import { HelpBlock } from "./components/help-block";

function App() {
  return (
    <>
    <Header />
    <main>
      <FamilyBlock />
      <OurDoctor />
      <HelpBlock />
      <Location />
      <FloatButton.BackTop />
    </main>
    <Footer />
    </>
  );
}

export default App;
