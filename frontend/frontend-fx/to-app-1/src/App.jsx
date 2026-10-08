
import ToDoHeader from './component/ToDoHeader';
import ToDoEditor from './component/ToDoEditor';
import ToDoList from './component/ToDoList';
import './component/ToDo.css';

function App() {
  return (
    <div className="todo-app-wrapper">
      <div className="todo-container">
        <ToDoHeader />
        <ToDoEditor />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
