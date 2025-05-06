import { BreadcrumbsProps } from "@mui/material/Breadcrumbs";

export interface childrenNav {
  title?: string;
  path?: string;
  icon?: React.ReactNode;
}

export interface NavItemInterFace {
  title: string;
  path: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  caption?: string;
  info?: React.ReactNode;
  roles?: string[];
  children?: childrenNav[];
}

export interface NavSectionInterFace {
  subheader: string;
  items: NavItemInterFace[];
}

export type BreadcrumbsLinkProps = {
  name?: string;
  href?: string;
  icon?: React.ReactElement;
};

export interface CustomBreadcrumbsProps extends BreadcrumbsProps {
  heading?: string;
  moreLink?: string[];
  activeLast?: boolean;
  action?: React.ReactNode;
  links: BreadcrumbsLinkProps[];
}

export type IUserTableFilterValue = string | string[];

export type IUserTableFilters = {
  name: string;
  role: string[];
  status: string;
};
