import Heropage from "../components/Heropage";
import Motion from "../components/Motion";
// import Scrollpage from "../components/Scrollpage";

// import Skills from "../components/Skills";
// import Thirdpage from "../components/Thirdpage";

export default function Home() {
  return (
    <>
      <div style={{ overflow: "visible", height: "250vh" }}>
        <Heropage />
        <Motion />
      </div>
    </>
  );
}
