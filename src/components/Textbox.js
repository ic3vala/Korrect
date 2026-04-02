import './Textbox.css';
import { useState } from 'react';

function TextBox({ title, value, onChange,maxLength=1000, readOnly = false, onClear,children }) {
  const [focused, setFocused] = useState(false);
  
  // ✅ focused 클래스는 읽기 전용이 아닐 때만 적용
  const containerClass = `textbox-container${focused && !readOnly ? ' focused' : ''}`;
return (
    <div className={containerClass}>
      <div>{title}</div>
    <div className='textbox'>
      <textarea
          className={`textbox-area ${focused && !readOnly ? 'focused' : ''}`}
          placeholder="내용을 입력하세요."
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          onFocus={() => !readOnly && setFocused(true)}
          onBlur={() => !readOnly && setFocused(false)}
        />
        {children && <div className="overlay">{children}</div>}
        </div>
        <div className="char-count">
          {value.length}자 / {maxLength}자
        </div>
    </div>
  );
}

export default TextBox;