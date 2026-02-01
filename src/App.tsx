import { useState } from 'react';

export function App() {

  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: '1', label: 'Fazer cafe', complete: false },
    { id: '2', label: 'Fazer cafe', complete: false },
    { id: '3', label: 'Fazer almoco', complete: false },
    { id: '4', label: 'Fazer Janta', complete: false }
  ]);

  return (
    <div>

      <input value={value}
        onChange={(e) => setValue(e.target.value)} />

      <button onClick={() => {
        setList([...list,
        { id: (list.length + 1).toString(), label: value, complete: false }
        ]);
        setValue('');
      }
      }>

        Adicionar</button>

      <ol>
        {list.map(listItem => (
          <li key={listItem.id}>{listItem.label}

            {listItem.complete ? 'Concluído' : ''}

            <button onClick={() => 
              setList([
                ...list.map(item => ({
                   ...item, 
                   complete: item.id === listItem.id? !item.complete : item.complete 
                  }))]
                   )}>  

              Concluir
            </button>

            <button onClick={() => setList([...list.filter(item => item.id != listItem.id)])}>
              Remover
            </button>

          </li>

        ))}
      </ol>

    </div>


  )
}
