import "./App.css";
import CenterBar from "./Components/C-bar/Centerbar";
import LeftSidebar from "./Components/L-Bar/Left-sideBar";
import RightSideBar from "./Components/R-bar/Right-sideBar";

function App() {
  return (
    //twitter start//
    <div className="App">
      {/* Left Side bar */}
      <LeftSidebar />

      {/* Center scroller */}
      <CenterBar />

      {/* Right sidebar */}
      <RightSideBar />
    </div>
  );
}

export default App;
