import { useState } from "react";

const useVisibility = (component, visibility = false) => {
  const [visible, setVisibility] = useState(() => visibility);
  console.log(visible);

  return [visible ? component : null, () => setVisibility((v) => !v)];
};

export default useVisibility;
