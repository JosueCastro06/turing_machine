import React, { useState } from 'react'

// const PanelControl = ({ handleClickReset, handleInputEntry, handleStepTape, handleRunTape, isRunning, handleStop }) => {

//   return (
//     <>
//       <div>PanelControl</div>
//       <input type="text" onChange={handleInputEntry} />
//       <button onClick={handleRunTape} disabled={isRunning}>Run</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleStepTape} disabled={isRunning}>Step</button>
//       <button onClick={handleClickReset} disabled={isRunning}>Reset</button>
//     </>
//   )
// }
const PanelControl = ({ handleClickReset, handleInputEntry, handleStepTape, handleRunTape, isRunning, handleStop }) => {

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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={handleRunTape} disabled={isRunning}>Run</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={handleStop}>Stop</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={handleStepTape} disabled={isRunning}>
              Step
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClickReset} disabled={isRunning}>
              Reset
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default PanelControl;
