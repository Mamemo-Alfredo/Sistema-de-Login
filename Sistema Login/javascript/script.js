class Utilizador {
    constructor() {
        this.id = 1;
        this.arrayUtilizador = [];
        this.editarID = null;
    }

    dados_adm() {
        let utilizador = {
            id_utilizador: this.id,
            senha_utilizador: "123456",
            genero_utilizador: "Masculino",
            estado_utilizador: "Desactivado",
            nome_utilizador: "Eliandro Alfredo",
            email_utilizador: "eliandroaalfredo@gmail.com",
        }

        return utilizador;
    }

    salvar_adm() {
        let utilizador = this.dados_adm();

        this.arrayUtilizador.push(utilizador);
        this.id++;

        document.getElementById('btn_add_adm').style.display = "none";
    }

    validar_conta() {
        let email_utlizador = document.getElementById('email_utlizador').value;
        let senha_utlizador = document.getElementById('senha_utlizador').value;
        
        if ((email_utlizador == this.arrayUtilizador[0].email_utilizador) && (senha_utlizador == this.arrayUtilizador[0].senha_utilizador)) {
            sessionStorage.setItem('nome', this.arrayUtilizador[0].nome_utilizador);
            sessionStorage.setItem('genero', this.arrayUtilizador[0].genero_utilizador);
            sessionStorage.setItem('estado', 'Activado');
            sessionStorage.setItem('email', email_utlizador);
            window.location.assign('inicio.html');
        }else {
            alert('Erro');
        }
    }

    verificar_sessao() {
        const estado = sessionStorage.getItem('estado');
        let aviso = document.getElementById('aviso');
        let informacoes = document.getElementById('informacoes');
        let sexo;

        if (estado != 'Activado') {
            sessionStorage.clear();
            setTimeout(function () {
                window.location.assign('index.html');
            }, 0);
        }else {
            if (sessionStorage.getItem('genero') == 'Masculino') {
                sexo = 'senhor';
            }else {
                sexo = 'senhora';
            }
            informacoes.innerText = "Olá " + sexo + " " + sessionStorage.getItem('nome');
        }
    }

    terminar_sessao() {
        sessionStorage.clear();
        setTimeout(function () {
            window.location.assign('index.html');
        }, 0);
    }
}

var utilizador = new Utilizador();