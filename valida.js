function validar() {
    var nome                = document.getElementById("nome").value;
    var email               = document.getElementById("email").value;
    var telefone            = document.getElementById("telefone").value;
    var cpf                 = document.getElementById("cpf").value;
    var senha               = document.getElementById("senha").value;
    var confirmSenha        = document.getElementById("confirmSenha").value;
    var cep                = document.getElementById("cep").value;
    

    //validações de inputs//

    if(!nome){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo nome";
        document.getElementById("nome").focus();

        return false;

    }
    if(!email){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo email";
        document.getElementById("email").focus();
        return false;

    }
    if(!telefone){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo telefone";
        document.getElementById("telefone").focus();
        return false;

    }
    if(!cpf){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo cpf";
        document.getElementById("cpf").focus();
        return false;

    }
    if(!cep){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo CEP";
        document.getElementById("cep").focus();
        return false;

    }
    if(!senha){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo senha";
        document.getElementById("senha").focus();
        return false;

    }
    if(!confirmSenha){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo confirma senha";
        document.getElementById("confirmSenha").focus();
        return false;

    }

    if(senha !=confirmSenha){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Senhas diferentes";
        document.getElementById("confirmSenha").focus();
        return false;
        
    }

    //mascara de inputs



    



}