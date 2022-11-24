function roll(x,y,z){
	let sides = x;
	let dice = y; 
	let rolls = z; 
	let results = new Array(z);
	for(let i = 0; i < rolls; i++){
		let sum = 0; 
		for(let j = 1; j < dice; j++){
			sum += Math.floor(Math.random() * sides) + 1;
		} 
		results[i] = sum;  
	} 

	return JSON.stringify( {
		"sides: " +  sides,
		"dice: " + dice,
		"rolls: " + rolls,
		"results: " +  all_rolls
	} ); 
}
export {roll};
