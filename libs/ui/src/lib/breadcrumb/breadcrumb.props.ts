export interface UIBreadcrumbItemProps {
    text: string;
    active?: boolean;
    click?: () => void;
}

export interface UIBreadcrumbProps {
    children: React.ReactNode;
}