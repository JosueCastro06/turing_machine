import React from 'react'

const Tape = ({ tape, head }) => {
  return (
    <>
      <h2>Tape</h2>
      <div className="w-full flex justify-center items-center">
        <input className='w-full rounded border border-gray-400 mb-6 max-w-xl mx-auto text-center' type="text" value={`${tape.left}*${head}${tape.rigth}`} readOnly/>
        {/* <div className="left_tape">{tape.left}</div>
        <div className="HEAD">*{head}</div>
        <div className="rigth_tape">{tape.rigth}</div> */}
      </div>
    </>
  )
}

export default Tape;