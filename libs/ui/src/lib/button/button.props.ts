export interface UIButtonProps {
    text: string;
    icon?: string;
    click?: () => void;
    active?: boolean;
    disabled? : boolean;
}