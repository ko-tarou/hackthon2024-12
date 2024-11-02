import React from 'react'
import "../styles/Slidepage.css"

function Slidepage() {
	return (
    <div className='Slidepage'>

			<div className='object-list'></div>
			<div className='not-object'>
				<div className='main'>
					<div className='main-slide'>メインスライド</div>
					<div className='note'>ノート</div>
				</div>
				<div className='slide-list'>スライドリスト</div>
			</div>


		</div>
  )
}

export default Slidepage