import "./display.css";
import { generatePass } from "../../helpers/passwordUtils";

export default function PasswordDisplay(props) {
  const { value, selectables } = props;
  const display = generatePass(value, selectables);

  return (
    <div className="password-display">
      <h1>{display}</h1>
    </div>
  );
}
