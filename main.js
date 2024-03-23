$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('0000-000')
    $('#cpf').mask('000.000.000-00')
    $('form').validate({
    rules: {
        nomeCompleto: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true 
        },
        cep: {
            required: true
        },
        endereço: {
            required: true
        }
    },
    messages: {
        nomeCompleto: 'Insira seu nome',
        email: 'Insira seu e-mail',
        telefone: 'Insira seu e-mail',
        cpf: 'Insira seu cpf',
        cep: 'Insira seu cep',
        endereço: 'Insira seu endereço'
    },
    submitHandler: function(form) {
        alert('Voce concluiu o cadastro corretamente')
        form.reset();
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos, por favor preencha todos para cadastra-lo`)
        }
    }
    })
})