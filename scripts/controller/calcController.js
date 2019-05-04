class CalcController{

    // Criando o método construtor
    constructor(){

        this._operation = []
        this._locale = "pt-BR"
        this._currentDate

        this._displayCalcElement = document.querySelector("#display")
        this._dateElement = document.querySelector("#data")
        this._timeElement = document.querySelector("#hora")

        this.initialize()
        this.initButtonsEvents()
        this.setError()
        this.execBtn()

    }

    initialize(){
        
        // Imprime da DOM a data e a hora
        this.setDisplayDateTime()

        setInterval(() => {

            // Atualiza a data e a hora no intervalo de 1s
           this.setDisplayDateTime()

        }, 1000)

    }

    // Método para aplicar multiplos eventos
    // Recebe o elemento, String de evento, classe em forma de valor
    addEventListenerAll(element, events, func){

        // Transforma a String de eventos em um Array e percorre os valores
        // Cria uma função que recebe como argumento
        events.split(' ').forEach((event) => {

            // Adiciona em cada elemento o tipo de evento que foi separado pelo 'split'
            element.addEventListener(event, func, false)

        })

    }

    clearAll(){
        this._operation = []
    }

    clearEntry(){
        this._operation.pop()
    }

    addOperation(value){
        this._operation.push(value)
        console.log(this._operation)
    }

    setError(){
        this.displayCalc = "Error"
    }

    execBtn(value){

        switch(value){
            case 'ac':
                this.clearAll()
            break;

            case 'ce':
                this.clearEntry()
            break;

            case 'soma':

            break;

            case 'subtracao':

            break;

            case 'divisao':

            break;

            case 'multiplicacao':

            break;

            case 'porcento':

            break;

            case 'igual':

            break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
            break;

            default:
                this.setError()
            break;

        }

    }

    // Buttons
    initButtonsEvents(){
        //Recebe todos os elementos
        let buttons = document.querySelectorAll("#buttons > g, #parts > g")

        // Percorre todos os elementos e buscando os parametros
        buttons.forEach((btn) => {
            
            // Adiciona um evento em cada um dos elementos do metodo
            this.addEventListenerAll(btn, "click drag", (e, index) => {

                // Traz somente o nome da classe removento o 'btn-' e deixando apenas no número
                let textBtn = btn.className.baseVal.replace("btn-", "")

                this.execBtn(textBtn)

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", (e) => {
                // Estiliza o cursor do mouse
                btn.style.cursor = "pointer"
            })

        })

    }


    // DateTime
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {

            day: "2-digit",
            month: "long",
            year: "numeric"

        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    // Get - Set Date
    get displayDate(){
        return this._dateElement.innerHTML
    }
    set displayDate(value){
        this._dateElement.innerHTML = value
    }

    // Get - Set Time
    get displayTime(){
        return this._timeElement.innerHTML
    }
    set displayTime(value){
        this._timeElement.innerHTML = value
    }

    // Get - Set Display
    get displayCalc(){
        return this._displayCalcElement.innerHTML
    }
    set displayCalc(value){
        this._displayCalcElement.innerHTML = value
    }

    // Recebe a data atual em formato de milissegundos
    get currentDate(){
        return new Date()
    }
    set currentDate(value){
        this._currentDate = value;
    }
}