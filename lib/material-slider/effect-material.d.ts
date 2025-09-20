declare module '*/effect-material.esm.js' {
  interface MaterialEffectOptions {
    slideSplitRatio?: number;
  }
  
  interface SwiperModule {
    new(): any;
  }
  
  declare const EffectMaterial: SwiperModule;
  export default EffectMaterial;
}
