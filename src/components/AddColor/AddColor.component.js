import React, { useState } from 'react'
import './AddColor.style.scss';
import { PhotoshopPicker, SwatchesPicker } from 'react-color'
import { Link } from "react-router-dom";
import useColors from './../../state/AddColor.state';

const AddColorComponent = () => {
  const [background, setBackground ] = useState('#fff')
  const [colorName, setColorName ] = useState('')
  const addColor = useColors((state) => state.addColor)

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };

  const handleNameChange = (e) => {
    setColorName(e.target.value)
  }

  const handleColorSet = () => {
    addColor({ colorHex: background, name: colorName, title: colorName.toLowerCase() })
  }
  
    return (
      <div className='main-component'>
                <div className="background" />
        <div className="AddColor-Wrapper">
          <div className="AddColor-Grid">
            <PhotoshopPicker
              color={ background }
              onChange={ handleChangeComplete }
              onChangeComplete={ handleChangeComplete }
            />
            <SwatchesPicker
              color={ background }
              onChange={ handleChangeComplete }
              onChangeComplete={ handleChangeComplete }
            />
          </div>
          <div className="AddColor-Controls">
            <input type="text" placeholder='Your color name' value={colorName} onChange={handleNameChange}/>
            <button onClick={ handleColorSet }>
              <Link to="/main">SAVE</Link>
            </button>
          </div>
        </div>
      </div>
    );
}

export default AddColorComponent