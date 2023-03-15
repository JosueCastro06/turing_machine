import React, { useState } from 'react'

const returnInfoData = (flag, message, info) => {
  console.log(flag);
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
  let quintuples = input.split('\n');
  let initialLength;
  let flagSizeQuintuple = true;

  quintuples = quintuples.filter(quintuple => quintuple != '');
  initialLength = (quintuples[0].trim().split(' ').length == 5 || quintuples[0].trim().split(' ').length == 3) && quintuples[0].trim().split(' ').length;
  if(initialLength){
    quintuples.forEach(quintuple => {
      if(quintuple.trim().split(' ').length != initialLength){
        flagSizeQuintuple = false;
        return;
      }
    });
    (!flagSizeQuintuple) && returnInfoData(!flagSizeQuintuple,"Length transitions incorrect !!");    
  }else{
    returnInfoData(false,"Length transitions incorrect !!");    
  }

  (initialLength == 5) && (!validatePositionToDataMachine(quintuples)) && returnInfoData(false,"Length transitions incorrect !!");

  returnInfoData(true,"OK", {data: {
    initialLength,
    quintuples,
  }});
}


const FormInputs = () => {

  const [transitions, setTransitions] = useState({
    size: 0,
    quintuples: []
  });
  const [messageError, setMessageError] = useState("");

  const handleInputTransitions = (e) => {
    const dataValidate = validateInputTransitions(e.target.value.trim());
    if(dataValidate.flag){
      setMessageError(dataValidate.message);
      setTransitions({
        size: dataValidate.data.initialLength,
        quintuples: dataValidate.data.quintuples
      });
    }else{
      setMessageError(dataValidate.message);
      setTransitions({});
    }
  }


  return (
    <>
      <div>FormInputs</div>

      <form>
        <div>
          <h3>Transitions</h3>
          <textarea name="" id="" cols="30" rows="10" onBlurCapture={handleInputTransitions}></textarea>
          <p>{messageError}</p>
        </div>

        <div>
          <h3>Final states</h3>
          <textarea name="" id="" cols="30" rows="3"></textarea>
        </div>
        
        { /* CONDICIONAL DEL AFD */}
        {
          (transitions.size && transitions.size == 3) &&
          <div>
            <h3>Dictionary</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        }
      </form>
    </>
  )
}

export default FormInputs;
