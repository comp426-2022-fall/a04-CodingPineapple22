function roll(int sides, int dice, int rolls){
	let all_rolls = [];  
	for(let i = 0; i < rolls; i++){
		let sum = 0; 
		for(let j = 0; j < dice; j++){
			sum += Math.floor(Math.random() * sides) + 1;
		} 
		all_rolls[i] = sum;  
	} 

	return JSON.stringify( {
		"sides: " +  sides,
		"dice: " + dice,
		"rolls: " + rolls,
		"results: " +  all_rolls
	} ); 
}
export {roll};
