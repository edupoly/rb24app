import Counter from './Counter';
function App() {
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS Training</h1>
      
      <Counter s={100} i={10}></Counter>
      <Counter s={200} i={5}></Counter>

    </div>
  );
}

export default App;

