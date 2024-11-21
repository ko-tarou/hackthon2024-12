import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TestPage.css';

function TestPage() {
  const navigate = useNavigate();

  const goTocreateSlide = () => {
    navigate('../slide');
  };

  const goToviewSlide = () => {
    navigate('../slideview');
  };

  return (
    <div className='TestPage'>
      <div className='title'>TestPage</div>
      <button className='button' onClick={goTocreateSlide}>新規スライドを作成</button>
      <button className='button' onClick={goToviewSlide}>作ったスライドを見る</button>
    </div>
  );
}

export default TestPage;
