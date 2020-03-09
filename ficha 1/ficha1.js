function notamedia(nota,nota2){

    var media=0.0;
    media=(nota+nota2)/2;
    console.log(media);
    if (media<9.5){
        console.log("chumbou");
    }else
    {
        console.log("passou");
    }

}
notamedia(10,10);

///////////////////////////////////////////////
function soma(nota1,nota2){
return nota1+nota2;
}

(soma(5,5));

/////////////////////////////

function mes(numeromes){
    var mes={1:"janeiro",2:"fevereiro",3:"março",4:"abril",5:"maio",6:"junho",7:"julho",8:"agosto",9:"setembro",10:"outubro",11:"novembro",12:"dezemrbo"};
    console.log("mes: ",mes[numeromes]);
    ////////////////////////////////////////////////////////////////////////
    if (numeromes==1){
        console.log("janeiro");
    }
    if (numeromes==2){
        console.log("fevereiro");
    }
    if (numeromes==3){
        console.log("março");
    }
    if (numeromes==4){
        console.log("abril");
    }
    if (numeromes==5){
        console.log("maio");
    }
    if (numeromes==6){
        console.log("junho");
    }
    if (numeromes==7){
        console.log("julho");
    }
    if (numeromes==8){
        console.log("agosto");
    }
    if (numeromes==9){
        console.log("setembro");
    }
    if (numeromes==10){
        console.log("outubro");
    }
    if (numeromes==11){
        console.log("novembro");
    }
    if (numeromes==12){
        console.log("dezemrbo");
    }
return;
}
mes(1);
////////////////////////////////////////////
function somanum(){
    var soma=0;
    for (i=0; i<100 ;i++){

        soma+=i;
    }

console.log("soma: ",soma);
}
somanum();

/////////////////////////////////////////////////
function fact(factnum){
    soma=1;
    for (i=1;i<factnum;i++){
       soma+=i*soma;

    }
    console.log(soma);
}
fact(5);

///////////////////////////////////////////////
function calcula(num1,num2,num3){

    var  media;
    var maximo=0;
    var minimo=0;
    
    if (num1>num2 && num1>num3){
        maximo=num1;
    }

    if (num2>num1 && num2>num3){
        maximo=num2;
    }
    if (num3>num1 && num3>num2){
        maximo=num3;
    }

       
    if (num1<num2 && num1<num3){
        minimo=num1;
    }

    if (num2<num1 && num2<num3){
        minimo=num2;
    }
    if (num3<num1 && num3<num2){
        minimo=num3;
    }

    media=(num1+num2+num3)/3;
    console.log("media: ",media);
    console.log("max: ",maximo);
    console.log("min: ",minimo);
}
calcula(1,3,5);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Quem e voce?', name => {
    console.log(`Ola:  ${name}!`);
    readline.close();
  });

