import { Step } from '@dynamic-framework/ui-react/dist/types/components/DStepper/DStepper';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useSteps = () => {
  const { t } = useTranslation();

  const steps = useMemo<Step[]>(() => [
    {
      value: 1,
      label: t('label.1'),
      description: t('description.1'),
    },
    {
      value: 2,
      label: t('label.2'),
      description: t('description.2'),
    },
    {
      value: 3,
      label: t('label.3'),
      description: t('description.3'),
    },
    {
      value: 4,
      label: t('label.4'),
      description: t('description.4'),
    },
  ], [t]);

  return {
    steps,
  };
};
