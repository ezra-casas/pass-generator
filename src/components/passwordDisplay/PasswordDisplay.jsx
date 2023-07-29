import "./display.css";

export default function PasswordDisplay(props) {
  const { value, selectables } = props;

  const generatePass = (length) => {
    let password = "";

    const options = {
      numbers: "1234567890",
      specials: "!?@#$%.-_&*",
      capitals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowers: "abcdefghjiklmnopqrstuvwxyz",
    };

    // randomly select from SELECTABLES
    // then access options bases on the SELECTABLE
    // finally randomaly select an element

    for (let i = 0; i < length; i++) {
      // We check if there's more than one to be more efficient
      // on not having to run math to randomly select a 1 element
      // in an array.
      if (selectables.length === 1) {
        const selectedOptions = options[selectables[0]];
        const randomCharacter = Math.floor(
          Math.random() * selectedOptions.length
        );
        password += selectedOptions[randomCharacter];
      } else {
        // randomize selectables array selection:
        const randomOptions =
          selectables[Math.floor(Math.random() * selectables.length)];
        const selectedOptions = options[randomOptions];
        const randomCharacter = Math.floor(
          Math.random() * selectedOptions.length
        );

        password += selectedOptions[randomCharacter];
      }
    }
    return password;
  };

  const display = generatePass(value);

  return (
    <div className="password-display">
      <h1>{display}</h1>
    </div>
  );
}
