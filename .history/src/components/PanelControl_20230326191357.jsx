const PanelControl = ({
  handleClickReset,
  handleInputEntry,
  handleStepTape,
  handleRunTape,
  isRunning,
  handleStop,
}) => {
  return (
    <div className="">
      <div className="flex flex-col">
        <label className="mb-2 font-bold" htmlFor="inputEntry">
          Input Tape
        </label>
        <input
          className="bg-custom-input border-none px-3 py-2 placeholder-gray-400 border rounded-md 
                focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent rounded-2xl p-2"
          type="text"
          name="inputEntry"
          id="inputEntry"
          placeholder="Inserte la cinta"
          onChange={handleInputEntry}
        />
      </div>

      <div className="mt-4">
        <ul>
          <li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
            onClick={handleRunTape}
            disabled={isRunning}
          >
            Run
          </button></li>
          <li><button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
            onClick={handleStop}
          >
            Stop
          </button></li>
          <li><button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
            onClick={handleStepTape}
            disabled={isRunning}
          >
            Step
          </button></li>
          <li><button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClickReset}
            disabled={isRunning}
          >
            Reset
          </button></li>
        </ul>
      </div>
    </div>
  );
};

export default PanelControl;
