'use strict';

export default class TapReporter {
  constructor(launcher, opts = {}) {
    this.totalTests = 0;
    launcher.on('new suite', (suite) => this.addSuite(suite));
    launcher.on('end', () => {
      console.log(`1..${this.totalTests}`);
    });
  }

  addSuite(suite) {
    suite.on('end', (suite) => {
      const lines = [];
      if ('skip' === suite.status) {
        lines.push(`# SKIP file: "${suite.file}"`);
      } else {
        lines.push(`# file: "${suite.file}"`);
        suite.result.specs.forEach((spec, i) => {
          this.totalTests++;
          const status = this.status(spec);
          const comment = this.comment(spec);
          lines.push(`${status} ${this.totalTests} - ${spec.suiteName} (${i + 1}) ${spec.name} ${comment}`);
        });
      }
      console.log(lines.join('\n'));
    });
  }

  getSuite(location) {
    return this.suites.find(location);
  }

  comment(spec) {
    switch (spec.status) {
      case 'skip':
        return '# SKIP';
      case 'fail':
        if (spec.error) {
          try {
            const message = spec.error.stack
            ? String(spec.error.stack)
            : spec.error.message
            ? spec.error.message
            : String(spec.error);
            return `# ${message.replace(/\n/g, ' ', )}`;
          } catch (err) {
            return `# unexpected error`;
          }
        }
        return '';
      case 'pass':
      default:
        return '';
    }
  }

  status(spec) {
    switch (spec.status) {
      case 'pass':
        return 'ok';
      case 'skip':
        return 'ok';
      case 'fail':
        return 'not ok';
      default:
        return 'not ok';
    }
  }
}
