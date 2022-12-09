import { MIcon } from '@modyo-dynamic/modyo-design-system-react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../store/hooks';
import { getMessage } from '../store/selectors';

export default function MyComponent() {
  const { t } = useTranslation();
  const message = useAppSelector(getMessage);
  return (
    <div className={classNames(
      'd-flex flex-column',
      'align-items-center justify-content-center',
      'gap-3 py-3',
    )}
    >
      <h3 className="fw-bold">
        {message}
      </h3>
      <div className="d-flex gap-3 flex-column flex-md-row justify-content-center align-items-center">
        <img
          src="https://docs.modyo.com/assets/img/modyo.png"
          width={200}
          alt="Modyo Logo"
        />
        <MIcon
          icon="plus"
          size="3rem"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
          height={150}
          alt="React Logo"
        />
      </div>
      <h5 className="fw-bold">
        {t('title')}
      </h5>
      <p className="d-block text-center">
        This is an example of a
        <a
          href="https://docs.modyo.com/en/widgets/"
          className="text-tertiary mx-1"
        >
          widget
        </a>
        build with
        <a
          href="https://create-react-app.dev/docs/getting-started"
          className="text-tertiary mx-1"
        >
          Create React App
        </a>
      </p>
    </div>
  );
}
