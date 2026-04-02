// src/components/TabSelector.js
import './TabSelector.css';

function TabSelector({ selectedTab, onTabChange }) {
  return (
    <div className="tab-wrapper">
      <div className="tab-background">
        <div className={`tab-highlight ${selectedTab === '일상용' ? 'left' : 'right'}`}></div>

        <button
          className={`tab-btn ${selectedTab === '일상용' ? 'active' : ''}`}
          onClick={() => onTabChange('일상용')}
        >
          일상용
        </button>
        <button
          className={`tab-btn ${selectedTab === '보고서용' ? 'active' : ''}`}
          onClick={() => onTabChange('보고서용')}
        >
          보고서용
        </button>
      </div>
    </div>
  );
}

export default TabSelector;