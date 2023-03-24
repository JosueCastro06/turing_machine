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

      {/* <div className="flex justify-end items-center mt-8">
        <div className="flex flex-col items-center mx-4">
          <h2 className="text-lg font-bold mb-2">Panel Control</h2>
          <div className="flex flex-row items-center">
            <input type="text" className="w-80 p-2 border border-gray-300 rounded-t-md" onChange={handleInputEntry} />
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
      </div> */}

      <div className="fixed right-0 w-1/3 bg-gray-100 mt-n10">
        <div className="flex flex-col h-full p-4">
          <input className="border border-gray-400 px-4 py-2 mb-4" type="text" placeholder="Inserte la cinta" onChange={handleInputEntry}/>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={handleStepTape}>
              Step
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClickReset}>
              Reset
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded" onClick={handleClickReset}>
              Run
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default PanelControl;
