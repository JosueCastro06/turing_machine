import { useEffect, useState } from "react";
import { Tape, PanelControl, FormInputs } from "./components";
import { overwriteTape } from "./helpers/methods";
import { useGenerateFormatData } from "./hooks/useGenerateFormatData";
import { useValidateInputs } from "./hooks/useValidateInputs";
// import Tape from './components/Tape';
// import PanelControl from './components/PanelControl';
// import FormInputs from './components/FormInputs';

export const AppQuantum = () => {
  const {
    transitions,
    tape,
    finalStates,
    dictonary,
    currentState,
    head,
    messageTransitionsError,
    handleInputTransitions,
    handleInputFinalStates,
    handleInputDictionary,
    handleClickReset,
    handleInputEntry,
    handleCurrentState_Step,
    handleHead_Step,
    handleTape_Step,
  } = useValidateInputs();

  const { transitionsData } = useGenerateFormatData({
    transitions,
    handleInputDictionary,
  });

  const [finalProcess, setfinalProcess] = useState(false);

  const handleStepTape = (e) => {
    if(transitions.size == 5){
      if (
        transitionsData[currentState] &&
        transitionsData[currentState][head == " " ? "_" : head]
      ) {
        const { newLeft, newHead, newRigth, newCurrentState } = overwriteTape({
          left: tape.left,
          head:
            transitionsData[currentState][head == " " ? "_" : head].write == "_"
              ? " "
              : transitionsData[currentState][head == " " ? "_" : head].write,
          rigth: tape.rigth,
          move: transitionsData[currentState][head == " " ? "_" : head].move,
          currentState:
            transitionsData[currentState][head == " " ? "_" : head].next,
        });
        handleCurrentState_Step(newCurrentState);
        handleHead_Step(newHead);
        handleTape_Step({ left: newLeft, rigth: newRigth });
        // handleStepTape();
      } else {
        setfinalProcess(true);
      }
    }else if(transitions.size == 3){
      if (
        transitionsData[currentState] &&
        transitionsData[currentState][head == " " ? "_" : head]
      ) {
        const { newLeft, newHead, newRigth, newCurrentState } = overwriteTape({
          left: tape.left,
          head: head,
          rigth: tape.rigth,
          move: "R",
          currentState: transitionsData[currentState][head == " " ? "_" : head].next,
        });
        handleCurrentState_Step(newCurrentState);
        handleHead_Step(newHead);
        handleTape_Step({ left: newLeft, rigth: newRigth });
        // handleStepTape();
      } else {
        console.log("Finish");
        if(finalStates.includes(currentState)){
          console.log("Aprobado");
        }else{
          console.log("Rechazado");
        }
        setfinalProcess(true);
      }
    }
  };

  return (
    <>
      <div className="relative h-32 w-32">
        <div className="absolute inset-x-0 top-0 h-16">
          <h1 className = "text-xl">APP Quantum</h1>
        </div>
      </div>
      <Tape tape={tape} head={head} />
      <FormInputs
        handleInputTransitions={handleInputTransitions}
        handleInputFinalStates={handleInputFinalStates}
        handleInputDictionary={handleInputDictionary}
        transitions={transitions}
        messageTransitionsError={messageTransitionsError}
      />
      {transitions && transitions.flag ? (
        <PanelControl
          handleClickReset={handleClickReset}
          handleInputEntry={handleInputEntry}
          handleStepTape={handleStepTape}
        />
      ) : (
        ""
      )}
    </>
  );
};
