import type { ReactNode } from "react";

type ViewTransitionClass = string | Record<string, string>;

declare module "react" {
  export interface ViewTransitionProps {
    name?: string;
    share?: ViewTransitionClass;
    enter?: ViewTransitionClass;
    exit?: ViewTransitionClass;
    update?: ViewTransitionClass;
    default?: ViewTransitionClass;
    children?: ReactNode;
  }

  export const ViewTransition: (props: ViewTransitionProps) => ReactNode;
}
