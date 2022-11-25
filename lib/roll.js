export function roll(sides, dice, rolls){
	var results = [];
	for(let i = 0; i < rolls; i++){
		results[i] = dice *( Math.floor(Math.random() * sides) +1); 
	} 

	return JSON.stringify( {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": results
	} ); 
}
