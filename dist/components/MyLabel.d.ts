import './myLabel.css';
export interface MyLabelProps {
    /**
     *  Nombre del componente
     */
    label: string;
    /**
     * ¿Qué tan grande debería ser?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
/**
 * Componente principal para interacción con usuario
 */
export declare const MyLabel: ({ label, size, color, ...props }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
export default MyLabel;
