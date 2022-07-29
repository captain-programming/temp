import './App.css';

const Skills = (props)=>{

  console.log(props.items)
  return(
    <div>
      {props.items.map((item)=>(
          <li key={item}>
            {item}
          </li>
      ))}
    </div>
  )}

function App() {
  return (
    <div className="App">
      <Skills items={["skill1","skill2","skill3"]}/>
    </div>
  );
}

export default App;
