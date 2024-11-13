import React, { useState, useEffect } from 'react';
import "../styles/Projectpage.css";
import axios from 'axios';
import io from 'socket.io-client';

const socket = io("http://localhost:5000"); // WebSocketサーバーのURL

function Projectpage() {
  const [users, setUsers] = useState([]);

  // 初回読み込み時にユーザー情報を取得
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // WebSocketで新しいユーザーが追加されたときの処理
  useEffect(() => {
    socket.on("userAdded", (newUser) => {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    });

    // クリーンアップ
    return () => {
      socket.off("userAdded");
    };
  }, []);

  return (
    <div>
      <h1>ユーザー情報</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            名前: {user.name}, メール: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projectpage;
