export interface SelectorInfo {
  title: string;
  link?: string;
  readiness: boolean;
}

export interface HomeSelectorProps {
    info: SelectorInfo;
}

export interface SelectorContainerProps {
    selectors?: SelectorInfo[];
}