import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class styleguideComponent extends Component {
  @tracked visibility = true;
  @service router;

  get routeTree() {
    // Need to filter these for loading and error states
    var data = this.router._router._routerMicrolib.recognizer.names;
    // Stuck here...
    //var filtered = data.filter(name => name.includes('error'))
    
    return Object.keys(data);
  }
  
  @action
  toggleVisibility() {
    this.visibility = !this.visibility
  }
}
