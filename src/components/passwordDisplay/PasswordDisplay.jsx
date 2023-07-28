import "./display.css";

export default function PasswordDisplay(props) {
  const { value, numbersChecked, specialsChecked, capitalsChecked } = props;
  const generatePass = (length) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * lowerAlphabet.length);
      password += lowerAlphabet[randIndex];
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
