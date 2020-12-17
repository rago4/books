import { FC, useEffect, useState } from "react";

const ClientOnly: FC = ({ children }) => {
  const [hasMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
