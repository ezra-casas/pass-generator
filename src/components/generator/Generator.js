import "./generator.css"
import { useState } from "react"

// COMPONENTS:
import { Slider } from "../slider/Slider"
import PasswordDisplay from "../passwordDisplay/PasswordDisplay"

export default function Generator(){
    const [sliderValue, setSliderValue] = useState(0)
    const handleSliderChange = newValue => {
        setSliderValue(newValue)
    }
    
    return(
        <div className="modal">
            <div className="clickables">
                <PasswordDisplay value={sliderValue}/>
                <Slider value={sliderValue} onChange={handleSliderChange}/>
                <div className="checkbox-group">
                    <div><label><input type="checkbox"></input>numbers</label></div>
                    <div><label><input type="checkbox"></input>!@#$</label></div>
                    <div><label><input type="checkbox"></input>capitals</label></div>
                </div>
                <div className="btn-group">
                    <button>Copy</button>
                    <button>Generate</button>
                </div>
            </div>
        </div>
    )
}