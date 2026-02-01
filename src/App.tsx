import { useState } from 'react';

export function App() {

  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);


  return (
    <div>
      {hide && <p>Teste</p>}

      {hide
        ? <p>Hide true</p> : <p>Hide false</p>
      }

      <button onClick={() => setCount(count + 1)}> {count}</button>
      <button onClick={() => setHide(!hide)}> Toggle</button>

    </div>


  )
}
