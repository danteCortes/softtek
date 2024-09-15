import '@styles/input-text.scss';
import { ChangeEvent } from 'react';

interface IInputTextProps {
    placeholder: string;
    name: string;
    value: string;
    error?: string;
    changeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function InputText (props: IInputTextProps) {

    const {placeholder, name, value, error, changeValue} = props;

    return (
        <>
            <div className="input-wrapper">
                <input type="text" id="my-input" required placeholder={placeholder} name={name} value={value} onChange={changeValue}
                    className={error ? 'input-error' : ''}/>
                <label htmlFor="my-input" className="floating-label">{placeholder}</label>
            </div>
            {
                error && (
                    <div className="errors"><span>{error}</span></div>
                )
            }
        </>
    )
}