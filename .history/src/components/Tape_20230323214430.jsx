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

      <div className="flex justify-center rounded border border-gray-400 mb-6 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto h-64">
        <div className="left_tape">{tape.left}</div>
        <div className="HEAD">*{head}</div>
        <div className="rigth_tape">{tape.rigth}</div>
      </div>

    </>
  )
}

export default Tape;