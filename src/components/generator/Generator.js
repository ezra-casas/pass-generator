import "./generator.css";
import { useState } from "react";


// COMPONENTS:
import { Slider } from "../slider/Slider";
import PasswordDisplay from "../passwordDisplay/PasswordDisplay";

export default function Generator() {
  const [sliderValue, setSliderValue] = useState(8);
  const [selectables, setSelectables] = useState(["lowers"]);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  const checkboxOptions = [
    { name: "numbers", label: "numbers" },
    { name: "specials", label: "!@#$" },
    { name: "capitals", label: "capitals" },
    { name: "lowers", label: "no lower" },
  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      // This adds the name to selectables
      // This makes it easier to handle groups of data
      // instead of adding everything in _ group
      setSelectables((prevSelectables) => [...prevSelectables, name]);
    } else {
      // As previously mentioned
      // this allows us to easily remove the group name
      // from the selectables
      setSelectables((prevSelectables) =>
        prevSelectables.filter((item) => item !== name)
      );
    }
  };
  
  const handleClick = () => {

  }
  return (
    <div className="modal">
      
      <PasswordDisplay value={sliderValue} selectables={selectables} />

      <div className="clickables">
        <Slider value={sliderValue} onChange={handleSliderChange} />

        <div className="checkbox-group">
          {checkboxOptions.map((option) => (
            <div key={option.name}>
              <label>
                <input
                  type="checkbox"
                  name={option.name}
                  checked={selectables.includes(option.name)}
                  onChange={handleCheckboxChange}
                  // DISABLED IF ONLY ONE ELEMENT IN SELECTABLES
                  disabled={
                    selectables.includes(option.name) &&
                    selectables.length === 1
                  }
                />
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <div className="btn-group">
          <button >Copy</button>
          <button onClick={handleClick}>Generate</button>
        </div>
      </div>
    </div>
  );
}