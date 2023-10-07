document.addEventListener("DOMContentLoaded", function() { 

const getUsers = document.querySelector('#get__users');
const getUsersResult = document.querySelector('#get__users_result');
const API_URL = 'http://localhost:3005';

getUsers.addEventListener('click', async () => {
    const result = await getPostData();
    result.forEach(element => {
        getUsersResult.innerHTML += renderHtml(element)
    });
})

const getPostData = async () => {
    const response = await fetch (`${API_URL}/users`);
    return await response.json();
}

const renderHtml = (props) => {
    return `
            <li><b>Имя:</b> ${props.name} <br> <b>Мыло:</b> ${props.email}</li>
    `;
}

const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const postUsers = document.getElementById('post__users');

postUsers.addEventListener('click', () => {
    createUserHandler()
})

const createUserHandler = async () => {
    const user = {
        name: nameField.value,
        email: emailField.value
    }
    try {
        fetch (`${API_URL}/users`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( user )
        });
    } catch(error) {
        console.error(error)
    }
}

const namePut = document.getElementById('name_put');
const emailPut = document.getElementById('email_put');
const userID = document.getElementById('user_id');
const putUsers = document.getElementById('put__users');

putUsers.addEventListener('click', () => {
    putUserHandler()
})

const putUserHandler = async () => {
    const user = {
        name: namePut.value,
        email: emailPut.value
    }
    try {
        fetch (`${API_URL}/users/${userID.value}`, {
            method: 'put',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( user )
        });
    } catch(error) {
        console.error(error)
    }
}


const userIDDelete = document.getElementById('user_id_delete');
const deleteUsers = document.getElementById('delete__users');

deleteUsers.addEventListener('click', () => {
    deleteUserHandler()
})

const deleteUserHandler = async () => {
    try {
        fetch (`${API_URL}/users/${userIDDelete.value}`, {
            method: 'delete',
        });
    } catch(error) {
        console.error(error)
    }
}

});

