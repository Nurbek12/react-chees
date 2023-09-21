import { Cell } from "../Cell";
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import { Logos } from './Logo'

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Logos.BLACKKINGHT : Logos.WHITEKINGHT
        this.name = FigureNames.KNIGHT
    }

    canMove(targer: Cell): boolean {
        if(!super.canMove(targer)) return false

        const dx = Math.abs(this.cell.x - targer.x)
        const dy = Math.abs(this.cell.y - targer.y)

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}