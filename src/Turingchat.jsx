import { useState } from 'react';
import Tape from './TapeChat';
import Head from './Head';

export function Turingchat() {
  const [tape, setTape] = useState(['0', '0', '0', '0', '0']);
  const [headPosition, setHeadPosition] = useState(0);
  const [currentState, setCurrentState] = useState('q0');

  //TODO: DEBEMOS DEJAR EL MISMO FORMATO QUE ACA
  const [transitions, setTransitions] = useState({
    'q0': {
      '0': { write: '1', move: 'R', next: 'q1' },
      '1': { write: '0', move: 'R', next: 'q1' },
      '2': { write: '0', move: 'R', next: 'q1' },
      '4': { write: '0', move: 'R', next: 'q1' },
    },
    'q1': {
      '0': { write: '0', move: 'R', next: 'q2' },
      '1': { write: '1', move: 'R', next: 'q2' },
    },
    'q2': {
      '0': { write: '1', move: 'L', next: 'q0' },
      '1': { write: '0', move: 'L', next: 'q0' },
    },
  });

  function handleMoveHead(move) {
    if (move === 'R') {
      setHeadPosition(prevPos => prevPos + 1);
    } else if (move === 'L') {
      setHeadPosition(prevPos => prevPos - 1);
    }
  }

  function handleWriteToTape(write) {
    setTape(prevTape => {
      const newTape = [...prevTape];
      newTape[headPosition] = write;
      return newTape;
    });
  }

  function handleNextState(next) {
    setCurrentState(next);
  }

  function handleStep() {
    const currentSymbol = tape[headPosition];
    const transition = transitions[currentState][currentSymbol];
    handleWriteToTape(transition.write);
    handleMoveHead(transition.move);
    handleNextState(transition.next);
  }

  return (
    <div>
      <Tape tape={tape} />
      <Head
        position={headPosition}
        onWrite={handleWriteToTape}
        onMove={handleMoveHead}
        />
        <button onClick={handleStep}>Step</button>
    </div>)
}