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
        'd-flex flex-column gap-3',
        'align-items-center justify-content-center',
      )}
    >
      <h1 className="fw-bolder">{t('title')}</h1>
      <p className="h5 text-muted">
        Get started by editing
        {' '}
        <span className="font-monospace">src/components/MyComponent.tsx</span>
      </p>
      <DButton
        onEventClick={() => setShowLogos((prevState) => !prevState)}
        text="Click me!"
        size="lg"
      />
      {showLogos && (
        <div className="d-flex gap-3 flex-column flex-md-row justify-content-center align-items-center mt-3">
          <ModyoLogo />
          <DIcon icon="plus" size="2rem" className="text-muted" />
          <ReactLogo />
        </div>
      )}
      <div className="w-100 row mt-8">
        <div className="col mb-4">
          <a
          href="https://docs.modyo.com/en/dynamic/"
          className="text-decoration-none p-4 card flex-row border h-100"
          target="_blank"
          >
            <DIcon
              circleSize="calc(var(--bs-icon-component-size) * 1)"
              hasCircle
              icon="book"
              size="30px"
              theme="secondary"
            />
            <div className="ms-3">
              <p className="fs-5 fw-bold text-dark mb-1">Learn</p>
              <p className="text-muted">Get started with Dynamic Framework!</p>
            </div>
          </a>
        </div>
        <div className="col mb-4">
          <a
          href="https://docs.modyo.com/en/dynamic/ui/theming.html"
          className="text-decoration-none p-4 card flex-row border h-100"
          target="_blank"
          >
            <DIcon
              circleSize="calc(var(--bs-icon-component-size) * 1)"
              hasCircle
              icon="brush"
              size="30px"
              theme="secondary"
            />
            <div className="ms-3">
              <p className="fs-5 fw-bold text-dark mb-1">Themes</p>
              <p className="text-muted">Learn how to create a unique look-and-feel!</p>
            </div>
          </a>
        </div>
        <div className="col mb-4">
          <a
          href="https://docs.modyo.com/en/dynamic/experiences/retail/dashboard.html"
          className="text-decoration-none p-4 card flex-row border h-100"
          target="_blank"
          >
            <DIcon
              circleSize="calc(var(--bs-icon-component-size) * 1)"
              hasCircle
              icon="layout-text-window"
              size="30px"
              theme="secondary"
            />
            <div className="ms-3">
              <p className="fs-5 fw-bold text-dark mb-1">Experiences</p>
              <p className="text-muted">Explore the fully React-based templates</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
