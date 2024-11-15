import { useEffect } from 'react';

function useWebSocket() {
  const sendUpdate = (data) => {
    // 実際のWebSocket接続ロジックをここに追加
    console.log('データ送信:', data);
  };

  useEffect(() => {
    // WebSocket接続を設定
    const socket = new WebSocket('ws://localhost:8080'); // WebSocketのURLを必要に応じて変更

    socket.onopen = () => {
      console.log('WebSocket接続が確立されました');
    };

    socket.onmessage = (message) => {
      console.log('メッセージ受信:', message.data);
    };

    return () => {
      socket.close();
    };
  }, []);

	return { sendUpdate };
}

export default useWebSocket;
