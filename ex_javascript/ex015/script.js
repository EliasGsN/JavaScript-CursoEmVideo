function carregar() {
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 5) {
        //Boa Madrugada!
        img.src = "fotomadrugada.png"
        document.body.style.background = "#081828"
    } 
    else if (hora >= 5 && hora < 12) {
        //Bom Dia!
        img.src = "fotomanha.png"
        document.body.style.background = "#bbd1dc"
    }
    else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = "fototarde.png"
        document.body.style.background = "#f7904e"
    }
    else {
        //Boa Noite!
        img.src = "fotonoite.png"
        document.body.style.background = "#a081ba"
    }
    
}