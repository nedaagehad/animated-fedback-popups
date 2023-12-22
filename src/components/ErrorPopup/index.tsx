import ActionButton from "../ActionButton";
import Face from "../Face";

const ErrorPopup = () => {
  return (
    <div className="error-box">
      <Face mood="sad" />
      <div className="text-wrapper">
        <h1>Error!</h1>
        <p>oh no, something went wrong.</p>
      </div>
      <ActionButton placeholder="Try Again" type="error" />
    </div>
  );
};

export default ErrorPopup;
