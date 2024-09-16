import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { RootState } from '@store/index';

import gl_family from '@assets/gl_family-24x24.png';
import { NumberCircle } from '@components/elements/NumberCircle';

export function Summary()
{
    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.user);
    const plan = useSelector((state: RootState) => state.plan);

    useEffect(() => {
        if(!plan.plan || plan.plan.name === ""){
            navigate("/");
        }
    }, []);

    return (
        <div id="summary">
            <div className="steps-desktop">
                <div className="steps-description">
                    <NumberCircle number='1' bg='transparent' color='#7981B2' border='#7981B2' />
                    <p className='summary'>Planes y coberturas</p>
                    <hr />
                    <NumberCircle number='2' bg='#4F4FFF' color='#FFF' border='#4F4FFF' />
                    <p className='plans-coverage'>Resumen</p>
                </div>
            </div>
            <div className="steps-body">
                <div className="return-step">
                    <Link to="/plans" className="return-step-content">
                        <span className="icon-back">&lt;</span>
                        <p>Volver</p>
                    </Link>
                </div>
            </div>
            <div className="summary-title">
                <h1>Resumen del seguro</h1>
            </div>
            <div className="card-summary">
                <div className="card-header">
                    <h2>PRECIOS CALCULADOS PARA:</h2>
                    <div className="customer-name">
                        <img src={gl_family} alt="icon family" />
                        <h1>{ user.name } { user.lastName }</h1>
                    </div>
                </div>
                <hr />
                <div className="card-body">
                    <div className="title-data">
                        <h2>Responsable de pago</h2>
                        <p className="element">{ user.document_type }: {user.document_number}</p>
                        <p className="element">Celular: {user.cellphone}</p>
                    </div>
                    <div className="title-data">
                        <h2>Plan elegido</h2>
                        <p className="element">{ plan.plan ? plan.plan.name : '' }</p>
                        <p className="element">Costo del Plan: ${ plan.plan ? plan.plan.price : '' } al mes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}