import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS Training</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
