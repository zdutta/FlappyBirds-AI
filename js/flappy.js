//population or pool->individual genome->chromosome->gene 
//fitness score assigned to each genome and breeding is done with the fittest
//selection,crossover,mutation
var gap = 250;
var pipWidth = 127;

var max = {
	generation: 1,
	genome: 1,
	fitness: 0,
}

function coordinate(x,y){
	this.x=x,
	this.y=y		
}

function newChromosome(){
	var chromosome = {};
	chromosome.flapDistanceDX = Math.floor(Math.random()*440);
	chromosome.flapDistanceDY = 0;//vertical distance from lower pipe
	chromosome.fitness=0;
	chromosome.realFitness=0;
	chromosome.flapModifier=Math.random()*2;//the constant at which flap parameters are modified
	chromosome.getFinalFlapDistance= function(speed){
		return this.flapDistanceDX-(this.flapModifier*speed);
	}
	return chromosome;
}

var generation = 1;
var chromosomes = [];
var nextGen = [];

const GENOME_PER_GEN = 10;

function makeFirstGeneration(){
	for(var i = 0; i<GENOME_PER_GEN;i++){
		var chrom = newChromosome();
		//chrom.flapDistanceDX = Math.floor(Math.random()*440);
		//chrom.flapModifier = Math.random()*2;
		chromosomes.push(chrom);
	}
}

function neuralTick(piepDelay,dx,dy){//game speed and if there is upcoming obstable
	if(d==undefined||d==null){//if no upcoming obstacles
		return;
	}
	simulate(pipeDelay,dx,dy);
}


function simulate(pipeDelay,dx,dy){
	if(isNearPipe())
}

function flap(){

}

function isNearPipe(){

}

function birdDied(fitness, realFitness){
	if(realFitness>max.fitness){
		max.fitness = realFitness;
		max.generation = generation;
		max.genome = count++;
	}
	chromosome()
}

function sortByDistance(){

}

function compareByDistance(){

}

function killHalf(){

}

function mate(){

}

function getGenAve(){

}


makeFirstGeneration();

