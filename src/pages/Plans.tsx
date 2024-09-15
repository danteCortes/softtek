import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import CircleLeft from '@assets/CircleLeft.png';
import { RadioCardCustomer } from '@components/elements/RadioCardCustomer';
import { customerTypes } from '@constants/customer-type';

export function Plans() {

    const [customerType, setCustomerType] = useState<{customerType: string; planType: string;}>({customerType: '', planType: ''});

    const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCustomerType({
            ...customerType,
            [name]: value
        });
    }

    return (
        <div id="plans">
            <div className="steps">
                <div className="circle-left-button">
                    <Link to="/">
                        <img className="circle-left-image" src={CircleLeft} alt="Return" />
                    </Link>
                </div>
                <div className="label-steps">
                    <p>PASO 1 DE 2</p>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-bg">
                        <div className="progress-bar-pointer"></div>
                    </div>
                </div>
            </div>
            <div className="steps-body">
                <div className="customer-quotation">
                    <div className="title-quotation">
                        <h1>Rocío ¿Para quién deseas cotizar?</h1>
                    </div>
                    <div className="instruction-quotation">
                        <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
                    </div>
                </div>
                <div className="select-customer-type">
                    {
                        customerTypes.length > 0 && customerTypes.map(customerType => (

                            <RadioCardCustomer image={customerType.image} alt={customerType.alt} title={customerType.title}
                                description={customerType.description} name={customerType.name} value={customerType.value}
                                key={customerType.value} handleChange={handleChangeRadio} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}