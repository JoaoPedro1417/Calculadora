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

    //Adiciona mensagem de erro caso nenhuma das opções da calculadora seja digitada
    

    //Adiciona uma operação quando for clicada pelo usuario
    //Metodo push adiciona uma informção ao final da array, nesse caso ira adicioar a operção a ultima coisa digitada
    getLastOp(){

            return this._operation[this._operation.length-1]; 


    }

    isOp(value){

        return (["+", "-", "*", "%", "/"].indexOf(value) > -1);

    }

    setlastOp(){

        this._operation[this._operation.length - 1] = value;

    }

    pushOp(value){

        this._operation.push(value);

        if (this._operation.length > 3) {
          
            this.calc();  

        }

    }

    calc(){

        let last = this._operation.pop(); 

        let result = evaL (this._operation.join(""))

        this._operation = [result, last]; 

    }

    setLastNumberToDisplay(){

        let lastnumber; 

        for(let i=this._operation.length-1; i>=0; i--)

        if (this.isOp(this._operation[i])){

            lastnumber = this._operation[i];
            break; 

        }

        this.displayCalc = lastnumber; 

    }

    addOp(value){
    //metodo para validação de informação, se for um outro numero ira concatenar e se for sinal ira realizar a operação
        
    
            if (isNaN(this.getLastOp())){
            
            if(this.isOp(value)){

                this.setlastOp(value); 

            }else if(isNaN(value)) {


            }else {
                
                this.pushOp(value);

            }
            
            }else{

            if (this.isOp(value)){

                this.pushOp(value); 
            
            }else{

              let newvalue = this.getLastOp().toString() + value.toString(); 
              this.setlastOp(parseInt(newvalue)); 

              this.setLastNumberToDisplay

            }

            }

    }

    //Retorna a array vazia sem as informações que foram digitadas
    clearAll(){

        this._operation = []; 

    }

    //Pop retira a ultima informação digitada no array 
    clearEntry(){

        this._operation.pop(value);  
      
    }

    execBtn(value) {

        switch (value) {
            
            case "ac": this.clearAll(); break;  
            
            case "ce": this.calcelEntry (); break; 
      
            case "soma": this.addOp("+"); break; 
            
            case "subtracao": this.addOp("-"); break; 
                
            case "multiplicacao": this.addOp("*"); break;

            case "divisao": this.addOp("/"); break; 
           
            case "porcento": this.addOp("%"); break; 
            
            case "igual": this.addOp(); break;

            case "ponto": this.addOp("."); break;

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

            default:  break; 

        }

        }
    initButtonsEvents(){

        /*Esta sendo usado o DOM, para selecionar as camadas dos botões e das partes e seus respectivos filhos para inserir nelas o metodo
        criado para definir os eventos*/

       let buttons = document.querySelectorAll("#buttons > g, #parts > g");
       
       buttons.forEach((btn, index) =>{

        this.addEventListenerAll(btn, "click drag ", e => {

            console.log(btn.className.baseVal.replace("btn-",""));

            let txtBtn = btn.className.baseVal.replace("btn-", "");

            this.execBtn(); 

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
