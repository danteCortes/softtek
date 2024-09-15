import IcProtectionLight from '@assets/IcProtectionLight.png';
import IcAddUserLight from '@assets/IcAddUserLight.png';

interface ICustomerTypes {
    image: string;
    alt: string;
    title: string;
    description: string;
    name: string;
    value: string;
}

export const customerTypes: ICustomerTypes[] = [
    {
        image: IcProtectionLight,
        alt: 'For me',
        title: 'Para mí',
        description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
        name: 'customer_type',
        value: '1'
    },
    {
        image: IcAddUserLight,
        alt: 'For someone',
        title: 'Para alguien más',
        description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
        name: 'customer_type',
        value: '2'
    }
];