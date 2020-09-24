var dt = window.document.getElementById('dt')
var hoje = new Date()
var anoatual = hoje.getFullYear()
var mesatual = hoje.getMonth()
var mesat = mesatual+1
var diaatual = hoje.getDate()

function clicou(){
    var res = window.document.getElementById('res')
    var ano = `${dt.value[0]}${dt.value[1]}${dt.value[2]}${dt.value[3]}`
    var mes = `${dt.value[5]}${dt.value[6]}`
    var dia = `${dt.value[8]}${dt.value[9]}`
    var idade = (anoatual-ano)
    

    if(ano > anoatual){
        res.innerHTML = 'Erro, tente novamente !'
    }
    else if(ano == anoatual && mesat<mes){
        res.innerHTML = 'Erro, tente novamente !'
    }
    else if(ano == anoatual && mesat==mes && diaatual<dia ){
        res.innerHTML = 'Erro, tente novamente !'
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            
            if(idade<=1){
                genero = 'bebê masculino'
                //Bebe
                img.setAttribute('src','foto-bebe-m.png')
            }
            else if (idade>1 && idade < 11){
                //Criança
                genero = 'menino'
                img.setAttribute('src','foto-kid-m.png')
            }
            else if(idade < 21){
                //jovem
                genero = 'rapaz'
                img.setAttribute('src','foto-jovem-m.png')
            }
            else if(idade <50){
                //adulto
                genero = 'homem'
                img.setAttribute('src','foto-adulto-m.png')
            }
            else if(idade<120){
                //idoso
                genero = 'senhor'
                img.setAttribute('src','foto-idoso-m.png')
            }
            else{
                img.setAttribute('src','caixao.png')
            }
        }
        else if(fsex[1].checked){
            
            if(idade<=1){
                //Bebe
                genero = 'bebê feminino'
                img.setAttribute('src','foto-bebe-f.png')
            }
            else if (idade>1 && idade<11){
                //Criança
                genero = 'menina'
                img.setAttribute('src','foto-kid-f.png')
            }
            else if(idade < 21){
                //jovem
                genero = 'moça'
                img.setAttribute('src','foto-jovem-f.png')
            }
            else if(idade <50){
                //adulto
                genero = 'mulher'
                img.setAttribute('src','foto-adulto-f.png')
            }
            else if(idade <120){
                //idoso
                genero = 'senhora'
                img.setAttribute('src','foto-idoso-f.png')
            }
            else{
                img.setAttribute('src','caixao.png')
            }
        }
        if(mes<10){
            var mes = `${dt.value[6]} ${genero}`
        }         
        if(mesat<mes){
            var idadefinal = `${idade-1}`            
        }
        else if(mesat==mes && diaatual<dia){
            var idadefinal = `${idade-1}`    
        }
        else{
            var idadefinal = `${idade}`
        }
        res.innerHTML = `Detectamos ${genero} com ${idadefinal} anos.`
        res.appendChild(img)
    }
    
}