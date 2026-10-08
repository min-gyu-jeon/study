

function ToDoEditor() {
  return (
    <div className="todo-editor">
      <input 
        type="text" 
        className="todo-editor-input" 
        placeholder="할 일을 입력하세요" 
        readOnly
      />
      <button type="button" className="todo-editor-btn">+</button>
    </div>
  );
}

export default ToDoEditor;
