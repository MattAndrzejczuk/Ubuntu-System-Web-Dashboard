/**
 * Created by mattmbp on 2/16/17.
 */
(function ()
{
    'use strict';

    angular
        .module('app.sample')
        .controller('SampleController', SampleController);

    /** @ngInject */
    function SampleController(SampleData)
    {
        var vm = this;

        // Data
        vm.helloText = SampleData.data.helloText;

        // Methods

        //////////
    }
})();
