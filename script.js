document.getElementById('btnCalc').addEventListener('click',(event)=>{
    event.preventDefault();
    const precoUnitario = document.getElementById('preco-unitario').value;
    const quantidade = document.getElementById('quantidade').value;
    const desconto = document.getElementById('desconto').value;

    const vlTotal = precoUnitario * quantidade;
    const vlDesconto = vlTotal * (desconto/100);
    const resultado = vlTotal - vlDesconto;
    const divResultado = document.getElementById("result");

    divResultado.innerHTML = `<h3>${"O valor total é: "+resultado+" reais"}</h3>`
})
