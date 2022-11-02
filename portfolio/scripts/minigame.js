

const canvas = document.querySelector('#minigame')
const minigame = canvas.getContext('2d')

canvas.width =  window.innerWidth
canvas.height = 2* window.innerHeight

const gravity = 1


var platforms = []

const RESPplatform = new Platform(300, 600, "resp")
const PROJECTSplatform = new Platform(900, 800, "projects")
const JOBplatform = new Platform(250, 1150, "job")
const EDUplatform = new Platform(1100, 1400, "edu")
const HOBBYplatform = new Platform(300, 1700, "hobby")



const player = new Player()

platforms.push(EDUplatform)
platforms.push(HOBBYplatform)
platforms.push(JOBplatform)
platforms.push(PROJECTSplatform)
platforms.push(RESPplatform)

const keys =
{
    right_pressed: false,
    left_pressed: false,
    jump_pressed :false
}

console.log(platforms)
function animate()
{
    // player

    requestAnimationFrame(animate)
    minigame.clearRect(0, 0, canvas.width, canvas.height)
    player.update()

    // moving L/R
    if(keys.right_pressed) player.velocity.x = 25
    else if(keys.left_pressed) player.velocity.x = -25
    else player.velocity.x = 0

    // platform
    platforms.forEach((platform) => 

    {
        platform.draw()
        if(check_collision(player, platform))
        {
            player.velocity.y = 0
            console.log(platform.id)
        }
       
    })
   
    
    
}

animate()

window.addEventListener('keydown', ({ keyCode }) => 
{
    switch (keyCode)
    {
        case 65:                    //left
            keys.left_pressed = true
            break
        case 68:                    //right
            keys.right_pressed = true
            break
        case 87:                    //up
            if(player.velocity.jump ==0 & !keys.jump_pressed)
            {
                keys.jump_pressed = true
                player.velocity.jump =  80
                break
            }      
    }
})

window.addEventListener('keyup', ({ keyCode }) => 
{
    switch (keyCode)
    {
        case 65:                    //left
            keys.left_pressed = false
            break
        case 68:                    //right
            keys.right_pressed = false
            break
        case 87:                    //up
            if(keys.jump_pressed)
            {
                keys.jump_pressed = false        
                break
            } 
    }
})


function check_collision(player, platform)
{
    if(player.position.y + player.height >= platform.position.y - player.velocity.y
        & player.position.y + player.height <= platform.position.y + player.velocity.y
            & player.position.x + player.width >= platform.position.x 
                & player.position.x < platform.position.x + platform.width )
                return true
    else return false
}