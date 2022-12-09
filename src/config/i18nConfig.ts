/* eslint-disable @typescript-eslint/no-floating-promises */
import { liquidParser } from '@modyo-dynamic/modyo-design-system';
import { configureI18n } from '@modyo-dynamic/modyo-design-system-react';

import es from '../locales/es.json';
import en from '../locales/en.json';

const resources = {
  es: { translation: es },
  en: { translation: en },
};

const LANG = liquidParser.parse('{{site.language}}');

configureI18n(resources, { lng: LANG });