import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ label, size, color, ...props }: import("../../components/MyLabel").MyLabelProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            options: string[];
            control: {
                type: string;
            };
        };
        color: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
        };
        allCaps: {
            description: string;
            type: "boolean";
        };
        fontColor: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Template = StoryObj<typeof meta>;
export declare const Basic: Template;
export declare const AllCaps: Template;
export declare const Secondary: Template;
export declare const Tertiary: Template;
export declare const CustomColor: Template;
