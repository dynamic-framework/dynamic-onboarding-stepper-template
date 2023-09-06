# dynamic-retail-product-detail-template
## Requirements:
- Node@18+
- npm@9+
- modyo-cli@3.3.0 or above (`npm i -g @modyo/cli@latest`)

## Installation and initial setup
The best way to install this template is using the [modyo-cli](https://docs.modyo.com/en/platform/channels/cli.html)
```console
modyo-cli get dynamic-react-base-template my-project
cd my-project
npm i
npm run start
```

### Setup
1. Change the property name in `package.json` to the name of your project
2. Change the root `id` in `public/index.html:36` and `src/index.tsx:16`

**Note**: The root id should be _unique_ in your site and it should be written in camelCase.

## Deployment to Modyo and CI
To be able to deploy to Modyo configure the following variables in an `.env` file or as part of the Continuous Integration:
```yaml
# The url base of the organization in Modyo
MODYO_ACCOUNT_URL=https://my-org.modyo.cloud/
# Where you will deploy your micro frontend, you can use either the host or the ID but not both.
# MODYO_SITE_HOST=my-site
MODYO_SITE_ID=65
# The token authorizing the deployment, taken from Modyo
TOKEN=gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8
# The major version of the Modyo platform where the deployment will take place (8 or 9)
VERSION=9
# The name of the directory that contains the bundle of the micro frontend
BUILD_DIRECTORY=build
# The name that will identify your Micro Frontend in Modyo
WIDGET_NAME=my-project
# This directive is necessary to safely remove some libraries from the liquid parser
MODYO_DISABLE_LIQUID_REGEX=raw
```
