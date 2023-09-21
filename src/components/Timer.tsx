import { useState, useRef, useEffect } from 'react'
import { Player } from "../models/Player"
import { Colors } from '../models/Colors';

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void
}

export default function Timer({currentPlayer, restart}: TimerProps) {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer(){
        if(timer.current){
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    function decrementBlackTimer(){
        setBlackTime(p => p - 1)
    }
    
    function decrementWhiteTimer(){
        setWhiteTime(p => p - 1)
    }

    function handleRestart() {
        setBlackTime(300)
        setWhiteTime(300)
        restart()
    }

    return (
        <div>
            <div>
                <button onClick={handleRestart}>Restart Game</button>
            </div>
            <h2>Black - {blackTime}</h2>
            <h2>White - {whiteTime}</h2>
        </div>
    )
}