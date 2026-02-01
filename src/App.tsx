import { useState } from 'react';

export function App() {

  const [list, setList] = useState([
    { id: 1, label: 'Fazer cafe',},
    { id: 2, label: 'Fazer cafe',},
    { id: 3, label: 'Fazer almoco',},
    { id: 4, label: 'Fazer Janta',}
  ])

  return (
    <div>

      <input />
      <button>Adicionar</button>

      <ol>
        {list.map(listItem => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>

    </div>


  )
}
