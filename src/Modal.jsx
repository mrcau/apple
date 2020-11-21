import React from 'react'

export default function Modal(pr){
  return(
  <div className="modal">
    <h1>이건 모달창</h1>
    <h2>{pr.글제목[pr.글제목숫자]}</h2>

  </div>
  )
}