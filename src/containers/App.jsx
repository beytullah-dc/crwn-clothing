import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/routes/home/home.component";
import Signin from "../components/routes/sign-in/sign-in.component";
import Navigation from "../components/routes/navigation/navigation.component";

const Shop = () => {
  return (
    <Fragment>
      <h1>I am a shop page.</h1>
    </Fragment>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
