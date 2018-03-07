Ext.define('SenchaDemo.model.Book', {
    config: {
        title: null,
        author: null,
        publisher: null,
        genre: null,
        description: null,
        quantity: null,
        available: null
    },

    constructor: function(config){
        this.initConfig(config)
    }
})