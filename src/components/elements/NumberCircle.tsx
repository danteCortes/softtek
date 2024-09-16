import '@styles/number-circle.scss';

interface INumberCircleProps {
    color: string;
    bg: string;
    number: string;
    border: string;
}

export function NumberCircle(props: INumberCircleProps){

    const { color, bg, number, border } = props;

    return (
        <div className="number-circle-body" style={{ backgroundColor: bg, color: color, border: `1px solid ${border}` }}>
            <span>{number}</span>
        </div>
    )
}