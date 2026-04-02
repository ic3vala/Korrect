// ButtonGroup.js
import './Buttongroup.css';

function ButtonGroup({ onReset, onSubmit }) {
  return (
    <div className="button-group">
      <button className="button-basic" onClick={onReset}>
        다시 쓰기
      </button>
      <button className="button-highlight" onClick={onSubmit}>
        검사하기
      </button>
    </div>
  );
}

export default ButtonGroup;
