import React from 'react'

function Tabs({activeTab,setActiveTab}) {
	return (
    <div style={{display:'flex',gap: '20px',marginBottom: '20px'}}>
			<button onClick={() => setActiveTab("tab1")} style={{backgroundColor:activeTab === "tab1" ? 'lightblue' : 'white'}}>
				タブ1
			</button>
			<button onClick={() => setActiveTab("tab2")} style={{backgroundColor:activeTab === "tab2" ? 'lightblue' : 'white'}}>
				タブ2
			</button>
			<button onClick={() => setActiveTab("tab3")} style={{backgroundColor:activeTab === "tab3" ? 'lightblue' : 'white'}}>
				タブ3
			</button>
		</div>
  )
}

export default Tabs