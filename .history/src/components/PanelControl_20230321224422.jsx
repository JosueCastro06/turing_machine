import React, { useState } from 'react'

const PanelControl = ({handleClickReset, handleInputEntry, handleStepTape }) => {

  return (
    <>

      <div className="flex flex-row items-center">
        <div >PanelControl</div>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-md mr-2" onChange={handleInputEntry}/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2 " onClick={handleStepTape}>
          Step
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2" onClick={handleClickReset}>
          Reset
        </button>
    </div>
    
    </>
  )
}

export default PanelControl;
