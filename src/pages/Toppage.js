import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../styles/Toppage.css';
import "../App.css";

function Toppage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.lang = "ja-JP";
      recog.continuous = true;
      recog.interimResults = true;
      setRecognition(recog);

      recog.onresult = (event) => {
        let newTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          newTranscript += event.results[i][0].transcript;
        }
        setTranscript(newTranscript);
      };

      recog.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        alert("エラーが発生しました");
        recog.stop();
      };

      return () => {
        recog.onresult = null;
        recog.onerror = null;
      };
    } else {
      alert("お使いのブラウザは音声認識に対応していません");
    }
  }, []);

  const startRecognition = () => {
    if (recognition) {
      recognition.start();
    } else {
      alert("音声認識に対応していません");
    }
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        name: name,
        email: email,
      });
      alert(response.data);
      setName("");
      setEmail("");
      setTranscript("");
    } catch (error) {
      console.error("Error adding user: ", error);
      alert("データの保存に失敗しました");
    }
  };

  return (
    <div className='Toppage'>
      <div>高岡己太朗</div>
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
        <div>
          <label>議事録:</label>
          <textarea
            value={transcript}
            readOnly
            placeholder='音声認識で議事録を生成中'
          ></textarea>
          <button type='button' onClick={startRecognition}>音声認識開始</button>
          <button type='button' onClick={stopRecognition}>音声認識停止</button>
        </div>
        <button type='submit'>送信</button>
      </form>
    </div>
  );
}

export default Toppage;
