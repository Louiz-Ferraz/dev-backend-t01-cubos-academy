{
    const idade = 26; /*Variável criada em escopo superior, funciona dentro do escopo abaixo. 
                    Uma variável sempre funciona dentro de outra de escopo inferior (dentro do de declaração)*/
    {
        console.log(idade);
        let nome = "Luiz";
    }
    //console.log(nome); //Não funciona pois variável foi criada em escopo interior
}
//console.log(idade); //Não funciona pois variável foi criada em escopo interior