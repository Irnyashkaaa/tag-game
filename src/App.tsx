import { useEffect, useState } from 'react';
import './App.css';
import { Board, cellType } from './components/Board/Board';
import { WinAlert } from './components/WinAlert/WinAlert';

function App() {

  let cells: cellType[] = [
    { x: 1, y: 1, number: null },
    { x: 2, y: 1, number: null },
    { x: 3, y: 1, number: null },
    { x: 1, y: 2, number: null },
    { x: 2, y: 2, number: 'Click here to start ->' },
    { x: 3, y: 2, number: null },
    { x: 1, y: 3, number: null },
    { x: 2, y: 3, number: null },
    { x: 3, y: 3, number: null }
  ]

  const [isWin, setIsWin] = useState<boolean>(false)

  useEffect(() => {
    restart()
  }, [isWin])

  const restart = () => {
    let numbers = []
    numbers[0] = 1
    while (numbers.length < 8) {
      let random = Math.round(Math.random() * 8)
      if (!numbers.includes(random) && random > 0) numbers.push(random)
    }

    for (let i = 0; i < 8; i++) {
      cells[i].number = numbers[i]
    }
    cells = cells
  }


  return (
      <div className="App">
        {isWin ? <div className='alert'><WinAlert restart={restart} setIsWin={setIsWin} /> </div> : ''}
        <Board cells={cells} setIsWin={setIsWin}/>
      </div>
  );
}

export default App;