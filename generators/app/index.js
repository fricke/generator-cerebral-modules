'use strict';
let yeoman = require('yeoman-generator');
let chalk = require('chalk');
let yosay = require('yosay');
let _ = require('lodash');

let getTemplates = (props) => {
  let {name} = props;
  let lcName = _.toLower(name);
  return {
    'index.js.tpl': `${props.path}/${name}/index.js`,
    'component.js.tpl': `${props.path}/${name}/components/${name}.js`,
    'initSignal.js.tpl': `${props.path}/${name}/signals/initSignal.js`,
    // 'prototypeModules.js.tpl': `${props.path}/${props.name}/index.js`,
    // 'prototypeRoutes.js.tpl': `${props.path}/${props.name}/index.js`,
    'signalsRequire.js.tpl': `${props.path}/${name}/signals.js`,
    'styles.tpl': `${props.path}/${lcName}/styles/${lcName}.js`
  };
};

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astounding ' + chalk.red('generator-stem-cerebral') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the name of this module?',
      store: true
    }, {
      type: 'input',
      name: 'path',
      message: 'Where?',
      store: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    console.log(getTemplates(this.props));
    _.each(getTemplates(this.props), (destFileName, templateFileName) => {
      this.fs.copyTpl(
        this.templatePath(templateFileName),
        this.destinationPath(destFileName),
        {name: this.props.name,lcName: _.toLower(this.props.name)}
      );
    });
  },

  install: function () {
    this.installDependencies();
  }
});
