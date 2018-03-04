Ext.define('SenchaDemo.model.User', {
    config: {
        username: null,
        password: null,
        fullname: null,
        role: null,
        leaf: null
    },

    constructor: function(config){
        this.initConfig(config)
    }
})