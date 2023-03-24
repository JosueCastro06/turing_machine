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

      <div className="mx-auto rounded border border-gray-400 mb-6 w-65">
        <div className="left_tape">{tape.left}</div>
        <div className="HEAD">*{head}</div>
        <div className="rigth_tape">{tape.rigth}</div>
      </div>

    </>
  )
}

export default Tape;