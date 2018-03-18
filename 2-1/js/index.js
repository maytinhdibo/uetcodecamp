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

jsonData = JSON.parse(localStorage.datatodo);

function setEvent(target) {
    target.addEventListener("click", function (e) {
        if (e.target.tagName != "BUTTON") {
            done(e.currentTarget);
        } else {
            jsonData.splice(e.target.parentElement.id,1);
            localStorage.datatodo = JSON.stringify(jsonData);
            loadFromStorage();
            alertText("Removed!");
        }
    });
}

function checklength() {
    if (todos.length == 0) {
        document.getElementById("empty").style.display = "block";
    } else {
        document.getElementById("empty").style.display = "none";
    }
}

function loadFromStorage() {
    document.getElementById("list").innerHTML='<div id="empty"> <br/> <img src="img/empty.png"/> <span>This list is empty!</span> </div>';
    data = JSON.parse(localStorage.datatodo);
    for (i = 0; i < data.length; i++) {
        listHTML = document.createElement("li");
        listHTML.id = i;
        setEvent(listHTML);
        if (data[i].status == 1) {
            listHTML.className = "done";
        } else {
            listHTML.className = "none";
        }
        listHTML.innerHTML += '<span>' + data[i].title + '</span><button class="remove">&#x2715;</button>';
        document.getElementById("list").appendChild(listHTML);
    }
    checklength();
}

loadFromStorage();

function alertText(text) {
    document.getElementById("alert").innerHTML = text;
    document.getElementById("alert").style.bottom = 0;
    setTimeout("document.getElementById('alert').style.bottom = '-100px'", 3000);
}

function done(target) {
    if (target.tagName != "LI") {
        target = target.parentElement;
    }
    if (target.className == "done") {
        target.className = "none";
        jsonData[target.id].status=0;
        alertText("Undone!");
    } else {
        target.className = "done";
        jsonData[target.id].status=1;
        alertText("Done!");
    }
    localStorage.datatodo = JSON.stringify(jsonData);
}

function addnew() {
    if (textInput.value.length < 1) {
        alertText("Your text is empty!");
    } else {
        var next = {
            title: textInput.value,
            status: 0
        }
        jsonData.push(next);
        localStorage.datatodo = JSON.stringify(jsonData);
        loadFromStorage();
        textInput.value = '';
        alertText("New reminder has been added!");
    }
}

textInput.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        addnew();
    };
});

document.getElementById("add").addEventListener("click", function () { addnew() });
