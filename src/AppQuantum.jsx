import { useEffect, useState } from "react";
import { Tape, PanelControl, FormInputs, BarControl } from "./components";
import { processStepTape } from "./helpers/methods";
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
    currentState,
    head,
    messageTransitionsError,
    isRunning,
    counter,
    generalMessage,
    handleInputTransitions,
    handleInputFinalStates,
    handleInputDictionary,
    handleClickReset,
    handleInputEntry,
    handleCurrentState_Step,
    handleHead_Step,
    handleTape_Step,
    handleRunTape,
    handleStop,
    handleCounter,
    handleGeneralMessage,
  } = useValidateInputs();

  const { transitionsData } = useGenerateFormatData({
    transitions,
    handleInputDictionary,
  });

  const handleStepTape = async (e) => {
    const {
      newCurrentStateReturn,
      newHeadReturn,
      newLeftReturn,
      newRigthReturn,
      flagFinalProcessReturn = false,
    } = processStepTape({
      transitions,
      transitionsData,
      tape,
      head,
      currentState,
    });

    if (flagFinalProcessReturn) {
      handleGeneralMessage(
        `Finish${
          transitions.size == 3
            ? finalStates.includes(currentState)
              ? ", Approved"
              : ", Rejected"
            : ""
        } !`
      );
      handleStop();
    } else {
      handleCurrentState_Step(newCurrentStateReturn);
      handleHead_Step(newHeadReturn);
      handleTape_Step({ left: newLeftReturn, rigth: newRigthReturn });
    }
  };

  useEffect(() => {
    let timeout;
    if (isRunning) {
      timeout = setTimeout(() => {
        handleStepTape();
        handleCounter();
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isRunning, counter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center items-center mb-10">
        <div className="text-center pt-16">
          <h1 className="text-4xl font-bold border-b-4 border-blue-500 pb-4">
            APP Quantum
          </h1>
        </div>
      </div>
      <Tape tape={tape} head={head} />
      <BarControl
        currentState={currentState}
        generalMessage={generalMessage}
        counter={counter}
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <FormInputs
          handleInputTransitions={handleInputTransitions}
          handleInputFinalStates={handleInputFinalStates}
          transitions={transitions}
          messageTransitionsError={messageTransitionsError}
        />
        {transitions && transitions.flag ? (
          <PanelControl
            handleClickReset={handleClickReset}
            handleInputEntry={handleInputEntry}
            handleStepTape={handleStepTape}
            handleRunTape={handleRunTape}
            isRunning={isRunning}
            handleStop={handleStop}
          />
        ) : (
          ""
        )}
      </div>
      <footer className="mt-4 text-center">
        <div>Parcial - Computación Cuántica</div>
        <div className="mt-5">
          <h3>Integrantes</h3>
          <ul className="mt-2">
            <li className="mb-1">
              Josue Joel Castro Paternina - 20221678027
            </li>
            <li className="mb-4">
              Pablo Alejandro Guacaneme Lara - 20221678008
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
