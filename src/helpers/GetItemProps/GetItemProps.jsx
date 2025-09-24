import { POINT_OF_CASES } from 'helpers/CONSTANTS/constants';

export function getItemProps(level, pointOfRouter, item, theme) {
  const caseConfig = POINT_OF_CASES[pointOfRouter];
  if (!caseConfig) return {};

  const levelNumber = Number(level.replace('level', ''));
  if (!levelNumber) return {};

  const totalLevels = Object.keys(caseConfig).length;

  let highestLevel = 0;
  for (let i = 1; i <= totalLevels; i++) {
    const params = caseConfig[`level${i}`] || [];
    const hasData = params.some(param => {
      const value = item?.[param];
      if (value === undefined || value === null) return false;
      if (typeof value === 'string' && value.trim() === '') return false;
      return true;
    });
    if (hasData) highestLevel = i;
  }

  const isFilled = levelNumber <= highestLevel;

  return {
    itemCircleProps: {
      $props: isFilled ? theme.colors.darkGreen : theme.colors.white,
    },
    itemLineProps: {
      $props: isFilled ? theme.colors.linesBlue : theme.colors.darkGrey,
    },
  };
}
