function createCalc(){
    return {
        display: document.querySelector('#display'),
        
        
        initialize() {
            this.clickMethod();
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        doesEquation(){
            let equation = this.display.value;
            try{
                equation = eval(equation);
                if(!equation){
                    alert('Invalid calculation');
                    return;
                }
                this.display.value = equation;
            }
            catch(e) {
                alert('Invalid calculation');
                return;
            }
        },

        clickMethod() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnToDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eql')){
                    this.doesEquation()
                }
            });
        },

        btnToDisplay(value){
            this.display.value += value;
        },
    };
}

const calculator = createCalc();
calculator.initialize();