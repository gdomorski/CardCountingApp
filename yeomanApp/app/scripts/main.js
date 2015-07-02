// jshint devel:true


function cardCounter(count){

    var rnd = Math.floor(Math.random() * allCards.length);
    
    var allCards = ['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', "AC"];
    var minusOne = ['10C', 'JC', 'QC', 'KC', 'AC'];
    var plusOne = ['1C','2C','3C','4C','5C','6C'];
        
    for(var i = 0; i < arr.length; i++){
        if(plusOne.indexOf(allcards[i]) !== -1){
         count++;
        }else if(minusOne.indexOf(arr[i]) !== -1){
         count--;   
        }
    }
    countText.textContent = 'The Current Count is '+ count;
    showImage();
}


function showImage(randomCard) {


    
    var img = document.createElement("img");
    img.src = 'images/cardimages/' + randomCard + '.png';
    img.width = 250;
    img.height = 363;
    document.body.appendChild(img);
    
}


