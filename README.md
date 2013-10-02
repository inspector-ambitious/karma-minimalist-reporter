# karma-minimalist-reporter

> Minimalist reporter for Karma.

## Installation

The easiest way is to keep `karma-minimalist-reporter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-minimalist-reporter": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-minimalist-reporter --save-dev
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
