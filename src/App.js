import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [글제목, 글제목변경] = useState(['명륜진사갈비','생갈비','소갈비']);
  const [good, setgood] = useState(0);
  const [show, setShow] = useState(false);
  const [글제목숫자, 글제목숫자변경] = useState(0)
  const [입력값, 입력값변경] = useState('');
  return (
    <div className="App">
      <div className="header">리액트복습</div>
      <div className="items">
        {글제목.map((e,i) => {
          return (
            <div className="itemrow">
              <div className="item">
                <h3 onClick={() => {글제목숫자변경(i);}}>{i+1}.{e}</h3>
                <div className='good' onClick={()=>{setgood(good+1)}}>🖕</div>
                <span>{good}</span> 
              </div>           
              <hr/>
            </div>
          )
        })}
        
        {show && <Modal 글제목={글제목} 글제목숫자={글제목숫자}/>}
        
      </div>
      <footer><input onChange={(e) => {
        e.target.value&&입력값변경(e.target.value);
      }}/>

      <button className="add" onClick={() => {
        const newarray = [...글제목];

        newarray.push(입력값);
        글제목변경(newarray);
      }}>ADD </button>

      <button onClick={() => {
        setShow(!show);        
      }}> 모달창 </button>

      </footer>
    </div>
  );
}


// function Modal(pr){
//   return(
//   <div className="modal">
//     <h1>이건 모달창</h1>
//     <h2>{pr.글제목[pr.글제목숫자]}</h2>

//   </div>
//   )
// }
export default App;
