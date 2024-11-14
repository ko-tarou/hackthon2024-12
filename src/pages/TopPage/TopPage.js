import React ,{ useState }from 'react'
import axios from "axios"
import './TopPage.css'

function Toppage() {
  const [ name, setName ] = useState("")
  const [ email,setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      const response = await axios.post("http://localhost:5000/api/users",{
        name:name,
        email:email,
      })
      alert(response.data);
      setName("");
      setEmail("");
    }catch (error){
      console.error("Error adding user: ",error);
      alert("データの保存に失敗しました");
    }
  }

  return (

    <div className='Toppage'>

      <h1>ドラッグ可能なテキストボックス</h1>

      <div>高岡己太朗</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>


      <h1>フォーム</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>メール:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type='submit'>送信</button>
      </form>
    </div>
  )
}

export default Toppage