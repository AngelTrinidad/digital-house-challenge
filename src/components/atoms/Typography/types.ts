export enum Variant {
  xxl = 'xxl',
  xl = 'xl',
  lg = 'lg',
  normal = 'normal',
  sm = 'sm',
}

export type TypographyVariant = keyof typeof Variant;
