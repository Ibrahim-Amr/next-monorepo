import { ZONE_CONFIGS, type ZoneType } from '../types/zones';

export const navigateToZone = (
  path: string,
  zone: ZoneType
): void => {
  const config = ZONE_CONFIGS[zone];
  const baseUrl = config.baseUrl;
  const basePath =
    process.env.NODE_ENV === 'production' && zone === 'home'
      ? '/home'
      : '';

  // Remove any double slashes and ensure proper path format
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${baseUrl}${basePath}${cleanPath}`.replace(
    /([^:]\/)\/+/g,
    '$1'
  );

  window.location.href = url;
};

export const isExternalZonePath = (
  path: string,
  currentZone: ZoneType
): boolean => {
  const zonePaths = ZONE_CONFIGS[currentZone].paths;
  // Normalize path for comparison
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return !zonePaths.some((zonePath: string) =>
    normalizedPath.startsWith(zonePath)
  );
};

// Helper to get the correct asset path for a zone
export const getZoneAssetPath = (
  path: string,
  zone: ZoneType
): string => {
  const basePath =
    process.env.NODE_ENV === 'production' && zone === 'home'
      ? '/home'
      : '';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};
