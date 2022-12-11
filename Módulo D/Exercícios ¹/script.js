function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        // BOA MANHA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#d06e63'
    } else if (hora >= 12 && hora <= 16) {
        // BOM DIA!
        img.src = 'fotodia.png'
        document.body.style.background = '#6db4cc'
    } else if (hora >= 16 && hora < 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#f49825'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#7476a8'
    }

}
