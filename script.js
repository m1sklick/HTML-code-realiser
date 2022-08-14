const form = document.getElementById('form');
form.addEventListener('submit',Write);

function Write (e) {
    e.preventDefault();
    
    let code = document.getElementById('code').value;

    document.getElementById('realiser').innerHTML = code;

}