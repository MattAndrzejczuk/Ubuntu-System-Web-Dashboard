/**
 * Created by mattmbp on 2/16/17.
 */
(function ()
{
    'use strict';

    angular
        .module('app.forum', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.forum', {
                url    : '/forum',
                views  : {
                    'content@app': {
                        templateUrl: '/static/app/main/apps/forum/forum.html',
                        controller : 'SampleController as vm'
                    }
                },
                resolve: {
                    SampleData: function (msApi)
                    {
                        return msApi.resolve('forum@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('/static/app/main/apps/forum');

        // Api
        msApiProvider.register('forum', ['/static/app/data/forum/forum.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'SAMPLE',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.forum', {
            title    : 'Forum',
            icon     : 'icon-bulletin-board',
            state    : 'app.forum',
            /*stateParams: {
                'param1': 'page'
             },*/
            //translate: 'SAMPLE.SAMPLE_NAV',
            weight   : 1
        });
    }
})();
