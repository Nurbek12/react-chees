import { Cell } from "../Cell";
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import { Logos } from './Logo'

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Logos.BLACKROOK : Logos.WHITEROOK
        this.name = FigureNames.ROOK
    }

    canMove(targer: Cell): boolean {
        if(!super.canMove(targer)) return false

        if(this.cell.isEmptyVertical(targer)) return true

        if(this.cell.isEmptyHorizontal(targer)) return true

        return false
    }
}