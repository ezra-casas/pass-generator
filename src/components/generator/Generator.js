import "./generator.css"
export default function Generator(){
    
    
    return(
        <div className="modal">
            <div><h1>PASSWORD DISPLAY</h1></div>
            
            <div className="clickables">
            <div className="slider-container">
                <label for="password length">
                    Password Length
                </label>
                <input type="range" min="2" max="50"></input>
                
            </div>
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