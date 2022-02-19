import React from "react";

import { DoubleCounter } from "../../components/counter/doubleCounter";
import { HandleCounter } from "../../components/counter/handleCounter";

const Counter: React.FC = () => {
  return (
   <>
    <HandleCounter />
    <DoubleCounter />
   </>
  );
};

export default Counter;