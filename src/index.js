(function() {
   'use strict';

   var 
      router  = require('router'),
      appData = require('appData'),
      nodeProvider = require('/module/server/nodeProvider');

   router.get('/', function(req, res) {
      var rootNode = appData.getNode('root');

      var menuTree = nodeProvider.getTreeAsJSON(rootNode);

      res.render('/', {
         menuTree: menuTree
      });
   });
}());