
function ToDoItem({ text }) {
  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <div className="todo-checkbox"></div>
        <span className="todo-text">{text}</span>
      </div>
      <button type="button" className="todo-delete-btn" aria-label="삭제">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#ff6b6b" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </button>
    </div>
  );
}

export default ToDoItem;
