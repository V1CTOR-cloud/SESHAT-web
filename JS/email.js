window.addEventListener('DOMContentLoaded', (event) => {
    

    boton =document.getElementById("emailSubscriptor");
    email = document.getElementById("email");
    boton.addEventListener("click", petition);

    function petition(){

        // console.log(email.value);
        var http = new XMLHttpRequest();
        var url = 'localhost/symfony/SESHAT/email';
        http.open('POST', url, true);
        var params = email
        
        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
        }
        http.send(params);

    }
});
