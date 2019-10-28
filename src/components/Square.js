import React from "react";

import { useCountRenders } from "../hooks";

const Square = React.memo(({ increment, n }) => {
  useCountRenders();

  return <button onClick={() => increment(n)}>{n}</button>;
});

export default Square;
