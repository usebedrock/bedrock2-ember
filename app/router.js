import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('sign-in');

  this.route('app', function() {
    this.route('dashboard');
    this.route('module1', function() {
      this.route('add');
      this.route('detail');
      this.route('index');
    });
  });

  this.route('styleguide', function() {
    this.route('button');
    this.route('navbar');
    this.route('toolbar');
    this.route('panel');
    this.route('modal');
    this.route('icons');
    this.route('colors');
    this.route('typography');
    this.route('alerts');
    this.route('badge');
    this.route('avatar');
  });

  this.route('debug');

  this.route('module2', function() {
    this.route('add');
    this.route('detail');
  });
});
