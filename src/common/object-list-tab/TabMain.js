import React, {useState} from 'react'

function TabMain() {

	const [activeTab,setActiveTab] = useState("tab1");

	return (
    <div>
			<h1>タブ切り替え例</h1>
			<Tabs activeTab={activeTab}/>
			<TabContent activeTab={activeTab}/>
		</div>
	)
}

export default TabMain