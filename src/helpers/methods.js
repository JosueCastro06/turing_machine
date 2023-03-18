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
    let head = input[0] || " ";
    let tape = {
        rigth: input.slice(1),
        left: ""
    }
    let flag = true;
    const character = input.split('');

    if(input.includes('*') && size == 5){
        head = input[input.indexOf('*')+1] || " ";
        tape["rigth"] = input.split('*')[1].slice(1);
        tape["left"] = input.split('*')[0];
        input = input.replace('*', '');
    }
    
    if(size == 3){
        character.forEach(char => {
            if(!dictonary.includes(char)) flag = false;
        });
    }

    return {
        flagValidateInputEntry: flag,
        tape,
        head
    };
}

const overwriteTape = ({left, head, rigth, move, currentState}) =>{
    console.log((rigth[0] && rigth[0] != '') ? rigth[0] : " ");
    let newLeft = "", newHead = "", newRigth = "";
    if(move == "r" || move == "R"){
        newLeft = left.concat(head);
        newHead = (rigth[0] && rigth[0] != '') ? rigth[0] : " ";
        newRigth = rigth.slice(1);
    }else if(move == "l" || move == "L"){
        newLeft = left.slice(0, -1);
        newHead = left[left.length - 1] || " ";
        newRigth = head.concat(rigth);
    }

    console.log({
        newLeft,
        newHead,
        newRigth,
        currentState
    });

    return {
        newLeft,
        newHead,
        newRigth,
        newCurrentState: currentState
    }
}


export {
    returnInfoData,
    validatePositionToDataMachine,
    validateInputTransitions,
    validateInputEntry,
    overwriteTape
}