import { Cell } from "../Cell";
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import { Logos } from './Logo'

export class Pawn extends Figure {

    isFirstStep: boolean = true

    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Logos.BLACKPAWN : Logos.WHITEPAWN
        this.name = FigureNames.PAWN
    }
    
    canMove(targer: Cell): boolean {
        if(!super.canMove(targer)) return false

        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
        const firstDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2

        if((targer.y === this.cell.y + direction || this.isFirstStep && (targer.y === this.cell.y + firstDirection))
        && targer.x === this.cell.x
        && this.cell.board.getCell(targer.x, targer.y).isEmpty()) {
            return true
        }

        if(targer.y === this.cell.y + direction
        && (targer.x === this.cell.x + 1 || targer.x === this.cell.x - 1)
        && this.cell.isEnemy(targer)) {
            return true
        }

        return false
    }

    moveFigure(target: Cell): void {
        super.moveFigure(target)
        this.isFirstStep = false
    }
}