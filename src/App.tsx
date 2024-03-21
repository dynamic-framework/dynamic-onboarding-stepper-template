import { DStepperDesktop, useDContext } from '@dynamic-framework/ui-react';
import { useEffect } from 'react';
import classNames from 'classnames';
import { CONTEXT_CONFIG, CURRENT_STEP } from './config/widgetConfig';
import { useSteps } from './hooks/useSteps';

export default function App() {
  const { setContext } = useDContext();
  const { steps } = useSteps();

  useEffect(() => {
    setContext(CONTEXT_CONFIG);
  }, [setContext]);

  return (
    <div
      id="onboardingStepperContainer"
      className={classNames(
        'd-none d-md-flex',
        'justify-content-center align-items-center',
        'bg-gray-200 rounded-end-4',
      )}
    >
      <DStepperDesktop
        className="custom-stepper"
        vertical
        options={steps}
        currentStep={CURRENT_STEP}
      />
    </div>
  );
}
