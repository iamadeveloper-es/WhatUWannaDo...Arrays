
let c, arrStr, arrPrepend, state, output, outputExplanation, inptPush, inptUnshift, inptSpliceIndex, inptSpliceDel, inptSpliceEl, btnPush, btnPop, btnUnshift, btnShift, btnSplice

c = console.log;
arrStr = ['one', 'two', 'three', 'four'];
arrPrepend = 'arr = [ <span class="resultado__output">'
state = false;
output = document.querySelector('.output');
outputExplanation = document.querySelector('.explanation');
inptPush = document.querySelector('#inpt-push');
inptUnshift = document.querySelector('#inpt-unshift');
inptSpliceIndex = document.querySelector('#inpt-splice-index');
inptSpliceDel = document.querySelector('#inpt-splice-del');
inptSpliceEl = document.querySelector('#inpt-splice-el');
btnPush = document.querySelector('.btn-result');
btnPop = document.querySelector('.btn-pop');
btnUnshift = document.querySelector('.btn-unshift');
btnShift = document.querySelector('.btn-shift');
btnSplice = document.querySelector('.btn-splice');


btnPush.addEventListener('click', function(){
    arrPush(arrStr, inptPush)
});

btnPop.addEventListener('click', function(){
    return arrPop(arrStr);
});

btnUnshift.addEventListener('click', function(e){
    e.preventDefault();
    arrUnshift(arrStr, inptUnshift)
});
btnShift.addEventListener('click', function(){
    arrShift(arrStr);
});

btnSplice.addEventListener('click', function(){
    arrSplice(arrStr, parseInt(inptSpliceIndex.value), parseInt(inptSpliceDel.value), inptSpliceEl.value)
    
});




const getInptValue = (nodo) => {
    let nodoValue = nodo.value;
    if(nodoValue){
       return nodoValue;  
    }
    
};

const getParamsValue = (param1, param2, param3) => {
    let param1Value = param1.value;
    let param2Value = param2Value += param2.value;
    let param3Value = param3.value;
    if(param1Value){
        return param1Value, param2Value, param3Value
    }
};

const arrPush = (arr, input) => {
    state = false;
    if(input.value){
        state = true;
        arr.push(getInptValue(inptPush))
        c(arr);
        OutputMssgs('Añadir', 'Principio');
        inptPush.value = ''
    }
    else{
        OutputMssgs();
        return false;
    }
}

const arrPop = (arr) => {
    state = true;
    arr.pop();
    OutputMssgs('Eliminar', 'Final');
    console.log(arr)
}

const arrUnshift = (arr, input) => {
    state = false;
    if(input.value){
        state = true;
        arr.unshift(getInptValue(inptUnshift));
        OutputMssgs('Añadir', 'Principio');
        console.log(arr);
        input.value = '';
        return arr;
    }
    else{
        OutputMssgs();
        c('error')
    }
    
}
const arrShift = (arr) => {
    state = true;
    arr.shift();
    OutputMssgs('Eliminar', 'Principio');
    c(arr)
}

const arrSplice = (arr, index, del, element) => {
    arr.splice(index, del, element);
    c(arr);
}
/* arrStr.splice(0, 1, 2);*/
c(arrStr) 

const OutputMssgs = (accion, position) => {
    let longitud = arrStr.length
    if(state){
        output.innerHTML = `Tu nuevo Array es: ${arrPrepend} ${arrStr}</span>
        ] , y tiene ${longitud} índices`;
        outputExplanation.innerHTML = `Acabas de <span class="result__underline">${accion}</span>
         un elemento al <span class="result__underline">${position}</span> del Array`;
        outputExplanation.classList.add('success');
        outputExplanation.classList.remove('warning');
    }
    else{
        outputExplanation.innerHTML = 'Debes introducir un valor';
        outputExplanation.classList.add('warning');
        return false;
    }
    
}
