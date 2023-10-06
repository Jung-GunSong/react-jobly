import { v4 as uuid } from "uuid";

function ErrorMessage({ errorMessages }) {

  const errors = <div>{errorMessages.map(message =>
    <p key={uuid()}>{message.text}</p>)}</div>;

  return (errors);
}

export default ErrorMessage;