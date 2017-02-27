(function ()
{
    'use strict';

    angular
        .module('fuse')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {
        // $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/dashboard-server');

        /**
         * Layout Style Switcher
         *
         * This code is here for demonstration purposes.
         * If you don't need to switch between the layout
         * styles like in the demo, you can set one manually by
         * typing the template urls into the `State definitions`
         * area and remove this code
         */
        // Inject $cookies
        var $cookies;

        angular.injector(['ngCookies']).invoke([
            '$cookies', function (_$cookies)
            {
                $cookies = _$cookies;
            }
        ]);

        // Get active layout
        var layoutStyle = $cookies.get('layoutStyle') || 'verticalNavigation';

        var layouts = {
            verticalNavigation  : {
                main      : '/static/app/core/layouts/content-only.html',
                toolbar   : '',
                navigation: ''
            },
            verticalNavigationFullwidthToolbar  : {
                main      : '/static/app/core/layouts/content-only.html',
                toolbar   : '',
                navigation: ''
            },
            verticalNavigationFullwidthToolbar2  : {
                main      : '/static/app/core/layouts/content-only.html',
                toolbar   : '',
                navigation: ''
            },
            horizontalNavigation: {
                main      : '/static/app/core/layouts/content-only.html',
                toolbar   : '',
                navigation: ''
            },
            contentOnly         : {
                main      : '/static/app/core/layouts/content-only.html',
                toolbar   : '',
                navigation: ''
            },
            contentWithToolbar  : {
                main      : '/static/app/core/layouts/content-only.html',
                toolbar   : '',
                navigation: ''
            }
        };
        // END - Layout Style Switcher

        // State definitions
        $stateProvider
            .state('app', {
                abstract: true,
                views   : {
                    'main@'         : {
                        templateUrl: layouts[layoutStyle].main,
                        controller : 'MainController as vm'
                    },
                    'toolbar@app'   : {
                        templateUrl: layouts[layoutStyle].toolbar,
                        controller : 'ToolbarController as vm'
                    },
                    'navigation@app': {
                        templateUrl: layouts[layoutStyle].navigation,
                        controller : 'NavigationController as vm'
                    },
                    'quickPanel@app': {
                        templateUrl: '/static/app/quick-panel/quick-panel.html',
                        controller : 'QuickPanelController as vm'
                    }
                }
            });
    }

})();