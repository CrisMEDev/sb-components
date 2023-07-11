import { MyLabel } from '../../components/MyLabel';
var meta = {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['normal', 'h1', 'h2', 'h3'],
            control: { type: 'select' }
        },
        color: {
            description: '¿Qué color usará?',
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'select' }
        },
        allCaps: {
            description: '¿Capitalizar el string?',
            type: 'boolean'
        },
        fontColor: {
            description: 'Color de la fuente',
            control: { type: 'color' }
        }
    }
};
export default meta;
export var Basic = {
    args: {
        label: 'No label',
        size: 'normal',
        allCaps: false
    }
};
export var AllCaps = {
    args: {
        label: 'No label',
        size: 'normal',
        allCaps: true
    }
};
export var Secondary = {
    args: {
        label: 'No label',
        size: 'h2',
        color: 'secondary'
    }
};
export var Tertiary = {
    args: {
        label: 'No label',
        size: 'h3',
        color: 'tertiary'
    }
};
export var CustomColor = {
    args: {
        label: 'No label',
        size: 'h1'
    }
};
