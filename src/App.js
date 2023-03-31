import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./components/routes/MyRoutes";
import NavBar from "./components/shared/navbar/NavBar";
import CheckLogin from "./utils/checkLogin";
function App() {
  const user= {name:"ali",role:'SuperAdmin'};
  return (
    <Router>
      <CheckLogin login={user}>
        <NavBar user={user} />
      </CheckLogin>

      <div className="App">
        <MyRoutes user={user} />
      </div>
    </Router>
  );
}

export default App;
