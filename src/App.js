import Navbar from "./components/Navbar";
import Router from "./pages/router";
import "./App.css";

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Router />
    </div>
  );
};

export default App;
