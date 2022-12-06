import Heropage from "../components/Heropage";
import Motion from "../components/Motion";
import Scrollpage from "../components/Scrollpage";
import Skills from "../components/Skills";
import Services from "../components/Services";

// import Skills from "../components/Skills";
// import Thirdpage from "../components/Thirdpage";

export default function Home() {
  return (
    <>
      <div
        style={{ overflow: "visible", height: "500vh", position: "relative" }}
      >
        <Heropage />
        <Motion />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: "100",
        }}
      >
        <Scrollpage />
        <Skills />
        <Services />
      </div>
    </>
  );
}
