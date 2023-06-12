import {Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Todos from "./pages/Todos";
import PrivateRoute from "./util/PrivateRoute";
import AuthenticatedRoute from "./util/AuthenticatedRoute";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<AuthenticatedRoute />}>
          <Route index element={<Main />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<Todos />} />
        </Route>
      </Routes>
  );
};

export default App;
