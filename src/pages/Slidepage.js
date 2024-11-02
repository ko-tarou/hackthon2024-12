import React from 'react'
import "../styles/Slidepage.css"
import Tabs from '../common/object-list-tab/Tabs'

function Slidepage() {
	return (
    <div className='Slidepage'>

			{/* object-list */}
			<div className='object-list'>
				<div className='tab'>
					<Tabs></Tabs>
				</div>
				<div className='content'></div>
				
			</div>









			<div className='not-object'>
				<div className='main'>
					<div className='main-slide'></div>
					<div className='note'></div>
				</div>
				<div className='slide-list'></div>
			</div>


		</div>
  )
}

export default Slidepage