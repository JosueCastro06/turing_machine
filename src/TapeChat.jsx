function TapeChat(props) {
  return (
    <div className="tape">
      {props.tape.map((cell, index) => (
        <div className="cell" key={index}>
          {cell}
        </div>
      ))}
    </div>
  );
}

export default TapeChat;
