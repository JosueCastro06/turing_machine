import React, { useState } from 'react'
import {returnInfoData, validatePositionToDataMachine, validateInputTransitions, validateInputEntry} from '../helpers/methods';

export const useValidateInputs = () => {
    const [transitions, setTransitions] = useState({
        size: 0,
        quintuples: [],
        flag: false,
    });
    const [tape, setTape] = useState({
        left: "",
        rigth:""
    });
    const [finalStates, setFinalStates] = useState([]);
    const [dictonary, setDictonary] = useState([]);
    const [currentState, setCurrentState] = useState('0');
    const [head, setHead] = useState({
        position:0,
        char:""
    });

    const [inputEntry, setInputEntry] = useState("");

    const [messageTransitionsError, setMessageTransitionsError] = useState("");


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
        const {flagValidateInputEntry, tape, head} =  validateInputEntry(inputEntry, dictonary, transitions.size);
        if(flagValidateInputEntry){
            setTape(tape);
            setHead(head);
        }
    }

    const handleInputEntry = (e) => setInputEntry(e.target.value);


    return {
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
    }
}