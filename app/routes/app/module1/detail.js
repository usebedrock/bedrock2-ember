import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class Module1DetailRoute extends Route {
  @action
  sayHi() {
    console.log('Hi!');
  }
}
