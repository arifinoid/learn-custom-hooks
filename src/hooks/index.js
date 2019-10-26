import { useState, useEffect } from "react";

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
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));

    fetch(url)
      .then(x => x.text())
      .then(y => setState({ data: y, loading: false }));
  }, [url]);

  return state;
};
