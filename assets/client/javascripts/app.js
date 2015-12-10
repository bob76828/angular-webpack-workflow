import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import '../stylesheets/main.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config.js';
import home from './views/home';

angular.module('app', [uirouter, home])
  .config(routing);
