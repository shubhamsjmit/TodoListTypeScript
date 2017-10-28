window.onload = function () {
    initialiseObj();
    var btnId = 'add';
    var inpId = 'tasknew';
    var btn = document.getElementById(btnId);
    var inp = document.getElementById('tasknew');
    btn.onclick = function () {
        //console.log("heloo");
        var val = ""; //inp.value;
        if (val.trim() != "") {
            addItem(val);
        }
        else {
            window.alert("Input box cannot be empty");
        }
        inp.value = "";
        display();
    };
    console.log(listObj);
    console.log(listObj.list);
    display();
};
function enumerateItemObj(itemVal, indexNum) {
    var newElement = document.createElement("li");
    newElement.setAttribute("id", indexNum);
    newElement.setAttribute("class", "stat_" + itemVal.status + "   " + itemVal.editable);
    if (itemVal.editable == false) {
        var textNodeElement = document.createElement("label");
        textNodeElement.innerHTML = itemVal.itemName;
        if (itemVal.status == ItemStatus.completed) {
            textNodeElement.setAttribute("class", "fa fa-check");
        }
    }
    else {
        var textNodeElement = document.createElement("input");
        textNodeElement.setAttribute("type", "text");
        textNodeElement.setAttribute("class", "insideInput");
        textNodeElement.setAttribute("id", "up_" + indexNum);
        textNodeElement.value = itemVal.itemName;
    }
    newElement.appendChild(textNodeElement);
    var nextElement = document.createElement("div");
    var deleteButton = document.createElement("Button");
    //deleteButton.innerHTML = "Delete Item";
    deleteButton.setAttribute("OnClick", "delEle('" + indexNum + "')");
    deleteButton.setAttribute("class", "delete  fa fa-times");
    deleteButton.setAttribute("aria-hidden", "true");
    nextElement.appendChild(deleteButton);
    if (itemVal.status != ItemStatus.completed) {
        var completeButton = document.createElement("Button");
        //  completeButton.innerHTML = "Complete Item";
        completeButton.setAttribute("class", "complete fa fa-check");
        completeButton.setAttribute("OnClick", "comEle('" + indexNum + "')");
        completeButton.setAttribute("aria-hidden", "true");
        nextElement.appendChild(completeButton);
    }
    var editButton = document.createElement("Button");
    if (itemVal.editable == false) {
        //editButton.innerHTML = "Edit Item";
    }
    else {
        //editButton.innerHTML = "Done";
    }
    editButton.setAttribute("class", "edit  fa fa-pencil-square-o");
    editButton.setAttribute("aria-hidden", "true");
    editButton.setAttribute("OnClick", "editEle('" + indexNum + "')");
    nextElement.appendChild(editButton);
    newElement.appendChild(nextElement);
    return newElement;
}
function print(itemobj, indexval) {
    console.log(itemobj + "      " + indexval);
}
function delEle(indexNumVal) {
    var elementObj = getElement(indexNumVal);
    console.log(indexNumVal);
    deleteItem(elementObj, indexNumVal);
    display();
}
function comEle(indexNumEle) {
    var elementObj = getElement(indexNumEle);
    console.log(indexNumEle);
    console.log(elementObj);
    completeItem(elementObj, indexNumEle);
    display();
}
function editEle(indexNumEle) {
    var elementObj = getElement(indexNumEle);
    if (elementObj.editable == true) {
        elementObj.editable = false;
        var UpdateId = "up_" + indexNumEle;
        var upInp = document.getElementById(UpdateId);
        elementObj.itemName = upInp.value;
        setJSON();
    }
    else {
        elementObj.editable = true;
    }
    display();
}
function getElement(indexNumVal) {
    return listObj.list[indexNumVal];
}
function display() {
    var listDiv = document.getElementById('list');
    listDiv.innerHTML = "";
    //listObj.list.map(print);
    var enumerateList = listObj.list.map(enumerateItemObj);
    enumerateList.forEach(function (enumItem) {
        listDiv.appendChild(enumItem);
    });
}
