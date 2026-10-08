import { useTodoStore } from '../store/TodoStore';
import ToDoItem from './ToDoItem';

function ToDoList() {
  // todo-ui.png의 예시 화면과 동일하게 9개의 할 일을 더미 데이터로 구성
  
  const todos = useTodoStore((state)=>state.todos)


  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} text={todo.text} />
      ))}
    </div>
  );
}

export default ToDoList;
