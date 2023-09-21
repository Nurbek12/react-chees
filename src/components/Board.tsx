import React, { useState, useEffect } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell'
import CellComponent from './Cell'
import { Player } from '../models/Player';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void
}

export default function BoardComponent({ board, setBoard, currentPlayer, swapPlayer }: BoardProps){
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null) 
    
    const click = (cell: Cell) => {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
            updateBoard()
        }else{
            if(cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    useEffect(() => {
        hightLightCells()
    }, [selectedCell])

    function hightLightCells(){
        board.hightLightCells(selectedCell)
        updateBoard()
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard)
    }

    return (
        <div>
            <h3>Current Player: {currentPlayer?.color}</h3>
            <div className="board">
                { board.cells.map((row: Cell[], index: number) =>
                    <React.Fragment key={index}>
                        {row.map((cell, index2) => <CellComponent
                            click={click}
                            cell={cell} 
                            key={index2}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>)}
                    </React.Fragment>
                ) }
            </div>
        </div>
    )
}