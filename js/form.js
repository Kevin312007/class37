class Form{
    constructor(){}
    display(){
       var title=createElement("h2")
       title.html("car racing game")
       title.position(130,0)

       var input=createInput("name")
       var button=createButton("submit")
       var greeting=createElement("h3")
       input.position(130,160)
       button.position(250,200)
       button.mousePressed(function(){
           input.hide()
           button.hide()
           var name=input.value()
           pc=pc+1
           player.update(name)
           player.updateCount(pc)
           greeting.html("welcome "+name)
           greeting.position(130,160)
       })
       
    }
}