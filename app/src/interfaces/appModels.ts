export interface HomeSelectorProps {
    info: SelectorInfo;
}

export interface SelectorInfo {
    title: string;
    link?: string;
    readiness: boolean;
  }

export interface AppProps {
    selectors?: SelectorInfo[];
  }