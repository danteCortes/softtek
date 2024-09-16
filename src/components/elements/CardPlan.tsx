import '@styles/card-plan.scss';

import IcHomeLight from '@assets/IcHomeLight.png';
import IcHospitalLight from '@assets/IcHospitalLight.png';
import GlHospitalSolid from '@assets/GlHospitalSolid.png';
import GlLaptopSolid from '@assets/GlLaptopSolid.png';
import GlMedicalAttentionSolid from '@assets/GlMedicalAttentionSolid.png';

interface IPlan {
    age: number;
    description: string[];
    name: string;
    price: number;
}

interface ICardPlanProps {
    plan: IPlan;
    index: number;
    handleChoosePlan: (plan: IPlan) => void
}

export function CardPlan(props: ICardPlanProps)
{
    const { plan, index, handleChoosePlan } = props;

    return (
        <div className="card-plan">
            <div className="card-plan-header">
                <div className="card-plan-title">
                    <h2 className="card-plan-name">{plan.name}</h2>
                    {
                        (index%2==0) ? (
                            <img src={IcHospitalLight} alt="Plan de salud" className="card-plan-image" />
                        ) : (
                            <img src={IcHomeLight} alt="Plan de salud" className="card-plan-image" />
                        )
                    }
                </div>
                <div className="card-plan-price">
                    <p className="title-price">COSTO DEL PLAN</p>
                    <h2 className="plan-price">${plan.price} al mes</h2>
                </div>
            </div>
            <hr />
            <div className="card-plan-description">
                {
                    plan.description.map((description, index) => (
                        <div className="item-description" key={index}>
                            {
                                (() => {
                                    if(index === 0){
                                        return <img src={GlMedicalAttentionSolid} alt="" />
                                    }else if(index === 1){
                                        return <img src={GlLaptopSolid} alt="" />
                                    }else{
                                        return <img src={GlHospitalSolid} alt="" />
                                    }
                                })()
                            }
                            <p>{description}</p>
                        </div>
                    ))
                }
            </div>
            <button className="btn-card-plan" onClick={() => handleChoosePlan(plan)} >Seleccionar Plan</button>
        </div>
    )
}