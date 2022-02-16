import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/user/form";

const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;