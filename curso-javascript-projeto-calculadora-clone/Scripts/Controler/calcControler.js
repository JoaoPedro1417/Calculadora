/*Aqui é onde a classe foi criada, que contem todos os metodos(funções) e todos os atribusto (variaveis)*/

//Parametros sao informações nescessarias para seus metodos e funções funcionarem 

//DOM - Document Obejtc Model (estrutura em que se basea o HTML )  

//EL indica que vc esta manipulando o HTML

//Initilize função que ira se iniciliazar ao inicializar o projeto

//This se refere a um atributo dentro da propria classe  

//innerHTLM indica ao codigo que o objeto que ele esta se referindo vai ser tratado com dados HTML

//Arrow function que define os segundos rodando que serão apresentados na tela 
class CalcControler {

    constructor(){

        //Definição de atributos(variaveis) que serão usados ao decorrer do codigo 
        this._operation = []; 
        this._locale = "pt-br";
        this._displayCalcEl = document.querySelector("#display"); 
        this._dateEl = document.querySelector("#data"); 
        this._timeEl = document.querySelector("#hora");  
        this.initialize(); 
        this.initButtonsEvents();
    }

    //uso do metodo criado para data e hora
    initialize(){

        this.setdisplayTimeDate(); 

        setInterval(()=>{
           
            this.setdisplayTimeDate(); 

        },  1000);    

    }

    //Eventos que serão realizados ao clique do usuario 

    /*Split define o metodo de separação a ser usado, nesse caso o split esta associado ao parametro events, que define o espaço 
    como separação para os diversos eventos envolvidos*/

    addEventListenerAll(element, events, fn){

        events.split(" ").forEach(event =>{

            element.addEventListener(event, fn, false);
        }); 

    }


    //Retorna a array vazia sem as informações que foram digitadas
    clearAll(){

        this._operation = []; 

    }

    //Pop retira a ultima informação digitada no array 
    clearEntry(){

        this._operation.pop();  
      
    }

    addOp(value){

        this._operation.push(value); 

        console.log(this._operation); 
    }


    execBtn(value) {

        switch (value) {
            
            case "ac": this.clearAll(); break;  
            
            case "ce": this.clearEntry (); break; 
      
            case "soma": ; break; 
            
            case "subtracao": ; break; 
                
            case "multiplicacao":; break;

            case "divisao":; break; 
           
            case "porcento": ; break; 
            
            case "igual": ; break;

            case "ponto": ; break;

            case "0":
            case "1":
            case "2":
            case "3": 
            case "4": 
            case "5":
            case "6": 
            case "7":
            case "8": 
            case "9":
                this.addOp(parseInt(value)); break; 

             break; 

        }

        }




    initButtonsEvents(){

        /*Esta sendo usado o DOM, para selecionar as camadas dos botões e das partes e seus respectivos filhos para inserir nelas o metodo
        criado para definir os eventos*/

       let buttons = document.querySelectorAll("#buttons > g, #parts > g");
       
       buttons.forEach((btn, index) =>{

        this.addEventListenerAll(btn, "click drag ", e => {

            let txtBtn = btn.className.baseVal.replace("btn-", "");

            this.execBtn(txtBtn); 

        }); 

        this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{

            btn.style.cursor = "pointer";

        }); 

    });
    
        }
       
    /*Liga o JavaScript ao HTml manipulando as informações que são apresentadas na tela. 
    Aqui pegando a hora(get) e mostrando na tela (set)*/

    //criação do metodo para atualizar a hora e mostrar a data constantemente 
    setdisplayTimeDate (){

        var data = new Date();
        var hora = new Date(); 
        this.displayDate = hora.toLocaleDateString(this._locale);
        this.displayTime = data.toLocaleTimeString(this._locale);
    }



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

}
