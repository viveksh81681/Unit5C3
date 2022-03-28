import { Home } from "./Components/Home/Home";
import { Section } from "./Components/Section/Section";


import { AllRoutes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <AllRoutes path="/" element={<Home/> } />
    </div>
  );
}

export default App;