import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CircleLeft from '@assets/CircleLeft.png';

import { RadioCardCustomer } from '@components/elements/RadioCardCustomer';
import { NumberCircle } from '@components/elements/NumberCircle';
import { CardPlan } from '@components/elements/CardPlan';

import { customerTypes } from '@constants/customer-type';

import { setUser } from '@store/userSlice';
import { setList, setPlan } from '@store/planSlice';
import { RootState } from '@store/index';

interface IPlan {
    age: number;
    description: string[];
    name: string;
    price: number;
}

export function Plans() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.user);
    const plan = useSelector((state: RootState) => state.plan);

    const [customerType, setCustomerType] = useState<{customer_type: string; plan_type: string;}>({customer_type: '', plan_type: ''});
    const [page, setPage] = useState<number>(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const startTouchX = useRef<number>(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        startTouchX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const endTouchX = e.touches[0].clientX;
        if (startTouchX.current - endTouchX > 50) {
            nextSlide();
        } else if (startTouchX.current - endTouchX < -50) {
            prevSlide();
        }
    };

    const nextSlide = () => {
        setPage((prevIndex) =>
            prevIndex === plan.list.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setPage((prevIndex) =>
            prevIndex === 0 ? plan.list.length - 1 : prevIndex - 1
        );
    };

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

    const handleChooseCustomer = async () => {
        if(customerType.customer_type){
            const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json");
            const data = await response.json();

            dispatch(setList(data.list));
        }
    }

    const handleChoosePlan = async (plan: IPlan) => {
        dispatch(setPlan(plan));
        navigate("/summary")
    }

    useEffect(() => {
        if(containerRef.current){
            const plansList = document.getElementById('plans-list') as HTMLDivElement;
            plansList.style.transform = `translateX(-${page * 386}px)`;
        }
    }, [page]);

    useEffect(() => {
        checkUser();
    }, [user, dispatch]);

    useEffect(() => {
        handleChooseCustomer();
    }, [customerType.customer_type]);

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
            <div className="plans-body">
                <div id='plans-list' className="plans-list" ref={containerRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} >
                    {
                        plan.list && plan.list.length > 0 && plan.list.map(currentPlan => (
                            <CardPlan plan={currentPlan} index={plan.list.indexOf(currentPlan) + 1} key={plan.list.indexOf(currentPlan) + 1}
                                handleChoosePlan={handleChoosePlan} />
                        ))
                    }
                </div>
                {
                    plan.list.length > 0 && (
                        <div className="paginator">
                            <div className="left-page" onClick={prevSlide}><span>&lt;</span></div>
                            <span className="number-page">{page + 1} / {plan.list.length}</span>
                            <div className="right-page" onClick={nextSlide}><span>&gt;</span></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}