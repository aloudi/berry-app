export enum FIRMNESS {
  ALL = 'all',
  VERY_SOFT = 'very-soft',
  SOFT = 'soft',
  HARD = 'hard',
  VERY_HARD = 'very-hard',
  SUPER_HARD = 'super-hard',
};

export const FIRMNESS_ORDER = {
  [FIRMNESS.ALL]: 0,
  [FIRMNESS.VERY_SOFT]: 1,
  [FIRMNESS.SOFT]: 2,
  [FIRMNESS.HARD]: 3,
  [FIRMNESS.VERY_HARD]: 4,
  [FIRMNESS.SUPER_HARD]: 5,
};

export const FIRMNESS_IDS: { [key: number]: FIRMNESS } = {
  0: FIRMNESS.ALL,
  1: FIRMNESS.VERY_SOFT,
  2: FIRMNESS.SOFT,
  3: FIRMNESS.HARD,
  4: FIRMNESS.VERY_HARD,
  5: FIRMNESS.SUPER_HARD,
};

export const FIRMNESS_NAMES = {
  [FIRMNESS.ALL]: 'All',
  [FIRMNESS.VERY_SOFT]: 'Very Soft',
  [FIRMNESS.SOFT]: 'Soft',
  [FIRMNESS.HARD]: 'Hard',
  [FIRMNESS.VERY_HARD]: 'Very Hard',
  [FIRMNESS.SUPER_HARD]: 'Super Hard',
};
