function biggerDecorations(){

    var text=document.getElementById("text");
    var currentFontSize=parseFloat(window.getComputedStyle(text, null).getPropertyValue('font-size'));
    console.log(currentFontSize);

    currentFontSize=currentFontSize+2;
    text.style.fontSize =   currentFontSize+ 'pt';;
    setInterval(biggerDecorations, 500)
}

function bling(){
    var text=document.getElementById("text");
    if (document.getElementById('bling').checked) {            
        text.style.textDecoration = "underline"
        text.style.color = "green";
        document.body.style.backgroundImage = "url('https://smuckersales.com/wp-content/uploads/2016/06/Body-Background-1.jpg')";
    } 
    
    else {
        text.style.color = "black";
        text.style.textDecoration = "none"
        document.body.style.backgroundImage = "none";
    }
}

function gpayAtinlay(){

    let vowels = /[aeiou]/gi;

    var text=document.getElementById("text").value;

    var array = text.split(' ');

    for(let i=0;i<array.length;i++){
        if(array[i].charAt().match(vowels)){
            array[i]+="-ay";
        }
    }
    let result= "";

    for(let i=0;i<array.length;i++){
        result+=array[i]+" ";
    }

    document.getElementById("text").value=result;

}

function malkovitch(){

    var text=document.getElementById("text").value;

    var array = text.split(' ');

    for(let i=0;i<array.length;i++){

        if(array[i].length>=5){

            array[i]="Malkovitch";
        }

    }
    let result= "";

    for(let i=0;i<array.length;i++){

        result+=array[i]+" ";
        
    }

    document.getElementById("text").value=result;
}