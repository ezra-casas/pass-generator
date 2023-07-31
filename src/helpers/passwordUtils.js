const options = {
    numbers: "1234567890",
    specials: "!?@#$%.-_&*",
    capitals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowers: "abcdefghjiklmnopqrstuvwxyz",
  };

const getRandomCharacter = (options) => {
    const randomCharacter = Math.floor(Math.random() * options.length);
    return options[randomCharacter];
};

export const generatePass = (length, selectables) => {
    let password = "";

    // randomly select from SELECTABLES
    // then access options bases on the SELECTABLE
    // finally randomaly select an element

    if (selectables.length === 1) {
      const selectedOptions = options[selectables[0]];
      for (let i = 0; i < length; i++) {
        password += getRandomCharacter(selectedOptions);
      }
    } else {
      for (let i = 0; i < length; i++) {
        // Randomly select a selectable from selectables array
        const randomOptions =
          selectables[Math.floor(Math.random() * selectables.length)];
        const selectedOptions = options[randomOptions];
        password += getRandomCharacter(selectedOptions);
      }
    }

    return password;
};