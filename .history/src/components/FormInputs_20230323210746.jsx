const FormInputs = ({
  handleInputTransitions,
  handleInputFinalStates,
  transitions,
  messageTransitionsError,
}) => {
  return (
    <form>
      <div className="flex justify-center items-center">
        <h3 className="flex justify-center items-center">Transitions</h3>
        <textarea className="mx-auto w-1/2 border border-gray-400 rounded px-2 py-2 mt-6"
          name=""
          id=""
          cols="30"
          rows="10"
          onBlurCapture={handleInputTransitions}
        ></textarea>
        <p>{messageTransitionsError}</p>
      </div>

      {transitions && transitions.size == 3 ? (
        <div>
          <h3>Final states</h3>
          <textarea
            name=""
            id=""
            cols="30"
            onBlurCapture={handleInputFinalStates}
            rows="3"
          ></textarea>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default FormInputs;
