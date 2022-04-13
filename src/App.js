import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos([toDo, ...toDos]);
    setToDo("");
    console.log(toDos);
  };
  const removeToDo = (event) => {
    const li = event.target.parentElement;
    li.remove();
  };

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" />
        <button>click</button>
        <ul>
          {toDos.map((value, index) => (
            <li key={index}>
              {value}
              <button onClick={removeToDo}>X</button>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
export default App;
