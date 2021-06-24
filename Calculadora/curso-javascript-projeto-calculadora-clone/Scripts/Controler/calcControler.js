/*Aqui é onde a classe foi criada, que contem todos os metodos(funções) e todos os atribusto (variaveis)*/

//Parametros sao informações nescessarias para seus metodos e funções funcionarem 

//DOM - Document Obejtc Model (estrutura em que se basea o HTML )  

//EL indica que vc esta manipulando o HTML

//Initilize função que ira se iniciliazar ao inicializar o projeto

//This se refere a um atributo dentro da propria classe  


//innerHTLM indica ao codigo que o objeto que ele esta se referindo vai ser tratado com dados HTML
class CalcControler {

    constructor(){

        //Definição de atributos(variaveis) que serão usados ao decorrer do codigo 

        this._locale = "pt-br";
        this._displayCalcEl = document.querySelector("#display"); 
        this._dateEl = document.querySelector("#data"); 
        this._timeEl = document.querySelector("#hora");  
        this.currenDate; 
        this.initialize(); 
    }

    initialize(){

        //Arrow function que define os segundos rodando que serão apresentados na tela 

        setInterval(()=>{
            
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale); 

        },  1000);    

    }

    /*Liga o JavaScript ao HTml manipulando as informações que são apresentadas na tela. 
    Aqui pegando a hora(get) e mostrando na tela (set)*/

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){ 
        this._timeEl.innerHTML = value; 

    }

    /*Liga o JavaScript ao HTml(inner.HTML) manipulando as informações que são apresentadas na tela. 
    Aqui pegando a data(get) e mostrando na tela (set)*/

    get displayDate(){
      return this._dateEl.innerHTML;

    }

    set displayDate(value){ 
        return this._dateEl.innerHTML = value;

    }

    /*Liga o JavaScript ao HTml(inner.HTML) manipulando as informações que são apresentadas na tela. 
    Aqui pegando o display da calculadora(get) e mostrando na tela o valor inserido  (set)*/

    get displayCalc(){

        return this._displayCalcEl.innerHTML; 
    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;
    }

    /*Liga o JavaScript ao HTml(inner.HTML) manipulando as informações que são apresentadas na tela. 
    Aqui pegando a data atual(get) e mostrando na tela (set)*/

    get currentDate(){
    
        return new Date("pt-br"); 
    }

    set currentDate(value){

        this._currenDate = value;
    }

}
