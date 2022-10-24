import "./css/index.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Update from "./components/Update";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="left-sidebar-container">
          <Sidebar />
        </div>
        <div className="mid-container">
          <Update />
        </div>
        <div className="right-sidebar-container">
          <RightSidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
