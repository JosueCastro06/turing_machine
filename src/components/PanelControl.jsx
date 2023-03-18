import React, { useState } from 'react'

const PanelControl = ({handleClickReset, handleInputEntry, handleStepTape }) => {

  return (
    <>
      <div>PanelControl</div>
      {/* <button>Run</button> */}
      <input type="text" onChange={handleInputEntry}/>
      <button onClick={handleStepTape}>Step</button>
      <button onClick={handleClickReset}>Reset</button>
    
    </>
  )
}

export default PanelControl;
