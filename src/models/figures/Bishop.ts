import { Cell } from "../Cell";
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import { Logos } from './Logo'

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Logos.BLACKBISHOP : Logos.WHITEBISHOP
        this.name = FigureNames.BISHOP
    }

    canMove(targer: Cell): boolean {
        if(!super.canMove(targer)) return false

        if(this.cell.isEmptyDiagonal(targer)) return true

        return false
    }
}