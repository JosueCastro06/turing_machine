import React, { useState } from 'react'

const PanelControl = ({handleClickReset, handleInputEntry }) => {

  return (
    <>
      <div>PanelControl</div>
      {/* <button>Run</button> */}
      <input type="text" onChange={handleInputEntry}/>
      <button>Step</button>
      <button onClick={handleClickReset}>Reset</button>
    
    </>
  )
}

export default PanelControl;
