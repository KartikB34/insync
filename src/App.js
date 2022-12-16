import { useState } from "react";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";

function App() {
  
  const [search, setSearch] = useState(false)

  return ( 
    <div className="px-2 py-4 md:py-6 md:px-20">
      <Navbar setSearch={setSearch}/>
      <Movies searchquery={search} />
    </div>
  );
}

export default App;
