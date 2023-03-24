import React, { useState } from 'react'

const PanelControl = ({handleClickReset, handleInputEntry, handleStepTape, handleRunTape, isRunning, handleStop }) => {

  return (
    <>
      <div>PanelControl</div>
      {/* <button>Run</button> */}
      <input type="text" onChange={handleInputEntry}/>
      <button onClick={handleRunTape} disabled={isRunning}>Run</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleStepTape} disabled={isRunning}>Step</button>
      <button onClick={handleClickReset} disabled={isRunning}>Reset</button>
    </>
  )
}
      {/* const PanelControl = ({ handleClickReset, handleInputEntry, handleStepTape }) => {

  return (
    <>

      <div className="flex justify-between">
        <div className="flex flex-col h-full p-10">
          <input
            className="border border-gray-400 px-4 py-2 mb-4 w-80"
            type="text"
            placeholder="Inserte la cinta"
            onChange={handleInputEntry}
          />
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
} */}

export default PanelControl;
