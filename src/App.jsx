import AppRouter from "./components/AppRouter";
import Sidebar from "./components/Sidebar";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <AppRouter />
        </div>
      </div>
    </>
  );
}

export default App;
