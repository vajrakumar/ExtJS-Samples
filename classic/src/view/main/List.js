/**
 * This view is an example list of people.
 */
Ext.define('DataBinding.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    requires: [
        'DataBinding.store.Personnel'
    ],
    store: {
        type: 'personnel'
    },
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
dockedItems:[{
    icon: 'x-fa fa-add',
    handler:'add'
},{
    icon: 'x-fa fa-minus',
    handler:'remove'
}],
    listeners: {
        select: 'onItemSelected'
    }
});
