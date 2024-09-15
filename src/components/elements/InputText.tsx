import '@styles/input-text.scss';

interface IInputTextProps {
    placeholder: string;
}

export function InputText (props: IInputTextProps) {
    return (
        <div className="input-wrapper">
            <input type="text" id="my-input" required placeholder={props.placeholder}/>
            <label htmlFor="my-input" className="floating-label">{props.placeholder}</label>
        </div>
    )
}