import type { Meta, StoryObj } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';

const meta = {
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
} satisfies Meta<typeof MyLabel>

export default meta;
type Template = StoryObj<typeof meta>;

export const Basic: Template = {
   args: {
      label: 'No label',
      size: 'normal',
      allCaps: false
   }
};

export const AllCaps: Template = {
   args: {
      label: 'No label',
      size: 'normal',
      allCaps: true
   }
};

export const Secondary: Template = {
   args: {
      label: 'No label',
      size: 'h2',
      color: 'secondary'
   }
};

export const Tertiary: Template = {
   args: {
      label: 'No label',
      size: 'h3',
      color: 'tertiary'
   }
};

export const CustomColor: Template = {
   args: {
      label: 'No label',
      size: 'h1'
   }
};

