import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class styleguideComponent extends Component {
  @tracked visibility = true;
  @service router;

  get routeTree() {

    var routes = Object.keys(this.router._router._routerMicrolib.recognizer.names);
    console.log(routes);
    // Filter out the ones containing the words warning and error
    var filteredRoutes = routes.filter(function(el) {
      return !el.includes("loading")
        && !el.includes("error")
        && !el.includes("styleguide")
        && !el.includes("debug")
        && !el.includes("application")
    });
    
    // Some filters to replace 
    function slashify(title) {
      title = title.replace(/\./g, "/");
      return title;
    }
  
    function prettyTitle(title) {
      title = title.replace(/\./g, " ");
      title = title.replace(/\-/g, " ");
      title = title.charAt(0).toUpperCase() + title.slice(1);
      
      return title;
    }
  
    // Object creator
    function finalizedRoutes(title) {
      return {
        url: slashify(title),
        name: prettyTitle(title)
      }
    }

    filteredRoutes = filteredRoutes.map(finalizedRoutes);
    return filteredRoutes;
  }
  
  @action
  toggleVisibility() {
    this.visibility = !this.visibility
  }
}

