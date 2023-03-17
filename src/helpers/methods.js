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
            position: input.indexOf('*')+1,
            char:input[input.indexOf('*')+1]
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

    return {
        flagValidateInputEntry: flag,
        tape,
        head
    };
}


export {
    returnInfoData,
    validatePositionToDataMachine,
    validateInputTransitions,
    validateInputEntry,
}