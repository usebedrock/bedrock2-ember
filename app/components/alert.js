import Component from '@glimmer/component';

export default class Alert extends Component {

  get skin() {
    if (this.args.skin == "success")
      return "c-alert--success";
    if (this.args.skin == "danger")
      return "c-alert--danger";
    else
      return "";
  }

}
