import '@styles/select-input-group.scss';

interface ISelectInputGroupProps {
    placeholder: string;
    options: { value: string; option: string; }[];
}

export function SelectInputGroup (props: ISelectInputGroupProps) {
    return (
        <div className="input-group">
            <select id="my-select" required>
                {
                    props.options.length > 0 && props.options.map((option) => (
                        <option value={option.value} key={option.value}>{option.option}</option>
                    ))
                }
            </select>
            <div className="input-wrapper">
                <input type="text" id="my-input" required placeholder={props.placeholder}/>
                <label htmlFor="my-input" className="floating-label">{props.placeholder}</label>
            </div>
        </div>
    )
}