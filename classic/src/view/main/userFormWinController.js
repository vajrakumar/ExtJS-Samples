Ext.define('DataBinding.view.main.userFormWinController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.userFormWin',
    addUser:function(){
    var newRec = this.getViewModel().get('myRecord');
    Ext.getStore('personnelStoreId').add(newRec);
    newRec.commit();
    this.getView().hide();
},
rejectChanges:function(){
this.getViewModel().set('myRecord', null)
this.getView().hide();
}
});