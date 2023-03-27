import React from 'react'

const Tape = ({ tape, head }) => {
  return (
    <>
    <h2 className='text-center mb-4 font-semibold text-white'>Tape</h2>
      <div className="w-full flex justify-center items-center col">
        <input className='overflow-auto text-30px w-screen rounded mb-6 text-center h-12 bg-custom-input text-white' type="text" value={`${tape.left}[${head}]${tape.rigth}`} readOnly/>
        {/* <div className="left_tape">{tape.left}</div>
        <div className="HEAD">*{head}</div>
        <div className="rigth_tape">{tape.rigth}</div> */}
      </div>
    </>
  )
}

export default Tape;