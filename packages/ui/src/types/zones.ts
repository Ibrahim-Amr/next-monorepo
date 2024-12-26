export type ZoneConfig = {
  name: string;
  paths: string[];
  baseUrl: string;
};

export const ZONE_CONFIGS: Record<string, ZoneConfig> = {
  home: {
    name: 'home',
    paths: [
      '/airport-transfers',
      '/flights',
      '/car-rental',
      '/e-visa',
    ],
    baseUrl: process.env.HOME_URL || 'http://localhost:3001',
  },
  shell: {
    name: 'shell',
    paths: ['/'],
    baseUrl: process.env.SHELL_URL || 'http://localhost:3000',
  },
} as const;

export type ZoneName = keyof typeof ZONE_CONFIGS;
