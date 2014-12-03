# karma-minimalist-reporter

> Minimalist reporter for Karma.

## Installation

The easiest way is to keep `karma-minimalist-reporter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-minimalist-reporter": "~0.2"
  }
}
```

You can simple do it by:
```bash
npm install karma-minimalist-reporter --save-dev
```

The output will be just the totals:
```
PhantomJS 1.9.7 (Mac OS X): Executed 704 of 704 SUCCESS (7.966 secs / 0.087 secs)
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['minimalist']
  });
};
```
