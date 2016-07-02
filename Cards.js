function card(rank, suit){

	this.rank = rank;
	if (rank == 1) {
			this.rank = 'Ace';
		}else if (rank == 11) {
			this.rank = 'Jack';
		}else if (rank == 12) {
			this.rank = 'Queen';
		}else if (rank == 13) {
			this.rank = 'King';
		}else{
			this.rank = rank;
		}

	if (suit == 1) {
			this.suit = 'Hearts';
		}else if (suit == 2) {
			this.suit = 'Clubs';
		}else if (suit == 3) {
			this.suit = 'Diamonds';
		}else if (suit == 4) {
			this.suit = 'Spades';
		}else{
			this.suit = suit;
		}
}

card.prototype.value = function(){
		if(this.rank == 'Ace'){
			return 1;
		}else if (this.rank == 'Jack') {
			return 10;
		}else if (this.rank == 'Queen') {
			return 10;
		}else if (this.rank == 'King') {
			return 10;
		}else{
			return this.rank;
		} 
};

card.prototype.toString = function(){
		return this.rank + ' of '+ this.suit;
};


function deck(){
	var cardArray = [];
	var count = 0;
	for (var i = 1; i < 5; i++) {
		for (var j = 1; j < 14; j++) {
			cardArray.push(new card(j, i));
		};
	};
	return cardArray;
}

Array.prototype.shuffle = function(){

	for(var i=0; i<this.length; i++){
		var randomVar = Math.floor(Math.random() * this.length); 
		    var temp = this[i];
		    this[i] = this[randomVar];
		    this[randomVar] = temp;
	}
	return this;
};

Array.prototype.deal = function(){
	var pickCard = this[0];
	this.shift();
	return pickCard;
};

Array.prototype.remaining = function(){
	return this.length;
};

Array.prototype.reset = function(){
	this.length = 0;
	var newDeck = new deck();
	return newDeck;
};

var myDeck = new deck();
myDeck.shuffle(); 

var hand1 = [];
hand1.push( myDeck.deal() );
hand1.push( myDeck.deal() );
console.log( 'Hand 1: ', ''+hand1[0], ','+hand1[1] );

var hand2 = [];
hand2.push( myDeck.deal() );
hand2.push( myDeck.deal() );
console.log( 'Hand 2: ', ''+hand2[0], ','+hand2[1] );

console.log('The value of Hand 1 is: ', hand1[0].value() + hand1[1].value());
console.log('The value of Hand 2 is: ', hand2[0].value() + hand2[1].value());

console.log('There are ', myDeck.remaining(), ' cards remaining in the deck');
myDeck = myDeck.reset();
console.log('There are ', myDeck.remaining(), ' cards remaining in the deck');

 