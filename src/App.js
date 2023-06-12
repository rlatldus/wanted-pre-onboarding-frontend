import { Routes, Route, HashRouter } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Todos from "./pages/Todos";
import PrivateRoute from "./util/PrivateRoute";
import AuthenticatedRoute from "./util/AuthenticatedRoute";

const App = () => {
  return (
    <HashRouter>
      <Routes path="/" element={<AuthenticatedRoute />}>
        <Route index element={<Main />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
      <Routes element={<PrivateRoute />}>
        <Route path="/todo" element={<Todos />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
