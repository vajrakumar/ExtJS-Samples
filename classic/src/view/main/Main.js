/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataBinding.view.main.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'app-main',
    requires: [
        'DataBinding.store.Personnel'
    ],
    title: 'DataBinding',
    controller:'main',
    reference:'maingrid',
    viewModel:{},
    store: {
        type: 'personnel'
    },
    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    items:[{
        xtype:'userformwin'
    }],
    dockedItems: {
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            iconCls: 'x-fa fa-plus',
            handler: 'add'
        }, {
            iconCls: 'x-fa fa-minus',
            bind:{
                disabled:'{!maingrid.selection}'
            },
            handler: 'remove'
        }]
    }
});
