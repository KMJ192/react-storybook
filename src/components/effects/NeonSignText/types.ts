import { Properties as CSSProperties } from 'csstype';

type FontType = {
  font: string;
  color: string;
  type: 0 | 1 | 2;
};

type NeonSignStoryArgs = {
  text: Array<FontType>;
  customStyle: CSSProperties;
};

export type { NeonSignStoryArgs, FontType };
