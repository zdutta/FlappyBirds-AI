//population or pool->individual genome->chromosome->gene 
//fitness score assigned to each genome and breeding is done with the fittest
//selection,crossover,mutation
var button = "tap";//check for exact term 

//figure out how to connect to index.js in order to access variables 
var pipeWidth = pipe.x;
var topPipeLength=pipe2.y;
var bottomPipeLength=pipe.y;

var Outputs = buttons;
//how to make sure to account for separate pipe lengths?
var topInputSize = pipeWidth * topPipeLength;
var bottomInputSize = pipeWidth * bottomPipeLength;
var Inputs = topInputSize + bottomInputSize; //+1??? 


var Population = 300;
var DeltaDisjoint = 2.0;
var DeltaWeights = 0.4;
var DeltaThreshold = 1.0;

var StaleSpecies = 15;

var MutateConnectionsChance = 0.25;
var PerturbChance = 0.90;
var CrossoverChance = 0.75;
var LinkMutationChance = 2.0;
var NodeMutationChance = 0.50;
var BiasMutationChance = 0.40;
var StepSize = 0.1;
var DisableMutationChance = 0.4;
var EnableMutationChance = 0.2;

var TimeoutConstant = 20;

var MaxNodes = 1000000;

function getPostions(){

}

function getTile(){

}

function getSprites(){

}

function getExtendedSprites(){

}

function getInputs(){
	
}

function sigmoid(x){
	return 2/(1+math.exp(-4.9*x))-1;
}

function newInnovation(){
	pool.innovation = pool.innovation + 1;
	return pool.innovation;
}

//Output should be whatever results the AI action is outputting. ie.tap
//current frame or current pixel?
function newPool(){
	var pool = {};
	pool.species = {};
	pool.generation = 0;
	pool.innovation = Outputs;
	pool.currentSpecies = 1;
	pool.currentGenome = 1;
	pool.currentFrame = 0;
	pool.maxFitness = 0;
	return pool;
} 

function newSpecies(){
	var species = {};
	species.topFitness = 0;
	species.staleness = 0;
	species.genomes = {};
	species.averageFitness = 0;
	return species;
}

function newGenome(){
	var genome={};
	genome.genes={};
	genome.fitness=0;
	genome.adjustedFitness=0;
	genome.network={};
	genome.maxneuron=0;
	genome.globalRank=0;
	genome.mutationRates={};
	genome.mutationRates['connections']=MutateConnectionsChance;
	genome.mutationRates['link']=LinkMutationChance;
	genome.mutationRates['node']=NodeMutationChance;
	genome.mutationRates['enable']=EnableMutationChance;
	genome.mutationRates['disable']=DisableMutationChance;
	genome.mutationRates['step']=StepSize;
	return genome;
}

function copyGenome(genome){
	var genome2 = newGenome();
	for( var x in genome.genes){
	    genome2.genes[x] = genome.genes[x];
	}
	genome2.mutationRates['connections'] = genome.mutationRates['connections'];
	genome2.mutationRates['link'] = genome.mutationRates['link'];
	genome2.mutationRates['node'] = genome.mutationRates['node'];
	genome2.mutationRates['enable'] = genome.mutationRates['enable'];
	genome2.mutationRates['disable'] = genome.mutationRates['disable'];
	genome2.mutationRates['step'] = genome.mutationRates['step'];
	return genome2;
}

//inputs should be changed to whatever variable that takes in the input of the stage ie.pipe 
function basicGenome(){
	var genome = newGenome();
	var innovation = 1;
	genome.maxneuron = Inputs;
	mutate(genome);//complete mutate function and check how to call void function in js
	return genome;
}

function neGene(){
	var gene={};
	gene.into = 0;
	gene.out = 0;
	gene.weight = 0.0;
	gene.enabled = true;
	gene.innovation = 0;
	return gene;
}

function copyGene(gene){
	var gene2 = newGene();
	gene2.into = gene.into;
	gene2.out = gene.out;
	gene2.weight = gene.weight;
	gene2.enabled = gene.enabled;
	gene2.innovation = gene.innovation;
	return gene2;
}

function newNeuron(){
	var neuron = {};
	neuron.incoming={};
	neuron.value=0.0;
	return neuron;
}

