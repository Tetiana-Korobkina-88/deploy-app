interface FeatureFlags {
  [key: string]: boolean;
}

export const featureFlags: FeatureFlags = {
  audioSolo: false,
  'v1.2': false,
};
