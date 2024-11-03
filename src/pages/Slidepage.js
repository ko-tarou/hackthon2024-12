import React ,{useState}from 'react'
import "../styles/Slidepage.css"
import Tabs from "../common/object-list-tab/Tabs"
import TabContent from "../common/object-list-tab/TabContent"

function Slidepage() {

	const [activeTab,setActiveTab] = useState("tab1");

	return (
    <div className='Slidepage'>

			{/* object-list */}
			<div className='object-list'>
				<div className='tab'>
					<Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
				</div>
				<div className='content'>
					<TabContent activeTab={activeTab}/>	
				</div>
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