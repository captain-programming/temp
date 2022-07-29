import './App.css';

const Button = ({name})=>{

  const handleClick=()=>{
    alert(`You clicked ${name}!`);
  }
  return (
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
  )
}

function App() {


  return (
    <div className="App">
      <Button name="Masai"/>
    </div>
  );
}

export default App;
