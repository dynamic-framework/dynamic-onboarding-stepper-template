import {
  DButton,
  DStepperDesktop,
  useDContext,
} from '@dynamic-framework/ui-react';
import { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { CONTEXT_CONFIG, CURRENT_STEP } from './config/widgetConfig';
import { useSteps } from './hooks/useSteps';

export default function App() {
  const { setContext } = useDContext();
  const { steps } = useSteps();
  const { t } = useTranslation();

  if (CURRENT_STEP > steps.length || CURRENT_STEP < 1) {
    throw new Error(`CURRENT_STEP is not valid in the range 1 to ${steps.length}`);
  }

  const step = useMemo(() => ({
    limit: steps.length,
    label: steps[CURRENT_STEP - 1].label,
  }), [steps]);

  useEffect(() => {
    setContext(CONTEXT_CONFIG);
  }, [setContext]);

  return (
    <div
      id="onboardingStepperContainer"
      className={classNames(
        'd-flex',
        'justify-content-start align-items-center',
        'justify-content-lg-center',
      )}
    >
      <DStepperDesktop
        className="d-none d-lg-flex custom-stepper"
        vertical
        options={steps}
        currentStep={CURRENT_STEP}
      />
      <div className="d-flex flex-column d-lg-none">
        <DButton
          className="align-self-start p-2"
          iconStart="arrow-left"
          theme="secondary"
          variant="link"
        />
        <p className="d-flex flex-wrap align-items-center gap-2">
          <span className="text-secondary-500 fw-bold fs-6">
            {t('currentStep', { current: CURRENT_STEP })}
          </span>
          <small className="text-gray-500">{t('limitStep', { total: step.limit })}</small>
          <span className="vr text-gray-200" />
          <small className="text-gray-500">{step.label}</small>
        </p>
      </div>
    </div>
  );
}
