import React from 'react';

function TabContent({ activeTab }) {
	return (
    <div style={{border: '1px solid gray',padding: '20px'}}>
			{activeTab === "tab1" && <div>タブの内容</div>}
			{activeTab === "tab2" && <div>タブの内容</div>}
			{activeTab === "tab3" && <div>タブの内容</div>}
		</div>
  );
}

export default TabContent