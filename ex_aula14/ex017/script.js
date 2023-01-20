function contar () {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        alert('TUDO OK!')
    }

}