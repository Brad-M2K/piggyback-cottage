declare module '*/effect-material.esm.js' {
  interface MaterialEffectOptions {
    slideSplitRatio?: number;
  }
  
  interface SwiperModule {
    new(): EffectMaterial;
  }
  
  declare const EffectMaterial: SwiperModule;
  export default EffectMaterial;
}
