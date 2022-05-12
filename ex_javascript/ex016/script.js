function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano') //ano do formulario
    let res = document.getElementById('res')
    let img = document.createElement("img")
    img.setAttribute("id", "foto")

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1851) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(fano.value)
        let gênero = ''
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute("src", "homembebe.png")
            } else if (idade < 26) {
                //jovem
                img.setAttribute("src", "homemjovem.png")
            } else if (idade < 53) {
                //adulto
                img.setAttribute("src", "homemadulto.png")
            } else {
                //idoso
                img.setAttribute("src", "homemidoso.png")
            }
        } else {
            gênero = "Mulher"
            if (idade >= 0 && idade < 14) {
                img.setAttribute("src", "mulherbebe.png")
            } else if (idade < 26) {
                img.setAttribute("src", "mulherjovem.png")
            } else if (idade < 48) {
                img.setAttribute("src", "mulheradulta.png")
            } else {
                img.setAttribute("src", "mulheridosa.png")
            }

        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}