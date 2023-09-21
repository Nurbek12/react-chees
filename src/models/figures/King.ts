import { Cell } from "../Cell";
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import { Logos } from './Logo'

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Logos.BLACKKING : Logos.WHITEKING
        this.name = FigureNames.KING
    }
    
    canMove(targer: Cell): boolean {
        if(!super.canMove(targer)) return false

        const dx = Math.abs(this.cell.x - targer.x);
        const dy = Math.abs(this.cell.y - targer.y);

        return (dx === 1 && dy === 0) || (dx === 0 && dy === 1) || (dx === 1 && dy === 1);
    }
}