import Heropage from "../components/Heropage";
import Motion from "../components/Motion";
// import Scrollpage from "../components/Scrollpage";
// import Skills from "../components/Skills";
// import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <div
        style={{
          overflow: "visible",
          height: "100%",
          minHeight: "150vh",
          width: "100vw",
          position: "relative",
          zIndex: "50",
        }}
      >
        <Heropage />
        <Motion />
      </div>
      {/* <div
        style={{
          position: "relative",
          zIndex: "100",
        }}
      >
        <Scrollpage />
        <Skills />
        <Services />
      </div> */}
    </>
  );
}
