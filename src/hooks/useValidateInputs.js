import React, { useState } from 'react'

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
        if (data[3] != 'R' && data[3] != 'r' && data[3] != 'L' && data[3] != 'l') {
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
    if (initialLength) {
        quintuples.forEach(quintuple => {
            if (quintuple.trim().split(' ').length != initialLength) {
                flagSizeQuintuple = false;
                return;
            }
        });
        if (!flagSizeQuintuple) {
            return returnInfoData(flagSizeQuintuple, "Length transitions incorrect !!");
        }
        if ((initialLength == 5) && (!validatePositionToDataMachine(quintuples))) {
            return returnInfoData(false, "Syntax Error !!");
        }
    } else {
        return returnInfoData(false, "Length transitions incorrect !!");
    }

    return returnInfoData(true, "OK", {
        data: {
            initialLength,
            quintuples,
        }
    });
}

const validateInputEntry = (input, dictonary, size) => {
    let head = {
        position:0,
        char: input[0] || "_"
    };
    let tape = {
        rigth: input.slice(1),
        left: ""
    }
    let flag = true;
    const character = input.split('');

    if(input.includes('*') && size == 5){
        head = {
            position: input.indexOf('m')+1,
            char:input[input.indexOf('m')+1]
        }
        tape["rigth"] = input.split('*')[1].slice(1);
        tape["left"] = input.split('*')[0];
        input = input.replace('*', '');
    }

    
    if(size == 3){
        character.forEach(char => {
            if(!dictonary.includes(char)) flag = false;
        });
    }
    console.log(flag);

    return {
        flagValidateInputEntry: flag,
        tape,
        head
    };
}



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
