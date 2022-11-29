import Heropage from "../components/Heropage";
import Motion from "../components/Motion";
import Scrollpage from "../components/Scrollpage";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Thirdpage from "../components/Thirdpage";

export default function Home() {
  return (
    <>
      <div style={{ overflow: "visible", height: "500vh" }}>
        <Heropage />
        <Motion />
        {/* <Scrollpage /> */}
        {/* <Skills />
        <Thirdpage />
        <Services /> */}
      </div>
    </>
  );
}
