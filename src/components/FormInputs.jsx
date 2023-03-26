const FormInputs = ({
  handleInputTransitions,
  handleInputFinalStates,
  transitions,
  messageTransitionsError,
}) => {
  return (
    <form>
      <div
        className={`grid ${
          transitions && transitions.size == 3
            ? "grid-cols-2 gap-4"
            : "grid-cols-1"
        }`}
      >
        <div className="h-auto">
          <h3 className="text-center">Transitions</h3>
          <div className="h-auto">
            <textarea
              className="bg-custom-input border-none text-30px w-full border border-gray-400 rounded-2xl p-2 resize-none"
              name=""
              id=""
              rows="8"
              onBlurCapture={handleInputTransitions}
            ></textarea>
          </div>
        </div>

        {transitions && transitions.size == 3 ? (
          <div className="h-auto">
            <h3 className="text-center">Final states</h3>
            <textarea
              className="bg-custom-input border-none text-30px text-textarea w-full border border-gray-400 rounded-2xl p-2 resize-none"
              name=""
              id=""
              rows="4"
              onBlurCapture={handleInputFinalStates}
            ></textarea>
          </div>
        ) : (
          ""
        )}
      </div>

      <p
        className={`text-30px text-center ${
          messageTransitionsError == "OK" ? "text-green-500" : "text-red-500"
        }`}
      >
        {messageTransitionsError}
      </p>
    </form>
  );
};

export default FormInputs;
