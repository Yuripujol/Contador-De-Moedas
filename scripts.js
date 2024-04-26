const botãoconverter = document.querySelector(".botão-converter")
const selectmoeda = document.querySelector(".select-moeda")
const primeiroselect = document.querySelector(".primeiro-select")


function convertervalor() {

    const valorEmReal = document.querySelector(".paragráfo-valor-real")
    const valorOutrasMoedas = document.querySelector(".paragráfo-moeda-convertida")
    const valorDoInput = document.querySelector(".input-valor").value


    const dolarDoDia = 5.2
    const eurododia = 5.45
    const libradodia = 6.39

    
   if (primeiroselect.value == "Real") {
 valorEmReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDoInput)
   }

   if (primeiroselect.value == "Dolar") {
    valorEmReal.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
       }).format(valorDoInput / dolarDoDia)
      }
      

    if (selectmoeda.value == "dolar") {
        //se o seletor estiver selecionado o valor de dolar, entre aqui
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoInput / dolarDoDia)
    }

    if (selectmoeda.value == "euro") {
        //se o seletor estiver selecionado o valor de Euro, entre aqui
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoInput / eurododia)
    }

    if (primeiroselect.value == "Euro") {
        valorEmReal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
           }).format(valorDoInput / eurododia)
          }

    if (selectmoeda.value == "libra") {
        //se o seletor estiver selecionado o valor de libra, entre aqui
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorDoInput / libradodia)
    }

    if (primeiroselect.value == "Libra") {
        valorEmReal.innerHTML =  new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
           }).format(valorDoInput / libradodia)
          }

    if (selectmoeda.value == "real") {
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput)

    }

}

function mudançaDeMoeda() {

    const trocaDeLetra = document.getElementById("troca-de-letra")

    if (selectmoeda.value == "dolar") {

        trocaDeLetra.innerHTML = "Dólar Americano"

        const logoAmericana = document.querySelector(".logo-americana")
        logoAmericana.src = "./assets/logo americana.png"

    }


    if (selectmoeda.value == "euro") {

        trocaDeLetra.innerHTML = "Euro"

        const logoEuro = document.querySelector(".logo-americana")
        logoEuro.src = "./assets/logo Euro.png "

    }

    if (selectmoeda.value == "libra") {

        trocaDeLetra.innerHTML = "Libra"

        const logoLibra = document.querySelector(".logo-americana")
        logoLibra.src = "./assets/logo Libra.png "

    }

    if (selectmoeda.value == "real") {

        trocaDeLetra.innerHTML = " Real"

        const logoBrasil = document.querySelector(".logo-americana")
        logoBrasil.src = "./assets/logo brasil.png"

    }

    convertervalor()
}

function primeiramudançamoeda() {

    const paragrafomenor = document.querySelector(".paragráfo-menor")
    const logoBrasil = document.querySelector(".logo-brasil")
    const valordamoeda = document.getElementById("valor-moeda")
    const valordoinputdois = document.getElementById("#imput-valor-dois")

    if (primeiroselect.value == "Dolar") {
  
        valordamoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valordoinputdois)
    
        paragrafomenor.innerHTML = "Dólar Americano"
        logoBrasil.src = "./assets/logo americana.png"
    }

    if (primeiroselect.value == "Euro") {
  
        valordamoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valordoinputdois)
    
        paragrafomenor.innerHTML = "Euro"
        logoBrasil.src = "./assets/logo Euro.png"
    }

    if (primeiroselect.value == "Libra") {
  
        valordamoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valordoinputdois)
    
        paragrafomenor.innerHTML = "Libra"
        logoBrasil.src = "./assets/logo Libra.png"
    }
    

    if (primeiroselect.value== "Real") {

valordamoeda.innerHTML= new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format( valordoinputdois)

        paragrafomenor.innerHTML = "Real"
        logoBrasil.src = "./assets/logo brasil.png"
}


 




convertervalor()
   
}



selectmoeda.addEventListener("change", mudançaDeMoeda)
botãoconverter.addEventListener("click", convertervalor)
primeiroselect.addEventListener("change", primeiramudançamoeda)




