declare module '../lib/material-slider/effect-material.esm.js' {
  interface MaterialEffectOptions {
    slideSplitRatio?: number;
  }
  
  interface SwiperModule {
    name: string;
    extendParams?: (params: any) => void;
    on?: (eventName: string, handler: (...args: any[]) => void) => void;
    create?: () => void;
    destroy?: () => void;
  }
  
  declare const EffectMaterial: SwiperModule;
  export default EffectMaterial;
}
