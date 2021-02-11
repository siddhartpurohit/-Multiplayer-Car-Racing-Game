class Player {
  constructor()
  {
        this.index = null;
        this.distance = 0;
        this.name = null;
         this.rank =null;
  }
                                        
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }
 
  updateCount(count)
  {
    database.ref('/').update({
    playerCount: count
    });
  }
 
  update(){
    var playerIndex = "players/player" + player.index  ;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance      
    });
  }

static getPlayerInfo ()
{
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
   })
}
  getRank(){
    var rankInfoRef = database.ref('CarsAtEnd')
    rankInfoRef.on("value",(data)=>{
        this.rank = data.val();
    })
  }
  
static updateCarsAtEnd(rank){
      database.ref('/').update({
      CarsAtEnd :rank
      })

      
} 

}