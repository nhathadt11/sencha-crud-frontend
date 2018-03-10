/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaDemo.controller.BookController', {
  extend: 'Ext.app.Controller',
  requires : [
      'Ext.Ajax'
  ],
  config: {
      refs: {
          resetButton: '#resetButton',
          loginButton: '#loginButton'
      },
      
      control: {
          resetButton: {
              tap: 'onResetForm'
          },

          loginButton: {
              tap: 'onSubmitLogin'
          }
      }
  },

  onResetForm: function(button){
      Ext.getCmp("form").reset();
  },

  onSubmitLogin: function (button) {
      var title = Ext.getCmp('title').getValue();
      var author = Ext.getCmp('author').getValue();
      var publisher = Ext.getCmp('publisher').getValue();
      var available = Ext.getCmp('available').isChecked();
      var quantity = Ext.getCmp('quantity').getValue();
      var genre = Ext.getCmp('genre').getValue();
      var description = Ext.getCmp('description').getValue();
      Ext.Ajax.request(
          {
              url: SenchaDemo.app.getConfigs().baseUrl + '/Books',
              params: {
                  title: title,
                  author: author,
                  publisher: publisher,
                  available: available,
                  quantity: quantity,
                  genre: genre,
                  description: description
              },
              methods: 'POST',
              success: function (response, opts) {
                  Ext.Msg.alert("", "Inserted");
                  Ext.getCmp('form').reset();
              },
              failure: function (response, opts) {
                  Ext.Msg.alert("", "Failed to insert. Please try again");
              }
          }
      );
  }

});


