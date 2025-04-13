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
