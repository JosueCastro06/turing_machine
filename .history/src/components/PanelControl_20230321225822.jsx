import React, { useState } from 'react'

const PanelControl = ({handleClickReset, handleInputEntry, handleStepTape }) => {

  return (
    <>

      <div className="flex flex-row justify-end items-center">
        <div >PanelControl</div>
        <div className="flex flex-row items-center">
          <input type="text" className="w-30 p-2 border border-gray-300 rounded-l-md" onChange={handleInputEntry} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md" onClick={handleStepTape}>
            Step
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-3" onClick={handleClickReset}>
            Reset
          </button>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2">
          Run
        </button>
      </div>
    
    </>
  )
}

export default PanelControl;
