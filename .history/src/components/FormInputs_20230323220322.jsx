const FormInputs = ({
  handleInputTransitions,
  handleInputFinalStates,
  transitions,
  messageTransitionsError,
}) => {
  return (
    <div className="flex justify-start m-6">
      <form className="flex flex-col">
        <div className="flex justify-between">
          <div className="order-first">
            <h3>Transitions</h3>
          </div>
          <div className="order-last">
            <textarea
              className="w-30 border border-gray-400 rounded h-20 flex justify-between mt-2"
              name=""
              id=""
              cols="30"
              rows="10"
              onBlurCapture={handleInputTransitions}
            ></textarea>
            <p>{messageTransitionsError}</p>
          </div>
        </div>

        {transitions && transitions.size == 3 ? (
          <div className="flex justify-between">
            <div className="order-first">
              <h3>Final states</h3>
            </div>
            <div className="order-last ml-6">
              <textarea
                name=""
                id=""
                cols="30"
                onBlurCapture={handleInputFinalStates}
                rows="3"
                className="mt-2"
              ></textarea>
            </div>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>


  );
};

export default FormInputs;
