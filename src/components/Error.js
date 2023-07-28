import { useRouteError } from "react-router-dom"; // This will help us to read the error

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <h1>{err?.error?.message}</h1>
    </div>
  );
};

export default Error;