// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) =>{
  return{
    specimenNum,
    dna,

    mutate(){
      let bases = ['A', 'T', 'C', 'G'];
      let index = Math.floor(Math.random() * this.dna.length);
      bases.splice( bases.indexOf(this.dna[index]), 1 );
      let randBase = Math.floor(Math.random() * 3);
      dna[index] = bases[randBase];
    },

    compareDNA(specimen){
      let totalPairs = this.dna.length;
      let uniqueCount = 0;
      
      for(let i = 0; i < totalPairs; i++){
        //console.log(this.dna[i]);
        //console.log(specimen.dna[i]);
        if(specimen.dna[i] === undefined){
          uniqueCount++;
          break;
        }
        if(this.dna[i] !== specimen.dna[i]){
          uniqueCount++;
        }
      }

      console.log(`Specimen #${this.specimenNum} and specimen #${specimen.specimenNum} have ${(uniqueCount / totalPairs) * 100}% DNA in common`);
    },

    willLikelySurvive(){
      let goodBases = ['G', 'C'];
      let goodCount = 0;
      for(const base of this.dna){
        //console.log(base);
        if(goodBases.includes(base)){
          //console.log(base);
          goodCount++;
        }
      }

      return (goodCount/(this.dna.length)) >= 0.6;
    }
  }
}


let specimens = [];

for(let i = 0; i < 30; i++){
  specimens.push(pAequorFactory(i, mockUpStrand()));
  //console.log(`Specimen #${specimens[i].specimenNum}`);
  //console.log(`Specimen DNA:`);
  //console.log(specimens[i].dna);
  //console.log();
  //specimens[i].mutate();
  //console.log(`Specimen DNA After Mutation:`);
  //console.log(specimens[i].dna);
  //console.log();
  console.log(`Specimen #${specimens[i].specimenNum} is likely to ${specimens[i].willLikelySurvive() ? "live" : "die"}.`);
}


/*
let id = 0;
do{
  specimens.push(pAequorFactory(id, mockUpStrand()));
  console.log(`Specimen #${specimens[id].specimenNum} is likely to ${specimens[id].willLikelySurvive() ? "live" : "die"}.`);
  id++;

}while(!specimens[id - 1].willLikelySurvive());
*/

//specimens[0].compareDNA(specimens[1]);
