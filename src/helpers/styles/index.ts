import {SCREEN_WIDTH} from '~constants/device';

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const scaleText = (value: number) => moderateScale(value, 0.2);

export const scaleSpace = (value: number) => moderateScale(value, 0.125);
