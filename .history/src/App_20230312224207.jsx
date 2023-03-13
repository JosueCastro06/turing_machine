import React, { useState } from 'react';

function TuringMachine() {
  const [tape, setTape] = useState(['', '', '', '1', '', '', '', '']);
  const [headPosition, setHeadPosition] = useState(3);
  const [currentState, setCurrentState] = useState('q0');

  const transitions = [
    {
      currentState: 'q0',
      inputSymbol: '1',
      newState: 'q1',
      outputSymbol: '0',
      move: 'right'
    },
    {
      currentState: 'q1',
      inputSymbol: '',
      newState: 'q2',
      outputSymbol: '',
      move: 'left'
    },
    {
      currentState: 'q2',
      inputSymbol: '1',
      newState: 'q3',
      outputSymbol: '0',
      move: 'left'
    },
    {
      currentState: 'q3',
      inputSymbol: '',
      newState: 'q4',
      outputSymbol: '',
      move: 'right'
    }
  ];

  const handleStep = () => {
    const currentSymbol = tape[headPosition];
    const transition = transitions.find(
      t => t.currentState === currentState && t.inputSymbol === currentSymbol
    );
    if (!transition) return;
    const newTape = [...tape];
    newTape[headPosition] = transition.outputSymbol;
    const newHeadPosition =
      transition.move === 'right' ? headPosition + 1 : headPosition - 1;
    setTape(newTape);
    setHeadPosition(newHeadPosition);
    setCurrentState(transition.newState);
  };

  return (
    <div>
      <Tape tape={tape} headPosition={headPosition} />
      <button onClick={handleStep}>Step</button>
    </div>
  );
}

function Tape({ tape, headPosition }) {
  return (
    <div>
      {tape.map((symbol, index) => (
        <span key={index} className={index === headPosition ? 'head' : ''}>
          {symbol || ' '}
        </span>
      ))}
    </div>
  );
}

export default TuringMachine;
