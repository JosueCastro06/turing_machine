import React, { useState } from 'react'

const PanelControl = ({ handleClickReset, handleInputEntry, handleStepTape }) => {

  return (
    <>

      <div className="flex flex-row justify-end items-center">

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
      </div>

      <div className="flex justify-end items-center h-screen">
        <div className="flex flex-col items-center mx-4">
          <h2 className="text-lg font-bold mb-2">Título del input</h2>
          <div className="flex flex-row items-center">
            <input type="text" className="w-48 p-2 border border-gray-300 rounded-t-md" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-md rounded-b-md">
              Botón 1
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md rounded-b-md">
              Botón 2
            </button>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2">
          Botón 3
        </button>
      </div>

    </>
  )
}

export default PanelControl;
