
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/just-api'                // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Just Api'                    // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'matmar10',                   // --> your github username (where your repo is hosted)
      repo: 'just-api',                   // --> your github repo name
    }
  },
});
