import Component from '@glimmer/component';

export default class Button extends Component {

  get skin() {
    if (this.args.skin == "primary")
      return "c-button--primary";
    if (this.args.skin == "secondary")
      return "c-button--secondary";
    if (this.args.skin == "tertiary")
      return "c-button--tertiary";
    else
      return "";
  }

}
