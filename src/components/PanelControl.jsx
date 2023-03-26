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
      <div class="flex flex-col">
        <label class="mb-2 font-bold" for="inputEntry">
          Input Tape
        </label>
        <input
          class="bg-custom-input border-none px-3 py-2 placeholder-gray-400 border rounded-md 
                focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent rounded-2xl p-2"
          type="text"
          name="inputEntry"
          id="inputEntry"
          placeholder="Inserte la cinta"
          onChange={handleInputEntry}
        />
      </div>

      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={handleRunTape}
          disabled={isRunning}
        >
          Run
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={handleStepTape}
          disabled={isRunning}
        >
          Step
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClickReset}
          disabled={isRunning}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PanelControl;
