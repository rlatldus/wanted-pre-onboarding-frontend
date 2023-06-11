import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Todos from "./pages/Todos";

const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
