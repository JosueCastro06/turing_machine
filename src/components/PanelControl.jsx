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

export default PanelControl;
