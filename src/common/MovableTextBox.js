import React,{useState} from 'react'
import Draggable from 'react-draggable'

function MovableTextBox() {

	const [text,setText] = useState("")

	const handleChange = (e) => {
		setText(e.target.value)
	}

	return (
		<Draggable>
			<div style={{
				border : '1px dashed black',
				width : '30px',
				height : "30px",
				cursor : 'move',
				background : '#f0f0f0',
				textAlign : 'center'
			}}>
				<textarea 
					value={text}
					onChange={handleChange}
					style={{
						width: '100%',
						height: '50px',
						resize: 'none',
						border: 'none',
						outline: 'none',
						textAlign: 'center',
						backgroundColor: 'transparent'
					}}
				/>
			</div>
		</Draggable>
  )
}

export default MovableTextBox