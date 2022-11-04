class Platform
{
    constructor(x, y, id)
    {
        this.position =
        {
            x:x,
            y:y
            
        }
        this.width = canvas.width / 3
        this.height = canvas.height / 20
        this.id = id
    }

    draw()
    {
        minigame.fillStyle = 'blue'
        minigame.fillRect(this.position.x, this.position.y,
            this.width, this.height)
    }
}