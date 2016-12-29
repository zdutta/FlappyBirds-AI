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
	//0-2 because flap can either be decreased with 0-1 or increased with 1-2 
	chromosome.getFinalFlapDistanceDX= function(speed){//altering flap distance
		return this.flapDistanceDX-(this.flapModifier*speed);
	}
	chromosome.getFinalFlapFistanceDY=function(speed){
		return this.flapDistanceDY-(this.flapModifier*speed);
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

function neuralTick(piepDelay,x,y){//game speed and if there is upcoming obstable
	if(d==undefined||d==null){//if no upcoming obstacles
		return;
	}
	simulate(pipeDelay,x,y);//(x,y) coordinate location of bird
}


function simulate(pipeDelay,x,y){
	if(isNearPipe(x,Math.floor(chromosomes[count].getFinalFlapDistanceDX(pipeDelay)))){
		while(y<Math.floor(chromosomes[count].getFinalFlapFistanceDY(pipeDelay))+gap){
			flap();
		}
	}
}

function isNearPipe(birdx,pipex){
	if(birdx>pipex-5){//&&birdx<pipex+20
		true;
	}else{
		return false;
	}
}

function flap(){
	var event = new Event("jump");
	event.keyCode = 32;//keycode for spacebar
	event.witch = event.keycode;
	event.altKey=false;
	event.ctrlKey=false;//true
	event.shiftKey=false;
	event.metaKey=false;
	document.dispatchEvent(event);
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

