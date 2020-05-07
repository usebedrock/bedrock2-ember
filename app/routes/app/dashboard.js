import Route from '@ember/routing/route';

export default class AppDashboardRoute extends Route {
  model() {
    return ['Title 1', 'Title 2', 'Title 3'];
  }
}
