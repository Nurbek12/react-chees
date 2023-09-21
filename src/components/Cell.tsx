import { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void 
}

export default function CellComponent({ cell, selected, click }: CellProps) {
    return (
        <div className={["cell", cell.color, selected ? "selected": ""].join(' ')}
            onClick={() => click(cell)} style={{ background: cell.aviable && cell.figure ? 'green': '' }}>
            { cell.aviable && !cell.figure && <div className="aviable" /> }
            { cell.figure?.logo && <i className={['figure', cell.figure?.logo].join(' ')}></i> }
        </div>
    );
}