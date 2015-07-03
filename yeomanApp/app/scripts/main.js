// jshint devel:true

//list all the possible cards in a 52 yard deck
var allCards = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH'];
var count = 0;

function cardCounter(){


    //find a random number for the index
    var rnd = Math.floor(Math.random() * allCards.length);
    //assign the appropiate cards as minus 1
    var minusOne = ['10C', 'JC', 'QC', 'KC', 'AC', '10S', 'JS', 'QS', 'KS', 'AS', '10D', 'JD', 'QD', 'KD', 'AD', '10H', 'JH', 'QH', 'KH', 'AH'];
    //assign the appropiate cards as plus 1
    var plusOne = ['2C','3C','4C','5C','6C', '2S', '3S', '4S', '5S', '6S', '2D', '3D', '4D', '5D', '6D', '1H', '2H', '3H', '4H', '5H', '6H'];
    
    //get a random card value
    var randomCard = allCards[rnd];    
    
        //if is is plus one, add to the count
        if(plusOne.indexOf(randomCard) !== -1){
         count++;
        //or else if it is negative one, subtract from the count
        }else if(minusOne.indexOf(randomCard) !== -1){
         count--;   
        }
    
    //change the count as text
    if(count === 0){
        countText.textContent = 'The count is ' + count + '.'
    } else if (count > 0){
        countText.textContent = 'The count is +'+ count +'. The table is heating up!';
        if(count > 4){
            countText.textContent = 'The count is an amazing +'+ count + '. Bet BIG money';
        }
    }else{
        countText.textContent = 'The count is '+ count +'. The table is going cold!';
            if(count < -4){
                countText.textContent = 'The count is '+ count + '. Terrible odds! Bet table minimum or leave!';
        }
    }
    //show the image of the card you selected
    showImage(randomCard);
    //take it out of the deck so you don't get the same card twice in a 52 card deck
    allCards.splice(rnd, 1);
    hideIntroBox();
}

function hideIntroBox(){
    introBox.style.display = "none";
    dealerButton.style.display = "block";
    countText.style.display = "block";
    resetGame.style.display = "block";
    buttonstyles.style.display ="block";
}



function showImage(randomCard) {

    //create an image element
    var img = document.createElement("img");
    img.src = 'images/cardimages/' + randomCard + '.png';
    img.width = 125;
    img.height = 181.5;
    //add that image to the page
    document.body.appendChild(img);
    
}


