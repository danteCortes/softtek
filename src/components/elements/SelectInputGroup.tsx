import '@styles/select-input-group.scss';
import { ChangeEvent } from 'react';

interface ISelectInputGroupProps {
    placeholder: string;
    nameSelect: string;
    valueSelect: string;
    nameInput: string;
    valueInput: string;
    error?: string;
    changeValueSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
    changeValueInput: (e: ChangeEvent<HTMLInputElement>) => void;
    options: { value: string; option: string; }[];
}

export function SelectInputGroup (props: ISelectInputGroupProps) {

    const { 
        placeholder, nameSelect, valueSelect, nameInput, valueInput, error, changeValueSelect, changeValueInput, options } = props;
    return (
        <>
            <div className={error ? "input-group input-error" : 'input-group'}>
                <select id="my-select" required name={nameSelect} value={valueSelect} onChange={changeValueSelect}>
                    {
                        options.length > 0 && options.map((option) => (
                            <option value={option.value} key={option.value}>{option.option}</option>
                        ))
                    }
                </select>
                <div className="input-wrapper">
                    <input type="text" id="my-input" required placeholder={placeholder} name={nameInput} value={valueInput} onChange={changeValueInput} />
                    <label htmlFor="my-input" className="floating-label">{placeholder}</label>
                </div>
            </div>
            {
                error && (
                    <div className="errors"><span>{error}</span></div>
                )
            }
        </>
    )
}