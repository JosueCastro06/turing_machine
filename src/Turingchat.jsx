import { useEffect, useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    console.log("ENTRO");
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  // La función que se ejecutará cada segundo
  const tick = () => {
    setContador((prevContador) => prevContador + 1);
  };

  // El useEffect que controla el setInterval
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(tick, 1000);
    }
    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={handleStop}>Detener</button>
    </div>
  );
}
