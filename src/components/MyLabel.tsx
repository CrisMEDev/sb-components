import './myLabel.css';

export interface MyLabelProps {
   /**
    *  Nombre del componente
    */
   label: string;
   /**
    * ¿Qué tan grande debería ser?
    */
   size: 'normal'|'h1'|'h2'|'h3';
   allCaps?: boolean;
   color?: 'primary'|'secondary'|'tertiary';
   fontColor?: string;
}

/**
 * Componente principal para interacción con usuario
 */
export const MyLabel = ({
   label = 'No label',
   size = 'normal',
   color = 'primary',
   ...props
}: MyLabelProps) => {
   return (
      <span className={`label ${size} text-${color}`} style={{ color: props.fontColor }}>
         {  props.allCaps ? label.toUpperCase() : label }
      </span>
   )
}

export default MyLabel;
