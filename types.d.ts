// types/nuxt-image.d.ts
declare module "@nuxt/image-edge" {
  export interface ModuleOptions {
    dir?: string;
    domains?: string[];
    vercel?: {
      basePath?: string;
      quality?: number;
      formats?: string[];
    };
  }
}
