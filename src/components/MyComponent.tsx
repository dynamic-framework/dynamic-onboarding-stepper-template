import { useState } from 'react';
import { DIcon, DButton } from '@dynamic-framework/ui-react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ModyoLogo } from './modyoLogo.svg';
import { ReactComponent as ReactLogo } from './reactLogo.svg';

export default function MyComponent() {
  const { t } = useTranslation();
  const [showLogos, setShowLogos] = useState(false);

  return (
    <div
      className={classNames(
        'd-flex flex-column',
        'align-items-center justify-content-center',
        'gap-3 py-3',
      )}
    >
      <h3 className="fw-bolder">{t('title')}</h3>
      <p className="fw-medium">
        Get started by editing
        {' '}
        <span className="font-monospace">src/components/MyComponent.tsx</span>
      </p>
      <DButton
        onEventClick={() => setShowLogos((prevState) => !prevState)}
        text="Click me!"
      />
      {showLogos && (
        <div className="d-flex gap-3 flex-column flex-md-row justify-content-center align-items-center">
          <ModyoLogo />
          <DIcon icon="plus" size="3rem" />
          <ReactLogo />
        </div>
      )}
      <hr className="container border border-1" />
      <div className="container mt-5 text-left">
        <div className="row">
          <div className="col">
            <p className="fs-4">Learn</p>
            <p className="lead">
              <a
                href="https://docs.modyo.com/en/dynamic/"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Get started with Dynamic!
              </a>
            </p>
          </div>
          <div className="col">
            <p className="fs-4">Themes</p>
            <p className="lead">
              <a
                href="https://docs.modyo.com/en/dynamic/ui/theming.html"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Learn how to create a unique look-and-feel!
              </a>
            </p>
          </div>
          <div className="col">
            <p className="fs-4">Templates</p>
            <p className="lead">
              <a
                href="https://docs.modyo.com/en/dynamic/experiences/retail/dashboard.html"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Explore the fully customizable React-based templates
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
