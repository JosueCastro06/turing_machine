const FormInputs = ({
  handleInputTransitions,
  handleInputFinalStates,
  transitions,
  messageTransitionsError,
}) => {
  return (
    <div className="flex justify-start m-6 flex-wrap">
      <form className="flex flex-col">
        <h3 className="order-first text-center">Transitions</h3>
        <div className="flex justify-around">
          <div className="flex justify-between lw-ful">
            <div className="order-last flex-1">
              <textarea
                className="max-w-lg w-full border border-gray-400 rounded h-80 flex justify-between"
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
            <div className="flex justify-around">
              <h3 className="order-first text-center">Final states</h3>
              <div className="order-last flex-1">
                <textarea
                  className="max-w-lg w-full border border-gray-400 rounded h-80 flex justify-between"
                  name=""
                  id=""
                  cols="30"
                  onBlurCapture={handleInputFinalStates}
                  rows="3"
                ></textarea>
              </div>
            </div>

          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default FormInputs;
