import { useEffect, useState } from "react"


const obtainUniteInitialStates = (arrayStates) => Array.from(new Set(arrayStates));

const formatDataQuintuples = (quintuples, size) => {
    let arrayInitialState = quintuples.map(quintuple => quintuple.split(" ")[0]);
    let statesInitial = obtainUniteInitialStates(arrayInitialState);
    
    let arrayDictionary = quintuples.map(quintuple => quintuple.split(" ")[1]);
    let dictionary = (size == 3) ? obtainUniteInitialStates(arrayDictionary): [];
    
    const objData = statesInitial.reduce((objeto, valor) => {
        objeto[valor] = {};
        return objeto;
    }, {});

    quintuples.forEach(quintuple => {
        const dataQuintuple = quintuple.split(' ');
        let auxobj = {};
        auxobj["next"] = dataQuintuple[dataQuintuple.length - 1];

        if (size == 5) {
            auxobj["write"] = dataQuintuple[2];
            auxobj["move"] = dataQuintuple[3];
        }
        objData[`${dataQuintuple[0]}`][`${dataQuintuple[1]}`] = auxobj;
    });

    return {
        objData,
        dictionary
    };
}

export const useGenerateFormatData = ({ transitions = {}, handleInputDictionary }) => {

    const [transitionData, settransitionData] = useState({});

    useEffect(() => {
        if (transitions && transitions.flag) {
            const {objData, dictionary} = formatDataQuintuples(transitions.quintuples, transitions.size);

            if(transitions.size == 3){
                handleInputDictionary(dictionary);
            }
            settransitionData(objData);
        }
    }, [transitions])

    return {
        transitionData,
    }
}
