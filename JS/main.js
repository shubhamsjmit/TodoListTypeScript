var ItemStatus;
(function (ItemStatus) {
    ItemStatus[ItemStatus["active"] = 1] = "active";
    ItemStatus[ItemStatus["completed"] = 2] = "completed";
    ItemStatus[ItemStatus["deleted"] = 3] = "deleted";
})(ItemStatus || (ItemStatus = {}));
var shoppingItem = /** @class */ (function () {
    function shoppingItem() {
    }
    return shoppingItem;
}());
var ItemList = /** @class */ (function () {
    function ItemList(list) {
        this.list = list;
    }
    ItemList.prototype.addItem = function (item) {
        getJSON();
        this.list.push(item);
        setJSON();
    };
    ItemList.prototype.deleteItem = function (item, index) {
        getJSON();
        this.list.splice(index, 1);
        setJSON();
    };
    ItemList.prototype.completeItem = function (item, index) {
        getJSON();
        this.list[index].status = ItemStatus.completed;
        console.log(this.list[index]);
        console.log(item);
        console.log(this.list);
        setJSON();
    };
    return ItemList;
}());
function setJSON() {
    localStorage.setItem("ShoppingList", JSON.stringify(listObj));
}
function getJSON() {
    var JSONObj = localStorage.getItem("ShoppingList");
    console.log(JSONObj);
    var temp = JSON.parse(JSONObj);
    console.log(temp.list);
    listObj.list = temp.list;
    console.log(listObj.list);
}
var listObj = new ItemList([]);
function initialiseObj() {
    if (localStorage.getItem("ShoppingList") == null) {
        localStorage.setItem("ShoppingList", JSON.stringify(listObj));
    }
    else {
        var newObj = JSON.parse(localStorage.getItem("ShoppingList"));
        listObj.list = newObj.list;
    }
}
function addItem(newItemName) {
    var newItem = new shoppingItem();
    newItem.itemName = newItemName;
    newItem.price = 50;
    newItem.status = ItemStatus.active;
    newItem.editable = false;
    listObj.addItem(newItem);
    console.log(listObj);
}
function deleteItem(elementObject, indexNumVal) {
    listObj.deleteItem(elementObject, indexNumVal);
}
function completeItem(elementObject, indexNumVal) {
    listObj.completeItem(elementObject, indexNumVal);
}
