class Game{
    constructor(){

    }
    getState(){
      db.ref('gameState').on("value",function(data){
          gs=data.val()
      })
    }
    update(state){
     db.ref("/").update({
         gameState:state
     })

    }
    start(){
      if(gs===0){
          player=new Player()
          player.getCount()
          form=new Form()
          form.display()
      }   
    }
}