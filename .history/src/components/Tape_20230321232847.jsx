import React from 'react'

const Tape = ({ tape, head }) => {
  return (
    <>
      {/* <h2>Tape</h2> */}

      {/* <div>
        <div className="left_tape">{tape.left}</div>
        <div className="HEAD">*{head}</div>
        <div className="rigth_tape">{tape.rigth}</div>
      </div> */}

      <div className="flex flex-col items-center justify-center">
        <div className="left_tape">{tape.left}</div>
        <div className="HEAD">*{head}</div>
        <div className="rigth_tape">{tape.rigth}</div>
      </div>
    </>
  )
}

export default Tape;