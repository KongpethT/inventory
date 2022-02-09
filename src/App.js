import { Switch, Route } from "react-router-dom"
import Navbar from "./navbar"
import AddComputer from "./addComputer"
import AddBrand from "./addBrand"
import AddModel from "./addModel"
import AddType from "./addType"

function App() {
  return (
    <div>
      <Navbar />
      <Switch><Route path="/add/computer"><AddComputer /></Route></Switch>
      <Switch><Route path="/add/brand"><AddBrand /></Route></Switch>
      <Switch><Route path="/add/model"><AddModel /></Route></Switch>
      <Switch><Route path="/add/type"><AddType /></Route></Switch>
    </div>
  );
}

export default App;
