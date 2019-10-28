import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

import { useFetch, useMeasure, useCountRenders } from "../hooks";

const Square = React.memo(({ increment, n }) => {
  useCountRenders();

  return <button onClick={() => increment(n)}>{n}</button>;
});

export default Square;
