var todos = document.getElementById("list").getElementsByTagName("li");
var textInput = document.getElementById("input");
var jsonData = [];
const struct = {
    title: '',
    status: 0
}
const datasample = [
    {
        title: "Buy eggs",
        status: 1
    },
    {
        title: "Read a book",
        status: 0
    },
    {
        title: "Organize office",
        status: 0
    },
    {
        title: "UET Code Camp 2018",
        status: 0
    }
]
if (localStorage.datatodo == null) {
    localStorage.datatodo = JSON.stringify(datasample);
}

function setEvent(target){
    target.addEventListener("click", function (e) {
        if (e.target.tagName != "BUTTON") {
            done(e.currentTarget);
        } else {
            e.target.parentElement.remove();
            alertText("Removed!");
            loadevent();
        }
    });
}
function loadFromStorage() {
    data = JSON.parse(localStorage.datatodo);
    for (i = 0; i < data.length; i++) {
        listHTML = document.createElement("li");
        setEvent(listHTML);
        if (data[i].status == 1) {
            listHTML.className = "done";
        } else {
            listHTML.className = "none";
        }
        listHTML.innerHTML += '<span>' + data[i].title + '</span><button class="remove">&#x2715;</button>';
        document.getElementById("list").appendChild(listHTML);
    }
}

loadFromStorage();

function alertText(text) {
    document.getElementById("alert").innerHTML = text;
    document.getElementById("alert").style.bottom = 0;
    setTimeout("document.getElementById('alert').style.bottom = '-100px'", 3000);
}

function done(target) {
    console.log(target);
    if (target.tagName != "LI") {
        target = target.parentElement;
    }
    if (target.className == "done") {
        target.className = "none";
    } else {
        target.className = "done";
    }
    alertText("Done!");
    for (i = 0; i < todos.length; i++) {
        jsonData[i].status = todos[i].className == "done" ? 1 : 0;
    }
    localStorage.datatodo = JSON.stringify(jsonData);
}

function checklength() {
    if (todos.length == 0) {
        document.getElementById("empty").style.display = "block";
    } else {
        document.getElementById("empty").style.display = "none";
    }
}
function loadevent() {
    jsonData = [];
    checklength();
    for (i = 0; i < todos.length; i++) {
        jsonData[i] = Object.create(struct);
        jsonData[i].title = todos[i].getElementsByTagName("span")[0].innerText;
        jsonData[i].status = todos[i].className == "done" ? 1 : 0;
    }
    localStorage.datatodo = JSON.stringify(jsonData);
}

loadevent();

function addnew() {
    if (textInput.value.length < 1) {
        alertText("Your text is empty!");
    } else {
        var child = document.createElement("li");
        setEvent(child);
        child.className = "none";
        child.innerHTML = '<span>' + textInput.value + '</span><button class="remove">&#x2715;</button>';
        document.getElementById("list").appendChild(child);
        textInput.value = '';
        alertText("New reminder has been added!");
    }
    loadevent();
}

textInput.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        addnew();
        loadevent();
    };
});

document.getElementById("add").addEventListener("click", function () { addnew() });
