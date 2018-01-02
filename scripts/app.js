angular
  .module("ngClassifieds", ["ngMaterial", 'ui.router'])
  .config(function($mdThemingProvider, $stateProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');

    $stateProvider
      .state('stateone', {
        url: '/stateone',
        template: '<h1>State one</h1>'
      })
      .state('statetwo', {
        url: '/statetwo',
        template: '<h1>state two</h1>'
      });

  });