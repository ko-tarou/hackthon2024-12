import React from 'react'
import '../styles/Toppage.css'
import "../App.css"

function Toppage() {

  const circle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#000000",
    borderRadius:"50%"
  }

  const stick = {
    width:"10px",
    height: "100px",
    backgroundColor: "#000000"
  }


  return (
    <div className='Toppage'>

      
      <div className='body'>
        <div className='main'>
          <div className='title'>
            ようこそ！
          </div>
        </div>

        <div className='activity'>
          <div className='title'>主な活動</div>
          <div className='info'>
            <div className='box'>
              <div className='smart-project'>スマプロ</div>
            </div>
            <div className='box'>
              <div className='busstop-project'>BusStop</div>
            </div>
            <div className='box'>
              
            </div>
          </div>
        </div>

        <div style={circle}></div>
        <div style={stick}></div>
        <div style={circle}></div>
        <div style={stick}></div>
        <div style={circle}></div>
        <div style={stick}></div>
        <div style={circle}></div>
        <div style={stick}></div>
        <div style={circle}></div>
        <div style={stick}></div>
        <div style={circle}></div>
      </div>
    </div>
  )
}

export default Toppage