import React, { useState,useEffect } from 'react'
import "../styles/Projectpage.css"
import axios from 'axios';

function Projectpage() {

  const [users,setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      }catch(error){
        console.error("Error fetching users:",error);
      }
    }
    fetchUsers()
  },[])

  return (
    <div>

      <h1>ユーザー情報</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            名前:{user.name},メール:{user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projectpage