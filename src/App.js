import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react"; // useState를 사용하기 위한 import

function App() {
  const [SAH, setSAH] = useState("hide");
  const SayHello = () => {
    return <h1>Hello~!</h1>;
  };
  function onClick(event) {
    event.target.innerText === "show" ? setSAH("hide") : setSAH("show");
  }
  return (
    <>
      {SAH === "hide" ? <SayHello /> : null}
      <Button text={SAH} onClick={onClick} />
    </>
  );
}
export default App;
