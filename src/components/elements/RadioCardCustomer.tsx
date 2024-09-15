import { ChangeEvent } from "react";
import '@styles/radio-card-customer.scss';

interface IRadioCardCustomerProps {
    image: string;
    alt: string;
    title: string;
    description: string;
    name: string;
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function RadioCardCustomer(props: IRadioCardCustomerProps) {

    const { image, alt, title, description, name, value, handleChange } = props;

    return (
        <div className="card-radio-customer">
            <div className="radio-button">
                <input type="radio" name={name} value={value} onChange={handleChange} />
            </div>
            <div className="customer-type">
                <div className="title-customer-type">
                    <img src={image} alt={alt} className="image-customer-type" />
                    <h2>{title}</h2>
                </div>
                <div className="description-customer-type">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}