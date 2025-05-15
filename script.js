document.getElementById("btnCalc").addEventListener('click',(event)=>{
    event.preventDefault();

    const precoUnitario = document.getElementById("preco-unitario").value;
    const quantidade = document.getElementById("quantidade").value;
    const desconto = document.getElementById("desconto").value;

    const vlTotal = precoUnitario * quantidade;

    const vlDesconto = vlTotal * (desconto / 100);

    const resultado = vlTotal - vlDesconto;

    const divResultado = document.getElementById("result");
    
    divResultado.innerHTML = `<h2 class='resultado'> O valor total é: R$${resultado} reais</h2> <img src="https://c.tenor.com/ZdsIbPaZn64AAAAC/tenor.gif"> <img src="https://media1.tenor.com/m/ysZO8j3Ury8AAAAC/smug-emoji.gif"> <img src="https://media.tenor.com/vLopguTNfigAAAAi/nahh-kingsammelot.gif"> <img src="https://media.tenor.com/_Gh3ezRN2P0AAAAi/%D0%BB%D1%8E%D1%82%D1%8B%D0%B9-%D0%BF%D0%BE%D0%BD-%D0%BB%D0%B0%D0%B9%D0%BA.gif"> <img src="https://media.tenor.com/7DeeDs3MME4AAAAi/emoji-shocked.gif"> <img src="https://media.tenor.com/H6udVTK4bEsAAAAj/podliybro.gif">`
    
})