import { useState, useEffect } from 'react'
import './App.css'
import BoardComponent from './components/Board'
import { Board } from './models/Board'
import { Player } from './models/Player'
import { Colors } from './models/Colors'
import LostFigures from './components/LostFigures'
import Timer from './components/Timer'

function App() {
  const [board, setBoard] = useState(new Board())
  const whitePlayer = new Player(Colors.WHITE)
  const blackPlayer = new Player(Colors.BLACK)
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function swapPlayer(){
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }
  return (
    <div className="app">
      <Timer restart={restart} currentPlayer={currentPlayer} />
      <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} />
      <div>
        <LostFigures title='Black Figures' figures={board.lostBlackFigures} />
        <LostFigures title='White Figures' figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
}

export default App;   