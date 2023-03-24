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

      <div className="flex justify-center items-center rounded border border-gray-400 mb-6 max-w-xl mx-auto">
        <div className="left_tape">{tape.left}</div>
        <div className="HEAD">*{head}</div>
        <div className="rigth_tape">{tape.rigth}</div>
      </div>

    </>
  )
}

export default Tape;