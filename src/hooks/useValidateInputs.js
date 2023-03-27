import React, { useState } from 'react'
import { returnInfoData, validatePositionToDataMachine, validateInputTransitions, validateInputEntry } from '../helpers/methods';

export const useValidateInputs = () => {
    const [transitions, setTransitions] = useState({
        size: 0,
        quintuples: [],
        flag: false,
    });
    const [tape, setTape] = useState({
        left: "",
        rigth: ""
    });
    const [finalStates, setFinalStates] = useState([]);
    const [dictonary, setDictonary] = useState([]);
    const [currentState, setCurrentState] = useState('0');
    const [head, setHead] = useState("");

    const [inputEntry, setInputEntry] = useState("");

    const [messageTransitionsError, setMessageTransitionsError] = useState("");

    const [isRunning, setIsRunning] = useState(false);

    const [counter, setCounter] = useState(0);

    const [generalMessage, setGeneralMessage] = useState("");


    const handleInputTransitions = (e) => {
        if (e.target.value != '') {
            const dataValidate = validateInputTransitions(e.target.value.trim());
            if (dataValidate.flag) {
                setMessageTransitionsError(dataValidate.message);
                setTransitions({
                    size: dataValidate.data.initialLength,
                    quintuples: dataValidate.data.quintuples,
                    flag: dataValidate.flag
                });
            } else {
                setMessageTransitionsError(dataValidate.message);
                setTransitions({});
            }
        } else {
            setMessageTransitionsError("");
            setTransitions({});
        }
    }

    const handleInputFinalStates = (e) => {
        if (e.target.value != '') {
            const finalStates = e.target.value.trim().split('\n').filter(state => state != '').map(state => state.trim());
            setFinalStates(finalStates);
        }
    }

    const handleInputDictionary = (value) => {
        if (value && value[0]) {
            setDictonary(value);
        }
    }

    const handleClickReset = (e) => {
        setCounter(0);
        handleCurrentState_Step('0');
        handleGeneralMessage("");

        if(inputEntry == ""){
            handleHead_Step(" ");
            handleTape_Step({
                left: "",
                rigth: ""
            });
            return; 
        }

        const { flagValidateInputEntry, tape, head } = validateInputEntry(inputEntry, dictonary, transitions.size);
        if (flagValidateInputEntry) {
            handleHead_Step(head);
            handleTape_Step(tape);
        }else{
            handleGeneralMessage("Error, Input does not valid in the dictionary !!");
        }
    }

    const handleInputEntry = (e) => setInputEntry(e.target.value);

    const handleCurrentState_Step = (data) => setCurrentState(data);

    const handleHead_Step = (data) => setHead(data);

    const handleTape_Step = (data) => setTape(data);

    
    const handleRunTape = () => setIsRunning(true);
    
    const handleStop = () => setIsRunning(false);

    const handleCounter = () => setCounter(counter+1);

    const handleGeneralMessage = (msg) => setGeneralMessage(msg);

    return {
        transitions,
        tape,
        finalStates,
        dictonary,
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
        handleGeneralMessage
    }
}
