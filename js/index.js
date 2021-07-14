var sNome,sEmail;
function record(){
    sNome = document.getElementById("exampleInputEmail1").value;
    sEmail = document.getElementById("exampleInputPassword1").value;

    localStorage.exampleInputEmail1 = sNome;
    localStorage.exampleInputPassword1 = sEmail;
}