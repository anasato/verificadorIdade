function verificar () {
  var data = new Date ()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.getElementById('res')

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("Verifique os dados e tente novamente!")
  } else {
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Masculino'
      if (idade >= 0 && idade <= 5){
        //bebe
        img.setAttribute('src', 'fotobebem.png' )
      }else if (idade < 12) {
        img.setAttribute('src', 'fotocriancam.png')
        //criança
      }else if (idade < 21) {
        img.setAttribute('src', 'fototeenm.png')
        //adolescente
      }else if (idade < 50) {
        img.setAttribute('src', 'fotoadultm.png')
        //adulto
      }else {
        img.setAttribute('src', 'fotoagedm.png')
        //idoso
      }
    }else if (fsex[1].checked) {
      genero = 'Feminino'
      if (idade >= 0 && idade <= 5){
        //bebe
        img.setAttribute('src', 'fotobebef.png' )
      }else if (idade < 12) {
        img.setAttribute('src', 'fotocriancaf.png')
        //criança
      }else if (idade < 21) {
        img.setAttribute('src', 'fototeenf.png')
        //adolescente
      }else if (idade < 50) {
        img.setAttribute('src', 'fotoadultf.png')
        //adulto
      }else {
        img.setAttribute('src', 'fotoagedf.png')
        //idoso
      }
    }
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
    img.style.textAlign = 'center'
  }
}