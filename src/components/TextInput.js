import { useState } from "react";



function App() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("#000000");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [option, setOption]= useState("left");
  const [fonts , setFonts]= useState("Arial")
  
  const styles = {
    color: color,
    fontSize: fontSize + "px",
    fontWeight: bold ? "bold" : "normal" ,
    fontStyle: italic ? "italic"   : "normal",
    fontFamily: fonts,
  
    textDecoration: underline ? "underline" : "none",
   
    textAlign: option,
  };
  return (
    <div className="App">
      <textarea value={text} onInput={({ target }) => setText(target.value)}></textarea>
      <fieldset>
        <legend>Font size</legend>
        <input type="range"
          min="10"
          max="100"
          value={fontSize}
          onInput={({ target }) => setFontSize(target.value)}  /> {fontSize}px
      </fieldset>

      <fieldset>
        <legend>Color</legend>
        <input type="color"
          value={color}
          onInput={({ target }) => setColor(target.value)}  /> {color}
      </fieldset>

      <fieldset>
        <legend>Style</legend>
        <input type="checkbox"
          value={bold}
          onInput={({ target }) => setBold(target.checked)}  /> <label style={{fontWeight:"bold"}}>Bold</label>
        <input type="checkbox"
          value={italic}
          onInput={({ target }) => setItalic(target.checked)}  /> <label style={{fontStyle:"italic"}}>italic</label>
        <input type="checkbox"
          value={underline}
          onInput={({ target }) => setUnderline(target.checked)}  /> <label style={{textDecoration:"underline"}}>Underline</label>
      </fieldset>
      <fieldset>
        <legend>Text align</legend>
        <select  onChange={({ target }) => setOption(target.value)}>
            <option>left</option>
            <option>center</option>
            <option>right</option>
            <option>justify</option>
        </select>
        </fieldset>
        <fieldset>
        <legend>FontFamily</legend>
          <input name="fonts" type="radio"
              value={ "Monospace"}
              onInput={({ target }) => setFonts(target.value)}  /> <label style={{fontFamily:" Monospace"}}> monospace</label><br></br>
          <input name="fonts" type="radio"
            value={"Fantasy"}
            onInput={({ target }) => setFonts(target.value)}  /> <label style={{fontFamily:"fantasy"}}>fantasy</label><br></br>
          <input name="fonts" type="radio"
            value={"Arial"}
            onInput={({ target }) => setFonts(target.value)}  /> <label style={{fontFamily:"Arial"}}>Arial</label><br></br>
          <input name="fonts" type="radio"
            value={"MyFont"}
            onInput={({ target }) => setFonts(target.value)}  /> <label style={{fontFamily:"MyFont"}}>MyFont</label><br></br>
          <input name="fonts" type="radio"
            value={"Courier"}
            onInput={({ target }) => setFonts(target.value)}  /> <label style={{fontFamily:"Courier"}}>Courier</label><br></br>
        
      </fieldset>
      <div style={styles}>{text}</div>
    </div>
  );
}
export default App;