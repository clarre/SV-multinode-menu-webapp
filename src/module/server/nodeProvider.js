define(function(require) {
    'use strict';
 
    var
       properties         = require('Properties'),
       nodeIteratorUtil = require('NodeIteratorUtil');
    
    // Define this module
    return {
        getTreeAsJSON: function(nodeRoot) {
            var nodes = nodeIteratorUtil.getMenuItemsIncludingFolders(nodeRoot);

            var arr = [];

            while(nodes.hasNext()) {
                var node = nodes.next();
                var object = properties.get(node, 'URI', 'URL', 'displayName', 'published', 'publishDate', 'nameOfNonExistingProperty');

                arr.push(object)
            }
            return arr;
        },
    };
 });