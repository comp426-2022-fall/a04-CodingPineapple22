export function roll(x,y,z){
	let sides = x;
	let dice = y; 
	let rolls = z; 
	let results = new Array(z);
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
