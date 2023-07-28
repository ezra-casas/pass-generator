export default function PasswordDisplay({ value }) {
  const generatePass = (length) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * lowerAlphabet.length);
      password += lowerAlphabet[randIndex];
    }
    return password;
  };

  const display = generatePass(value); // Step 1: Call the generatePass function

  return (
    <div>
      <h1>{display}</h1>
    </div>
  );
}
