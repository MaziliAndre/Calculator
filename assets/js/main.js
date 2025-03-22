function Calc(display){
    this.display = display;

    this.initialize = function(){
        clickMethod();
    }

    const btnToDisplay = function(value){
        this.display.value += value;
    }
    const clearDisplay = function(){
        this.display.value = '';
    }
    const deleteOne = function(){
        this.display.value = this.display.value.slice(0, -1);
    }
    const doesEquation = function(){
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
    }
    const clickMethod = function(){
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')){
                btnToDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')){
                clearDisplay();
            }
            if(el.classList.contains('btn-del')){
                deleteOne();
            }
            if(el.classList.contains('btn-eql')){
                doesEquation()
            }
        });
    }
}

const calculator = new Calc(document.querySelector('#display'));
calculator.initialize();