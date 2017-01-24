/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataBinding.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'DataBinding.view.main.UsersFormWin'
    ],
    alias: 'controller.main',
    add:function(button){
        var win = this.lookupReference('userFormWin');
        if(!win){
            win = Ext.create('DataBinding.view.main.UsersFormWin');
        }
var newRec = Ext.create('Ext.data.Model');
win.getViewModel().set('myRecord',newRec);
       // win.getViewModel().set('myRecord',this.getView().getSelection()[0]);
        win.show();
    },
    remove:function(){
        this.getView().getStore().remove(this.getView().getSelection());
    }
});
