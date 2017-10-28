enum ItemStatus
{
    active=1,
    completed = 2,
    deleted=3
}
class shoppingItem
{
    itemName:string
    price:number
    status:ItemStatus
    editable:boolean
}
class ItemList
{
    list:shoppingItem[]
    constructor(list:shoppingItem[])
    {
        this.list=list;
    }
    addItem(item:shoppingItem)
    {
        getJSON();
        this.list.push(item);
        setJSON()
    }
    deleteItem(item:shoppingItem,index)
    {
        getJSON();
        this.list.splice(index,1)
        setJSON();
    }
    completeItem(item:shoppingItem,index)
    {
        getJSON()
        this.list[index].status=ItemStatus.completed;
        console.log(this.list[index]);
        console.log(item);
        console.log(this.list);
        setJSON();
    }
}
function setJSON(){
    localStorage.setItem("ShoppingList",JSON.stringify(listObj));
}
function getJSON(){
     var JSONObj = localStorage.getItem("ShoppingList");
     console.log(JSONObj);

        var temp = JSON.parse(JSONObj);
        console.log(temp.list);
    listObj.list = temp.list;
    console.log(listObj.list)
}
var listObj=new ItemList([]);
function initialiseObj(){
    if(localStorage.getItem("ShoppingList")==null){
        localStorage.setItem("ShoppingList",JSON.stringify(listObj));
    }
    else{
        var newObj = JSON.parse(localStorage.getItem("ShoppingList"));
        listObj.list = newObj.list;
        console.log(listObj.list)
    }
}
function addItem(newItemName:string){
    var newItem=new shoppingItem();
    newItem.itemName=newItemName;
    newItem.price=50;
    newItem.status=ItemStatus.active;
    newItem.editable=false;
    listObj.addItem(newItem);
    console.log(listObj);
}
function deleteItem(elementObject,indexNumVal){
    listObj.deleteItem(elementObject,indexNumVal)
}
function completeItem(elementObject,indexNumVal){
    listObj.completeItem(elementObject,indexNumVal);
}