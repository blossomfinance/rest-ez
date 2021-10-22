
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/rest-ez'                 // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'REST-EZ'                    // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'matmar10',                   // --> your github username (where your repo is hosted)
      repo: 'rest-ez',                    // --> your github repo name
    }
  },
});
