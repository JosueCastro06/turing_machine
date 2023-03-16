function Head(props) {
    function handleMoveRight() {
      props.onMove('R');
    }
  
    function handleMoveLeft() {
      props.onMove('L');
    }
  
    function handleWrite(event) {
      const value = event.target.value;
      props.onWrite(value);
    }
  
    return (
      <div className="head">
        <div className="position">{props.position}</div>
        <div className="buttons">
          <button onClick={handleMoveLeft}>Left</button>
          <button onClick={handleMoveRight}>Right</button>
        </div>
        <div className="write">
          <input type="text" onChange={handleWrite} />
        </div>
      </div>
    );
  }
  
  
export default Head;