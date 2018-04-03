export const dataAPI = () => {
    return fetch("https://uetcc-todo-app.herokuapp.com/draft")
        .then(reponsive => {
            return reponsive.json();
        });
}
export const createTodo = (text) => {
    const request = new Request("https://uetcc-todo-app.herokuapp.com/draft", {
        method: "POST",
        headers: {
            'Content-Type': ' application/json'
        },
        body: JSON.stringify({
            title: text
        })
    });
    return fetch(request)
        .then(response => {
            return response.json();
        });
}
export const deleteTodo = (id) => {
    const url = `https://uetcc-todo-app.herokuapp.com/draft/${id}`;
    const request = new Request(url, {
        method: 'DELETE'
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};
export const toggleTodo = (id) => {
    const url = `https://uetcc-todo-app.herokuapp.com/draft/${id}/toggle`;
    const request = new Request(url, {
        method: 'POST'
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};
export const register = ({email, password, name}) => {
    const url = `https://uetcc-todo-app.herokuapp.com/register`;
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            name,
        })
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};
export const login = ({email, password}) => {
    const url = `https://uetcc-todo-app.herokuapp.com/login`;
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
        })
    });

    return fetch(request)
        .then(response => {
            return response.json();
        });
};