import type { Ref, InjectionKey } from 'vue'
export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export type NameType = string | number

export interface CollapseContext {
  activeNames: Ref,
  handleItemClick: (name:NameType) => void
}

export interface CollapseProps {
  modelValue: NameType[];
  according?: boolean;
}

export interface CollapseEmits{
  (e: 'update:modelValue',values: NameType[]): void;
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
