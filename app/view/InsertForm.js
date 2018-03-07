/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('SenchaDemo.view.InsertForm', {
    extend: 'Ext.Panel',

    alias: 'widget.insertform',

    requires: [
        'Ext.TitleBar',
        'Ext.field.Password',
        'Ext.MessageBox',
        'Ext.field.Radio',
        'Ext.form.FieldSet'
    ],

    config: {
        scrollable: true,

        items: [
            {
                xtype: 'formpanel',
                id: 'form',
                name: 'form',
                items: [

                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Insert new book'
                    },

                    {
                        docked: 'top',
                        xtype: 'fieldset',
                        title: 'Book Info',
                        instructions: 'Please enter book information.',

                        items: [
                            {
                                xtype: 'textfield',
                                name: 'title',
                                id: 'title',
                                label: 'Title',
                            },
                            {
                                xtype: 'textfield',
                                name: 'author',
                                id: 'author',
                                label: 'Author',
                            },
                            {
                                xtype: 'textfield',
                                name: 'publisher',
                                id: 'publisher',
                                label: 'Publisher',
                            },
                            {
                                xtype: 'checkboxfield',
                                name: 'available',
                                id: 'available',
                                label: 'Available',
                            },
                            {
                                xtype: 'numberfield',
                                id: 'quantity',
                                name: 'quantity',
                                label: 'Quantity'
                            },
                            {
                                xtype: 'selectfield',
                                name: 'genre',
                                id: 'genre',
                                label: 'Genre',
                                valueField: 'genre',
                                displayField: 'title',
                                store: {
                                    data: [
                                        { genre: 'Action and Adventure', title: 'Action and Adventure' },
                                        { genre: 'Art', title: 'Art' },
                                        { genre: 'Comics', title: 'Comics' },
                                        { genre: 'Cookbooks', title: 'Cookbooks' },
                                        { genre: 'Drama', title: 'Drama' },
                                        { genre: 'Encyclopedias', title: 'Encyclopedias' },
                                        { genre: 'Guide', title: 'Guide' },
                                        { genre: 'Horror', title: 'Horror' },
                                        { genre: 'Science', title: 'Science' },
                                        { genre: 'Science fiction', title: 'Science fiction' },
                                        { genre: 'Self help', title: 'Self help' }
                                    ]
                                }
                            },
                            {
                                xtype: 'textareafield',
                                name: 'description',
                                id: 'description',
                                label: 'Description',
                                maxRows: 5
                            }
                        ]
                    },
                ],

            },
            //bottom bar
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                  },
                // scrollable: {
                //     direction: 'horizontal',
                //     directionLock: true
                // },
                items: [
                    {
                        text: 'Reset',
                        ui: 'round',
                        id: 'resetButton'
                    },

                    {
                        text: 'Submit',
                        ui: 'confirm',
                        id: 'loginButton'
                    }
                ]
            }
        ]
    }
});
