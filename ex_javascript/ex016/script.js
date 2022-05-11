function verificar() {
    let date = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano') //ano do formulario
    let res = document.getElementById('res')
    if (Number(fano.value.length) == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        
    }
}