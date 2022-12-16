import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
function App() {

  return ( 
    <div className="px-2 py-4 md:py-6 md:px-20">
      <Navbar />
      <Movies/>
    </div>
  );
}

export default App;
