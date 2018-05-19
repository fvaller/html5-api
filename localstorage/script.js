/*
Exemplos:
- window.localStorage - dados com nenhuma data de expiração
- window.sessionStorage - armazena dados para uma sessão (os dados são perdidos quando a aba do navegador é fechado)
*/

//Verifica se o navegador tem suporte ao localstorage	
function verificarSuporteLS() {		
	if (typeof(Storage) !== "undefined") {	    	   
	    document.write("Esse navegador TEM SUPORTE ao localstorage");
	} else {			   
	    document.write("Esse navegador TEM SUPORTE ao localstorage");
	}
}

//Grava os dados 
/*
	Os pares nome / valor são sempre armazenados como strings
	Lembre-se de convertê-los para outro formato quando for necessário!
*/
function gravarDados (nome, email) {
		
	localStorage.nome = nome;
	localStorage.email = email;
	document.write("Dados gravados!") ;	
}

//Recuperar os dados
function obterDados () {	

	//document.writeln("Nome: " + localStorage.getItem("nome"));
	document.writeln("Nome: " + localStorage.nome);
	document.writeln("Email: " + localStorage.email);
}

//Remove dados
function removerDados () {
	localStorage.removeItem("nome");
}


//Verificar se clickconunt existe caso nao exista atribui o valor de 1	
function countAccess () {
	
	if (localStorage.clickcount) {
	    localStorage.clickcount = Number(localStorage.clickcount) + 1;
	} else {
	    localStorage.clickcount = 1;
	}
	document.write("Acessos: " + localStorage.clickcount);
}

/*
	O objecto sessionStorage é igual ao objeto localStorage, 
	excepto que ele armazena os dados para apenas uma sessão. 
	Os dados são apagados quando o usuário fecha a aba específica do navegador.
*/
function countAccessSession () {
	
	if (sessionStorage.clickcount) {
	    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
	} else {
	    sessionStorage.clickcount = 1;
	}

	document.write("Acessos: " + sessionStorage.clickcount);
}