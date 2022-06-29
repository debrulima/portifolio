document.querySelector(".hamburguer").addEventListener("click", ()=>
    document.querySelector(".container").classList.toggle("show-menu")
);

var btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    /*fetch('https://api.sheetmonkey.io/form/h5kAjACMKLKqdUaqb6B8oX');

    var formulario = document.querySelector("#formulario");
    console.log(formulario.nome.value);
    console.log(formulario.email.value);
    console.log(formulario.mensagem.value);*/
})