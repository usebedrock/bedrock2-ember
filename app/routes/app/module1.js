import Route from '@ember/routing/route';

export default class AppModule1Route extends Route {
  model() {
    return [1, 2, 3]
  }
}
