import './App.css';
import Person from './components/Person';

const App = () => {

  // const onClick = (name) => {
  //   console.log(name +' tryckte på knappen!')
  // }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => console.log('hej')} >Tryck här</button>
      <Person name="Joakim" age="35" />
      <Person name="Jeanette" age="34" />
      <Person name="Hans" age="37" />
    </div>
  )
}

export default App;
