import { getRenderer } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/matmar10/Projects/OpenSource/rest-ez/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  'vZo3a95wH27oJJJ8+ixmQw==': ToCPrevNext,
  'YyttjbRX11tYgT3iwZJrBQ==': GithubSearch,
  '8iYm5KC+ozzQAZso6kr3tQ==': ToCToggle,
  'VuteVElYSJBdX52ZFnVrYA==': DarkModeSwitch,
  'HmAKFyAd8r6xjvdVYefaKw==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
