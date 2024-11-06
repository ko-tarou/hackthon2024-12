import React from 'react'
import MovableTextBox from '../../common/MovableTextBox'
import "../../styles/tabs/Char.css"
import TextBoxArea from "../../common/drop/TextBoxArea"

function Char() {
  return (
    <div className='Char'>
      <div className='normal'>テキスト</div>
      <div className='item'>
        <MovableTextBox/>
      </div>
      <TextBoxArea/>
    </div>
	)
}

export default Char