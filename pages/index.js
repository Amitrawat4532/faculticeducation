import Heropage from "../components/Heropage";
import Motion from "../components/Motion";

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
