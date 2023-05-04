import React, { useEffect, useState } from 'react'
import ColorCardComponent from '../ColorCardComponent/ColorCardComponent';
import { getColorsListFromLS, setColorsListFormLS } from '../../util/localStorage';
import useColors from './../../state/AddColor.state';
import './RemoveColor.style.scss';


const RemoveColorComponent = () => {
  const [colorList, setColorList] = useState([]);
  const removeColor = useColors((state) => state.removeColor)

  useEffect(() => {
    setColorList(getColorsListFromLS());
  }, [])

  const handleColorClick = (item) => {
    removeColor(item);
    setColorList(getColorsListFromLS());
  }

  return (
    <>
      <h3>Your color list</h3>
      <div className='RemoveColor-Wrapper'>
        { colorList.map((item, index) => (
          <div onClick={() => handleColorClick(item)} key={ index + item.colorHex }>
            <ColorCardComponent
              title={ item.title }
              name={ item.name }
              colorHex={ item.colorHex }
            />
          </div>
          )) }
      </div>
    </>
  )
}

export default RemoveColorComponent