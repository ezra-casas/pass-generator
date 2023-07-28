export function Slider({ value, onChange }) {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className="slider-container">
      <label htmlFor="password length">Password Length</label>
      <input
        value={value}
        onChange={handleChange}
        type="range"
        min="2"
        max="50"
      />
      {value}
    </div>
  );
}
