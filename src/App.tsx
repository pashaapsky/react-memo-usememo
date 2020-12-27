import React, {useState} from 'react';
import Counter from "./components/Counter";
import HardExe from "./components/hardExe";

function App() {
  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);

  return (
    <div className="App">
        <Counter id={1} value={counter1} handleClick={setCounter1}/>

        <Counter id={2} value={counter2} handleClick={setCounter2}/>
        <HardExe value={counter2}/>
    </div>
  );
}

export default App;
