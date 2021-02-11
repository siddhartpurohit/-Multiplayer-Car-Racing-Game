class Form{
    constructor()
    {
        this.input = createInput("Name");
        this.button = createButton('Play')
        this.greeting = createElement('h2');
        this.reset = createButton('RESET');
    }
      
    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display()
    {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2+300,200);

        
        this.input.position(displayWidth/2+300,displayHeight/2);
          
    
        this.button.position(displayWidth/2+300,displayHeight/2+50);
        this.reset.position(displayWidth+150,130);
        
        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(600,350);
  
        });
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
    }
    
}