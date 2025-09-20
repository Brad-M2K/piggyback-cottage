// @ts-ignore
import EffectMaterialJS from './effect-material.esm.js';

export interface MaterialEffectOptions {
  slideSplitRatio?: number;
}

export interface SwiperModule {
  (options: {
    swiper: any;
    on: (event: string, callback: (...args: any[]) => void) => void;
    extendParams: (params: any) => void;
  }): void;
}

export const EffectMaterial: SwiperModule = EffectMaterialJS;
export default EffectMaterial;
