import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      host: true,
      hmr: {
        clientPort: 443,
      },
      allowedHosts: true
    },
    define: {
      global: 'globalThis',
    },
  });
};