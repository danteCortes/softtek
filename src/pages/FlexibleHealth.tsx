import FlexibleHealthImage from '@assets/FlexibleHealthImage.png';
import { SelectInputGroup } from '@components/elements/SelectInputGroup';
import { InputText } from '@components/elements/InputText';
import BlurMobileSup from '@assets/BlurMobileSup.png';
import BlurMobileInf from '@assets/BlurMobileInf.png';
import BlurDesktopRight from '@assets/BlurDesktopRight.png';
import BlurDesktopLeft from '@assets/BlurDesktopLeft.png';

const options: { value: string; option: string; }[] = [
    {value: "1", option: "DNI"},
    {value: "2", option: "Pasaporte"},
    {value: "3", option: "Carné de Ext."},
]

export function FlexibleHealth () {
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
                            <SelectInputGroup placeholder="Nro. de documento" options={options} />
                        </div>
                    </div>
                    <div className="row mb-24">
                        <div className="col-1">
                            <InputText placeholder='Celular' />
                        </div>
                    </div>
                    <div className="row mb-16">
                        <div className="col-1">
                            <div className="checkbox">
                                <input type="checkbox" name="" id="" /> Acepto la Política de Privacidad
                            </div>
                        </div>
                    </div>
                    <div className="row mb-16">
                        <div className="col-1">
                            <div className="checkbox">
                                <input type="checkbox" name="" id="" /> Acepto la Política Comunicaciones Comerciales
                            </div>
                        </div>
                    </div>
                    <div className="row mb-32">
                        <div className="col-1">
                            <a >Aplican Términos y Condiciones.</a>
                        </div>
                    </div>
                    <div className="row mb-84">
                        <div className="col-1 text-center">
                            <button className="btn-black">Cotiza aquí</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}