import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircleLeft from '@assets/CircleLeft.png';
import { RadioCardCustomer } from '@components/elements/RadioCardCustomer';
import { NumberCircle } from '@components/elements/NumberCircle';
import { customerTypes } from '@constants/customer-type';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '@store/userSlice';
import { RootState } from '@store/index';

export function Plans() {

    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.user);

    const [customerType, setCustomerType] = useState<{customerType: string; planType: string;}>({customerType: '', planType: ''});

    const checkUser = async () => {
        if(user.name === ""){
            try {
                const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json");
                const data = await response.json();
    
                dispatch(setUser(data));
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCustomerType({
            ...customerType,
            [name]: value
        });
    }

    useEffect(() => {
        checkUser();
    }, [user, dispatch])

    return (
        <div id="plans">
            <div className="steps-mobile">
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
            <div className="steps-desktop">
                <div className="steps-description">
                    <NumberCircle number='1' bg='#4F4FFF' color='#FFF' border='#4F4FFF' />
                    <p className='plans-coverage'>Planes y coberturas</p>
                    <hr />
                    <NumberCircle number='2' bg='transparent' color='#7981B2' border='#7981B2' />
                    <p className='summary'>Resumen</p>
                </div>
            </div>
            <div className="steps-body">
                <div className="return-step">
                    <Link to="/" className="return-step-content">
                        <span className="icon-back">&lt;</span>
                        <p>Volver</p>
                    </Link>
                </div>
                <div className="customer-quotation">
                    <div className="title-quotation">
                        <h1>{user.name} ¿Para quién deseas cotizar?</h1>
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