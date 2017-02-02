const Base = require('yeoman-generator').Base;

class CircleGenerator extends Base {
  writing() {
    this.fs.copyTpl(
      this.templatePath('travis.yml'),
      this.destinationPath('.travis.yml')
    );
  }

  end() {
    this.config.set('travis', true);
    this.config.save();
  }
}

module.exports = CircleGenerator;