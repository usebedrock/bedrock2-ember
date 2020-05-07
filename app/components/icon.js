import Component from '@glimmer/component';

export default class Icon extends Component {

  get filePath () {
    return `icons/${this.args.name}`;
  }

}
