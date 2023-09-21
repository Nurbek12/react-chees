import { Cell } from "../Cell";
import { Colors } from "../Colors"
import { Logos } from "./Logo"

export enum FigureNames {
    FIGURE = "FIGURE",
    KING = "KING",
    KNIGHT = "KNIGHT",
    PAWN = "PAWN",
    QUEEN = "QUEEN",
    ROOK = "ROOK",
    BISHOP = "BISHOP",
}

export class Figure {
    color: Colors;
    logo: Logos | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {    
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }

    canMove(targer: Cell): boolean {
        if(targer.figure?.color === this.color) {
            return false
        }
        if(targer.figure?.name === FigureNames.KING) {
            return false
        }

        return true
    }

    moveFigure(target: Cell) {
        console.log(target);
    }
}