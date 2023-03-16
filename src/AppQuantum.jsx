import React, { useState } from 'react'

import {Tape, PanelControl, FormInputs} from './components';
// import Tape from './components/Tape';
// import PanelControl from './components/PanelControl';
// import FormInputs from './components/FormInputs';


const returnInfoData = (flag, message, info = {}) => {
  return {
    flag,
    message,
    ...info
  };
}

const validatePositionToDataMachine = (quintuples) => {
  let flag = true;
  quintuples.forEach(quintuple => {
    const data = quintuple.split(' ');
    if(data[3] != 'R' && data[3] != 'r' && data[3] != 'L' && data[3] != 'l'){
      flag = false;
      return;
    }
  });

  return flag;
}

const validateInputTransitions = (input) => {
  let initialLength;
  let flagSizeQuintuple = true;
  let quintuples = input.split('\n').filter(quintuple => quintuple != '').map(quintuple => quintuple.trim());

  initialLength = (quintuples[0].trim().split(' ').length == 5 || quintuples[0].trim().split(' ').length == 3) && quintuples[0].trim().split(' ').length;
  if(initialLength){
    quintuples.forEach(quintuple => {
      if(quintuple.trim().split(' ').length != initialLength){
        flagSizeQuintuple = false;
        return;
      }
    });
    if(!flagSizeQuintuple){
      return returnInfoData(flagSizeQuintuple,"Length transitions incorrect !!");
    }
    if((initialLength == 5) && (!validatePositionToDataMachine(quintuples))){
      return returnInfoData(false,"Syntax Error !!");
    }      
  }else{
    return returnInfoData(false,"Length transitions incorrect !!");    
  }

  return returnInfoData(true,"OK", {data: {
    initialLength,
    quintuples,
  }});
}



export const AppQuantum = () => {

  const [transitions, setTransitions] = useState({
    size: 0,
    quintuples: [],
    flag: false,
  });
  const [tape, setTape] = useState("");
  const [finalStates, setFinalStates] = useState([]);
  const [dictonary, setDictonary] = useState([]);
  const [currentState, setCurrentState] = useState('0');
  const [headPosition, setHeadPosition] = useState(0);

  const [messageError, setMessageError] = useState("");


  const handleInputTransitions = (e) => {
    if(e.target.value != ''){
      const dataValidate = validateInputTransitions(e.target.value.trim());
      if(dataValidate.flag){
        setMessageError(dataValidate.message);
        setTransitions({
          size: dataValidate.data.initialLength,
          quintuples: dataValidate.data.quintuples,
          flag: dataValidate.flag
        });
      }else{
        setMessageError(dataValidate.message);
        setTransitions({});
      }
    }else{
      setMessageError("");
      setTransitions({});
    }
  }

  const handleInputFinalStates = (e) => {
    if(e.target.value != ''){
      const finalStates = e.target.value.trim().split('\n').filter(state => state != '').map(state => state.trim());
      setFinalStates(finalStates); 
    }
  }

  const handleInputDictionary = (e) => {
    if(e.target.value != ''){
      const dictonary = e.target.value.trim().split('').filter(state => state != '').map(state => state.trim());
      setDictonary(dictonary); 
    }
  }


  return (
    <>
        <h1>APP Quantum</h1>    
        <Tape/>
        <PanelControl/>
        {/* <FormInputs setTransitions={setTransitions} setFinalStates={setFinalStates} setDictonary={setDictonary} setMessageError={setMessageError} /> */}
        <FormInputs handleInputTransitions={handleInputTransitions}  handleInputFinalStates={handleInputFinalStates}  handleInputDictionary={handleInputDictionary}  transitions={transitions}  messageError={messageError}/>
        
    </>
  )
}
