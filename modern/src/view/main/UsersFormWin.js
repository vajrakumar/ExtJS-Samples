Ext.define('DataBinding.view.main.UsersFormWin',{
    extend: 'Ext.Panel',
    reference   : 'userFormWin',
    layout:'fit',
    items:[{
            xtype:'form',
        title:'Add User',
        xtype:'userform',
        items:[
            {
                fieldLabel:'First Name'
            },
            {
                fieldLabel:'Last Name'
            }
        ]
   }]
});