let myForm = document.getElementById('myForm');

let totalToken = [];

myForm.addEventListener('click', function(e) {
    e.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let status = document.getElementById('status');

    let newToken = {
        id: totalToken.length + 1,
        name: name.value,
        email: email.value,
        status: status.value
    }

    totalToken.push(newToken);

    name.value = '';
    email.value = '';
    status.value = 'active';

  
    
    console.log(totalToken);

    let activeData = totalToken.filter(function(item) {
        return item.status == 'active';
    })

    let completeData = totalToken.filter(function(item) {
        return item.status == 'complete';
    })

    activeHandler(activeData);

});




function activeHandler(activeData) {

}


function completeHandler(completeData) {

}


function cancelHandler(cancelData) {

}