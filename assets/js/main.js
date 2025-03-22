function createCalc(){
    return {
        display: document.querySelector('#display'),
        btnClear: document.querySelector('.btn-clear'),
        
        
        initialize() {
            this.clickMethod();
        },

        clearDisplay(){
            this.display.value = '';
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
            });
        },

        btnToDisplay(value){
            this.display.value += value;
        },
    };
}

const calculator = createCalc();
calculator.initialize();