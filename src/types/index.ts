import { type Icons } from '@/components/icons';

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
}

export interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
    items?: NavItemWithChildren[];
}

export type Locale = {
    label: string;
    value: string;
    icon?: keyof typeof Icons;
};

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface FooterItem {
    title: string;
    items: {
        title: string;
        href: string;
        external?: boolean;
    }[];
}

export type Option = {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
};

export interface DataTableFilterOption<TData> {
    label: string;
    value: keyof TData;
    items: Option[];
}

export interface DataTableSearchableColumn<TData> {
    id: keyof TData;
    title: string;
}

export interface DataTableFilterableColumn<TData>
    extends DataTableSearchableColumn<TData> {
    options: Option[];
}

export interface PageOptions {
    perPage: number | undefined;
    page: number;
}

export interface ResultList<T> {
    data: T[];
    meta: {
        page: number;
        perPage: number;
        totalItems: number;
        totalPages: number;
    };
}
