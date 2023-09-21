import { Figure } from "../models/figures/Figure";

interface LostFiguresProps{
    title: string;
    figures: Figure[]
}

export default function LostFigures({title, figures}: LostFiguresProps) {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(f => 
                <div key={f.id}>
                    { f.logo && <i className={['figure', 'figure-small', f.logo].join(' ')}></i>  }
                </div>
            )}
        </div>
    )
}