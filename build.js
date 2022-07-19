const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
    name: 'css/variables',
    formatter: function (dictionary, config) {
      return `${this.selector} {
        ${dictionary.allProperties.map(prop => `  --${prop.name}: ${prop.value};`).join('\n')}
      }`
    }
  });  

const _ = require('lodash');
const fs = require('fs');

const typingsES6Template = _.template(
  fs.readFileSync(`${__dirname}/template/es6.template`)
);

StyleDictionaryPackage.registerFormat({
  name: 'typings/es6',
  formatter: typingsES6Template,
});


StyleDictionaryPackage.registerTransform({
    name: 'sizes/px',
    type: 'value',
    transformer: function(prop) {
      const val = parseFloat(prop.value);
      if (isNaN(val)) throwSizeError(prop.name, prop.value, 'px');
      return val + 'px';
    }
});

function getStyleDictionaryConfig(theme) {
  return {
    "source": [
      `tokens/${theme}.json`,
    ],
    "platforms": {
      "web": {
        "transforms": ["attribute/cti", "name/cti/kebab", "sizes/px"],
        "buildPath": `output/`,
        "files": [{
            "destination": `${theme}.js`,
            "format": "javascript/es6",
            "selector": `.${theme}-theme`
          }]
      }
    }
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['foundation', 'logee-transportation', 'logee-distribution', 'logee-control-tower'].map(function (theme) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

    StyleDictionary.buildPlatform('web');

    console.log('\nEnd processing');
})

console.log('\n==============================================');
console.log('\nBuild completed!');
