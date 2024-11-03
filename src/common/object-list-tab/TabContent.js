import React from 'react';

function TabContent({ activeTab }) {
  return (
    <div style={{padding: '20px' }}>
      {activeTab === "tab1" && <div className='Tabs-content'>タブ1の内容</div>}
      {activeTab === "tab2" && <div>タブ2の内容</div>}
      {activeTab === "tab3" && <div>タブ3の内容</div>}
      {activeTab === "tab4" && <div>タブ4の内容</div>}
      {activeTab === "tab5" && <div>タブ5の内容</div>}
    </div>
  );
}

export default TabContent;
