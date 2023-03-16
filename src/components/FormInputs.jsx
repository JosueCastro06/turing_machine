const FormInputs = ({handleInputTransitions, handleInputFinalStates, handleInputDictionary, transitions, messageError}) => {
  return (
    <>
      <div>FormInputs</div>

      <form>
        <div>
          <h3>Transitions</h3>
          <textarea name="" id="" cols="30" rows="10" onBlurCapture={handleInputTransitions}></textarea>
          <p>{messageError}</p>
        </div>

        {
          (transitions.flag) ?
          <div>
            <h3>Final states</h3>
            <textarea name="" id="" cols="30"  onBlurCapture={handleInputFinalStates} rows="3"></textarea>
          </div>
          :
          ""
        }
        
        {
          (transitions.size && transitions.size == 3) ?
          <div>
            <h3>Dictionary</h3>
            <textarea name="" id="" cols="30" rows="10" onBlurCapture={handleInputDictionary}></textarea>
          </div>
          :
          ""
        }
      </form>
    </>
  )
}

export default FormInputs;
