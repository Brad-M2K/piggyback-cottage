import EffectMaterialJS from './effect-material.esm.js';

export interface MaterialEffectOptions {
  slideSplitRatio?: number;
}

export interface SwiperModule {
  (options: {
    swiper: unknown;
    on: (event: string, callback: (...args: unknown[]) => void) => void;
    extendParams: (params: Record<string, unknown>) => void;
  }): void;
}

export const EffectMaterial: SwiperModule = EffectMaterialJS;
export default EffectMaterial;
