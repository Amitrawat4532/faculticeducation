import Heropage from "../components/Heropage";
import Motion from "../components/Motion";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Thirdpage from "../components/Thirdpage";

export default function Home() {
  return (
    <>
      <Motion />
      <Heropage />
      <Skills />
      <Thirdpage />
      <Services />
    </>
  );
}
