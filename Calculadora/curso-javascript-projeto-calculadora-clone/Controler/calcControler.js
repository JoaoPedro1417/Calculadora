/*Aqui é onde a classe foi criada, que contem todos os metodos(funções) e todos os atribusto (variaveis)*/

//Parametros sao informações nescessarias para seus metodos e funções funcionarem 

//DOM - Document Obejtc Model (estrutura em que se basea o HTML )  

//EL indica que vc esta manipulando o HTML

//Initilize função que ira se iniciliazar ao inicializar o projeto

//This se refere a um atributo dentro da propria classe  


//innerHTLM indica ao codigo que o objeto que ele esta se referindo vai ser tratado com dados HTML
class CalcControler {

    constructor(){

        this._displayCalc = "0"; 
        this.currenDate; 
        this.initialize(); 
    }

    initialize(){

        let displayCalcEl = document.querySelector("#display"); 
        let dateEl = document.querySelector("#data"); 
        let timeEl = document.querySelector("#hora"); 

        displayCalcEl.innerHTML = "4,5,6,7"

    }

    get displayCalc(){

        return this._displayCalc; 
    }

    set displayCalc(valor){

        this._displayCalc = valor;
    }

    get currentDate(){
    
        return this.currenDate; 
    }

    set currentDate(data){

        this._currenDate = data;
    }

}
