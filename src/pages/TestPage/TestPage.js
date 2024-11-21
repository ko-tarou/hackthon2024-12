import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TestPage.css';

function TestPage() {
  const navigate = useNavigate();

  const goToNewSlide = () => {
    navigate('../slide');
  };

  const goNewSlide = () => {
    navigate('../slideview');
  };

  return (
    <div className='TestPage'>
      <div className='title'>TestPage</div>
      <button className='button' onClick={goToNewSlide}>新規スライドを作成</button>
      <button className='button' onClick={goNewSlide}>作ったスライドを見る</button>
    </div>
  );
}

export default TestPage;
