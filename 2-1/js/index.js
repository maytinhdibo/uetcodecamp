var todos = document.getElementById("list").getElementsByTagName("li");
var textInput = document.getElementById("input");

function alertText(text) {
    document.getElementById("alert").innerHTML = text;
    document.getElementById("alert").style.bottom = 0;
    setTimeout("document.getElementById('alert').style.bottom = '-100px'", 20000);
}

function done(target) {
    target.className = "done";
    alertText("Done!")
}

function checklength() {
    if (todos.length == 0) {
        document.getElementById("empty").style.display = "block";
    } else {
        document.getElementById("empty").style.display = "none";
    }
}
function loadevent() {
    checklength();
    for (i = 0; i < todos.length; i++)
        todos[i].addEventListener("click", function (e) {
            for (i = 0; i < todos.length; i++)
                todos[i].addEventListener("click", function (e) {
                    if (e.target.tagName != "BUTTON") {
                        done(e.currentTarget);
                    } else {
                        e.target.parentElement.remove();
                        alertText("Removed!");
                        checklength();
                    }
                });
        });
}

loadevent();

function addnew() {
    if (textInput.value.length < 1) {
        alertText("Your text is empty!");
    } else {
        var child = document.createElement("li");
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
