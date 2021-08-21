let naviGation = document.getElementById('naviGation');
let burgerBar = document.getElementById('burgerBar');



burgerBar.addEventListener('click', function() {
    naviGation.classList.toggle('active');
})

fetch('https://reqres.in/api/users?page=2', {
    method: 'GET'
})
.then(function(response) {
    if (respomse.status !== 200) {
        throw 'error';
    }
    return response.json(); 
})
.then(function(responseData) {
    console.log(responseData);
    let ul = document.createElement('ul');

    responseData.responseData.forEach(item => {
        led li = document.createElement('li');
        li.textContent = item.first_name;

        ul.appendChild(li);
    });

    document.getElementById('api').appendChild(ul);

})
.catch(function(error) {
     console.log(error);
})