class Player
{
    constructor()
    {
        this.position =
        {
            x:200,
            y:100
        }

        this.velocity =
        {
            x:0,
            y:0,
            jump:0
        }

        this.width = canvas.width/30
        this.height = canvas.height/20
    }

    draw()
    {
        minigame.fillStyle = 'red'
        minigame.fillRect(this.position.x, this.position.y,
            this.width, this.height)
    }

    update()
    {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y -= this.velocity.jump

        // moving U/D block
        if(this.position.y + this.height + this.velocity.y >= canvas.height)
            {
                this.position.y =  canvas.height - this.height
                this.velocity.y = 0
            }

        else if(this.position.y + this.velocity.y < 0) 
        {
            this.position.y = 0
            this.velocity.y = 0
            this.velocity.jump = 0
        }
           
        else
        {
            this.position.y += this.velocity.y  
            this.velocity.y += gravity 
            if(this.velocity.jump - this.velocity.y >= 0) 
            {
                this.velocity.jump -= this.velocity.y
            }
        }
        // moving L/R block

        if(this.position.x + this.velocity.x <= 0)
        {
            this.position.x = 0
        }
        else if(this.position.x + this.velocity.x >= canvas.width - this.width )
        {
            this.position.x = canvas.width - this.width
        }

        
      
    }
}