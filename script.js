 const visor = document.querySelector('.visor');
    const buttons = document.querySelectorAll('.containerNum button')

    buttons.forEach(button =>{
        button.addEventListener('click', ()=>{
            visor.classList.remove('visorErro');
            button.classList.add('touchBtn');
            setTimeout(() => {
            button.classList.remove('touchBtn');
        }, 100);
            const textButton = button.innerText;

            if(textButton==='AC'){
                visor.innerText = '0'
                return;
            }
            if(textButton==='<'){
                if(visor.innerText.length > 1){
                   visor.innerText = visor.innerText.slice(0, -1);
                }
                else{
                    visor.innerText = '0'
                }
                return;
            }
            if(textButton==='♦'){
                const ocult = document.querySelector('.specialButtons');
                ocult.classList.toggle('visivel');
                return;
            }
            if(visor.innerText==='NaN'||visor.innerText==='undefined'){
                    visor.innerText = "Erro"
                    visor.classList.add('visorErro')}
                       if(textButton==='='){
                try{
                    let expression = visor.innerText;
                    
                    if (expression.includes('^')) {
                        const partes = expression.split('^'); 
                        const base = parseFloat(partes[0]);     
                        const expoente = parseFloat(partes[1]); 
                        expression = Math.pow(base, expoente);  
                    }
                    expression = expression.toString().replace(/&times;/g, '*').replace(/×/g, '*');
                    expression = expression.toString().replace(/&divide;/g, '/').replace(/÷/g, '/');
                    
                    let resultado = eval(expression);
                    visor.innerText = resultado;

                    if (isNaN(resultado) || visor.innerText === 'NaN' || visor.innerText === 'undefined') {
                        visor.innerText = "Erro";
                        visor.classList.add('visorErro');
                    }
                     
                } catch(error){
                    visor.innerText = 'Erro';
                    visor.classList.add('visorErro');
                    return;
                }
                return;
            }

            if(textButton==='.'){
                const numBlock = visor.innerText.split(/[\+\-×÷\%]/)
                const actualNum = numBlock[numBlock.length - 1];
                if(!actualNum.includes('.')){
                    visor.innerText+= textButton;
                }
                return;
            }
            else if(visor.innerText==='0' || visor.innerText==='Erro'){
                visor.innerText = textButton;
            }
            else{
                visor.innerText += textButton;
            }
           
        });
    });
    const specialBtns = document.querySelectorAll('.specialButtons button');
        specialBtns.forEach(button => {
        button.addEventListener('click', ()=>{
           const textButton = button.innerHTML;
           button.classList.add('touchBtn');
            setTimeout(() => {
            button.classList.remove('touchBtn');
        }, 100);

            if(textButton==='√' || textButton===`X<sup>y</sup>`){
                const numBlock = visor.innerHTML.split(/[\+\-×÷\%]/);
                const actualNum = numBlock[numBlock.length - 1];

                if(textButton===`√`){
                    let number = parseFloat(actualNum);
                    let raiz = Math.sqrt(number);
                    visor.innerText = visor.innerText.slice(0, -actualNum.length) + raiz;
                    return;
                }
                if(textButton===`X<sup>y</sup>`){
                    if (visor.innerText !== '0' && visor.innerText !== 'Erro') {
            visor.innerText += '^';
        }
        return;
    }
            }
        });
     });
