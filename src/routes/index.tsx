import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/user/form";
import Counter from "../pages/counter";

const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;