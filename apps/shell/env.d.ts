declare namespace NodeJS {
  interface ProcessEnv {
    HOME_URL: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
