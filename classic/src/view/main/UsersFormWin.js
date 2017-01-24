Ext.define('DataBinding.view.main.UsersFormWin',{
    extend:'Ext.window.Window',
    requires:['DataBinding.view.main.userFormWinController'],
    reference   : 'userFormWin',
    xtype:'userformwin',
    layout:'fit',
    title:'Add User',
    autoHeight:true,
    //height:200,
    //width:300,
    viewModel:{},
    controller:'userFormWin',
    autoShow:true,
    items:[{
            xtype:'form',
            margin:5,
            defaults:{
                xtype:'textfield'
            },
        items:[
            {
                fieldLabel:'Name',
                bind:'{myRecord.name}'
                
            },
            {
                fieldLabel:'Email',
                vtype:'email',
                bind:'{myRecord.email}'
            },
            {
                fieldLabel:'Phone',
                bind:'{myRecord.phone}'
            }//name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" 
        ],
        buttons:[
            {
                text:'OK',
                handler:'addUser'
            },
            {
                text:'Cancel',
                handler:'rejectChanges'
            }
        ]
   }]
});