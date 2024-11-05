import React from 'react'
import MovableTextBox from '../../common/MovableTextBox'
import "../../styles/tabs/Char.css"

function Char() {
  return (
    <div className='Char'>
      <div className='normal'>テキスト</div>
      <div className='item'>
        <MovableTextBox/>
      </div>
    </div>
	)
}

export default Char