import { useState, useEffect, useRef, useLayoutEffect } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e =>
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
  ];
};

export const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));

    fetch(url)
      .then(x => x.text())
      .then(y => {
        setTimeout(
          () => {
            // if (isCurrent.current) {
            setState({ data: y, loading: false });
            // }
          } /*3000*/
        );
      });
  }, [url, setState]);

  return state;
};

export const useMeasure = (ref, deps) => {
  const [rect, setRect] = useState({});

  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rect;
};

export const useCountRenders = () => {
  const renders = useRef(0);

  console.log(`renders: ${renders.current++}`);
};
