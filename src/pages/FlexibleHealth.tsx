import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '@store/userSlice';
import { AppDispatch } from '@store/index';

import { SelectInputGroup } from '@components/elements/SelectInputGroup';
import { InputText } from '@components/elements/InputText';
import FlexibleHealthImage from '@assets/FlexibleHealthImage.png';
import BlurMobileSup from '@assets/BlurMobileSup.png';
import BlurMobileInf from '@assets/BlurMobileInf.png';
import BlurDesktopRight from '@assets/BlurDesktopRight.png';
import BlurDesktopLeft from '@assets/BlurDesktopLeft.png';

const options: { value: string; option: string; }[] = [
    {value: "1", option: "DNI"},
    {value: "2", option: "Pasaporte"},
    {value: "3", option: "Carné de Ext."},
]

interface IErrors {
    document_type?: string;
    document_number?: string;
    cellphone?: string;
    chb_privacy?: string;
    chb_commercial_communications?: string;
}

export const FlexibleHealth = () => {

    const navigate = useNavigate();

    const dispatch: AppDispatch = useDispatch();

    const [form, setForm] = useState({
        document_type: 'DNI',
        document_number: '',
        cellphone: '',
        chb_privacy: false,
        chb_commercial_communications: false
    });

    const [errors, setErrors] = useState<IErrors>({
        document_type: '',
        document_number: '',
        cellphone: '',
        chb_privacy: '',
        chb_commercial_communications: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if(/^[0-9]*$/.test(value)){
            setForm({
                ...form,
                [name]: value
            });
        }
    }

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }

    const validate = (): IErrors => {
        setErrors({});
        const currentErrors: IErrors = {};
        
        if(form.document_number === ""){
            currentErrors.document_number = "El Nro. de documento es un campo obligatorio.";
        }
        if(form.cellphone === ""){
            currentErrors.cellphone = "El celular es un campo obligatorio.";
        }else if(form.cellphone.length != 9){
            currentErrors.cellphone = "En celular debe tener 9 números.";
        }
        if(!form.chb_privacy){
            currentErrors.chb_privacy = "Debe aceptar la Política de Privacidad.";
        }
        if(!form.chb_commercial_communications){
            currentErrors.chb_commercial_communications = "Debe aceptar la Política Comunicaciones Comerciales";
        }
        return currentErrors;
    }

    const searchCustomer = async () => {
        const btnHandleQuotation = document.getElementById("btnHandleQuotation") as HTMLButtonElement;
        btnHandleQuotation.disabled = true;
        try {
            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                btnHandleQuotation.disabled = false;
            } else {
                const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json");
                if(!response.ok)
                    throw new Error(`HTTP error! Status: ${response.status}`);
    
                const data = await response.json();
                dispatch(setUser({
                    ...data,
                    document_number: form.document_number,
                    document_type: form.document_type,
                    cellphone: form.cellphone
                }));
                navigate("/plans");
                btnHandleQuotation.disabled = false;
            }
        } catch (error) {
            btnHandleQuotation.disabled = false;
            console.error(error);
        }
    }

    return (
        <>
            <img className='blur-desktop-right' src={BlurDesktopRight} alt="" />
            <img className='blur-desktop-left' src={BlurDesktopLeft} alt="" />
            <div id="flexible-health-body">
                <img className='blur-mobile-inf' src={BlurMobileInf} alt="" />
                <img className='blur-mobile-sup' src={BlurMobileSup} alt="" />
                <div className="row">
                    <div className="col-1 align-center first-row">
                        <div className="title-flexible-health">
                            <p className="tag-promo">Seguro Salud Flexible</p>
                            <h1>Creado para ti y tu familia</h1>
                        </div>
                        <img id="img-flexible-health" src={FlexibleHealthImage} alt="Flexible health image" />
                    </div>
                </div>
                <hr />
                <div className="form-quotation">
                    <div className="row">
                        <div className="col-1">
                            <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</p>
                        </div>
                    </div>
                    <div className="row mb-16">
                        <div className="col-1">
                            <SelectInputGroup placeholder="Nro. de documento" options={options} valueSelect={form.document_type} valueInput={form.document_number}
                                nameSelect='document_type' nameInput='document_number' changeValueInput={handleChange} changeValueSelect={handleChangeSelect}
                                error={errors.document_number}  />
                        </div>
                    </div>
                    <div className="row mb-24">
                        <div className="col-1">
                            <InputText placeholder='Celular' name="cellphone" value={form.cellphone} changeValue={handleChange} error={errors.cellphone} />
                        </div>
                    </div>
                    <div className="row mb-16">
                        <div className="col-1">
                            <div className="checkbox">
                                <input type="checkbox" name="chb_privacy" onChange={handleChangeCheckbox} /> Acepto la Política de Privacidad
                            </div>
                            {
                                errors.chb_privacy && (
                                    <div className="errors"><span>{errors.chb_privacy}</span></div>
                                )
                            }
                        </div>
                    </div>
                    <div className="row mb-16">
                        <div className="col-1">
                            <div className="checkbox">
                                <input type="checkbox" name="chb_commercial_communications" onChange={handleChangeCheckbox} /> Acepto la Política Comunicaciones Comerciales
                            </div>
                            {
                                errors.chb_commercial_communications && (
                                    <div className="errors"><span>{errors.chb_commercial_communications}</span></div>
                                )
                            }
                        </div>
                    </div>
                    <div className="row mb-32">
                        <div className="col-1">
                            <a >Aplican Términos y Condiciones.</a>
                        </div>
                    </div>
                    <div className="row mb-84">
                        <div className="col-1 text-center">
                            <button id="btnHandleQuotation" className="btn-black" onClick={searchCustomer} >Cotiza aquí</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}