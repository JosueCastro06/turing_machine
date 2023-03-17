import { Tape, PanelControl, FormInputs } from "./components";
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
    handleInputEntry
  } = useValidateInputs();

  const { transitionsData } = useGenerateFormatData({
    transitions,
    handleInputDictionary,
  });

  return (
    <>
      <h1>APP Quantum</h1>
      <Tape tape={tape} head={head}/>
      <FormInputs
        handleInputTransitions={handleInputTransitions}
        handleInputFinalStates={handleInputFinalStates}
        handleInputDictionary={handleInputDictionary}
        transitions={transitions}
        messageTransitionsError={messageTransitionsError}
      />
      {transitions && transitions.flag ? <PanelControl handleClickReset={handleClickReset} handleInputEntry={handleInputEntry} /> : ""}
    </>
  );
};
