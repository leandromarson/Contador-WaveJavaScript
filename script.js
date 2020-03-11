function contar(){
    var res = document.querySelector("div#res")
    var inicio = Number(document.getElementById("inicio").value)
    var fim = Number(document.getElementById("fim").value)
    var passo = Number(document.getElementById("passo").value)

    var icone = document.createElement("img")
    icone.setAttribute('id','img')

    if(document.getElementById("inicio").value.length==0 || document.getElementById("fim").value.length==0 || document.getElementById("passo").value.length==0){
        res.innerHTML = "<p>[ERRO] Faltam dados (Impossível Contar)</p>" 
                
    }else{
        if(passo==0){
            window.alert("Não e possivel contar com o passo 0; Mudando o passo para 1")
            passo=1
        }
        if(passo<0){
            window.alert("Não e possivel contar com o passo Negativo; Mudando o passo para 1")
            passo=1 
        }
        res.innerHTML = "<p>Contando: </p>"
        if(inicio<=fim){
            //Contagem crescente
            for(var x = inicio;x<=fim;x+=passo){
                res.innerHTML += `${x} \u{1F449} `             
            }
        }else{
            //Contagem decrescente
            for(var x = inicio;x>=fim;x-=passo){
                res.innerHTML += `${x} \u{1F449} `                
            }            
        }
        res.innerHTML += `\u{1F3C1}<p>`

    }

    

    


}