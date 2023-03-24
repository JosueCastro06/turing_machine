import React, { useState } from 'react'

const PanelControl = ({ handleClickReset, handleInputEntry, handleStepTape }) => {

  return (
    <>

      {/* <div className="flex flex-row justify-end items-center">

        <div className="flex flex-row items-center">
          <h1 className='text-justify mr-3'>Panel Control</h1>
          <input type="text" className="w-48 p-2 border border-gray-300 rounded-l-md" onChange={handleInputEntry} />
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
      </div> */}

      <div className="flex justify-end items-center">
        <div className="flex flex-col items-center mx-4">
          <h2 className="text-lg font-bold mb-2">Panel Control</h2>
          <div className="flex flex-row items-center">
            <input type="text" className="w-48 p-3 border border-gray-300 rounded-t-md" onChange={handleInputEntry}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-md rounded-b-md ml-2" onClick={handleStepTape}>
              Step
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md rounded-b-md ml-2" onClick={handleClickReset}>
              Reset
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md rounded-b-md ml-2" onClick={handleClickReset}>
              Run
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default PanelControl;
