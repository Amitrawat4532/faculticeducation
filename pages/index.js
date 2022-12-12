import Heropage from "../components/Heropage";
import Motion from "../components/Motion";

export default function Home() {
  return (
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
  );
}
