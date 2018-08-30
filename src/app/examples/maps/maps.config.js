(function() {
  "use strict";

  angular.module("app.examples.maps").config(moduleConfig);

  /* @ngInject */
  function moduleConfig(
    $stateProvider,
    uiGmapGoogleMapApiProvider,
    triMenuProvider
  ) {
    $stateProvider
      .state("triangular.maps-fullwidth", {
        url: "/maps/fullwidth",
        templateUrl: "app/examples/maps/maps-fullwidth.tmpl.html",
        controller: "MapController",
        controllerAs: "vm",
        data: {
          permissions: {
            only: ["viewMaps"]
          },
          layout: {
            contentClass: "layout-column"
          }
        }
      })
      .state("triangular.maps-demos", {
        url: "/maps/demos",
        templateUrl: "app/examples/maps/maps-demo.tmpl.html",
        data: {
          permissions: {
            only: ["viewMaps"]
          }
        }
      });

    uiGmapGoogleMapApiProvider.configure({
      key: "AIzaSyAFPDiXe9OmM4M2uS-aX8Mxd_3vFkm759k",
      v: "3.17",
      libraries: "weather,geometry,visualization"
    });

    triMenuProvider.addMenu({
      name: "Maps",
      icon: "zmdi zmdi-pin",
      type: "dropdown",
      priority: 7.1,
      permission: "viewMaps",
      children: [
        {
          name: "Fullwidth",
          state: "triangular.maps-fullwidth",
          type: "link"
        },
        {
          name: "Demos",
          state: "triangular.maps-demos",
          type: "link"
        }
      ]
    });
  }
})();
