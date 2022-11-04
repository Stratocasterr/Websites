const minigame_clouds = document.querySelector('#minigame_clouds')
var pop_content = document.querySelectorAll('.pop_content')
const canvas = document.querySelector('#minigame')
const minigame = canvas.getContext('2d')

canvas.width =  window.innerWidth
canvas.height = 2* window.innerHeight

var gravity = 0.5


var platforms = []


const RESPplatform = new Platform(190, 600, "resp")
const PROJECTSplatform = new Platform(1000, 800, "projects")
const JOBplatform = new Platform(250, 1150, "job")
const EDUplatform = new Platform(1100, 1400, "edu")
const HOBBYplatform = new Platform(300, 1700, "hobby")



const player = new Player()

platforms.push(RESPplatform)
platforms.push(PROJECTSplatform)
platforms.push(JOBplatform)
platforms.push(EDUplatform)
platforms.push(HOBBYplatform)




const keys =
{
    right_pressed: false,
    left_pressed: false,
    jump_pressed:false
}

// get platforms cords
var platforms_cords = []
platforms.forEach(platform =>
    {
        platforms_cords.push([platform.position.x, platform.position.y])
        
    })


create_minigame_clouds(platforms_cords, platforms)

function animate()
{
    requestAnimationFrame(animate)
    minigame.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    
    // moving L/R

    if(keys.right_pressed) player.velocity.x = 15
    else if(keys.left_pressed) player.velocity.x = -15
    else player.velocity.x = 0

    // platform
    collision = false
    platforms.forEach((platform) => 
    {
        platform.draw()
        if(check_collision(player, platform))
        {
            collision = true
            player.velocity.y = 0
            var collide_platform = document.querySelector('#' + platform.id+'')
            $(collide_platform).css('opacity','1')
           
            var new_pop_content = []
            pop_content.forEach(content => 
                {
                    if(content.id != platform.id) new_pop_content.push(content)
                })
            new_pop_content.forEach(content => {$(content).css('opacity','0')})
        } 
    })

    if(!collision) 
    {
        pop_content.forEach(content => {$(content).css('opacity','0')})
    }
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
            if(keys.jump_pressed == false)
            {
                keys.jump_pressed = true
                player.velocity.jump = 25
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
            if(keys.jump_pressed == true)
            {
                keys.jump_pressed = false
                break
            }
    }
})


function check_collision(player, platform)
{
    if(player.position.y + player.height >= platform.position.y - player.velocity.y - gravity
        & player.position.y + player.height <= platform.position.y 
            & player.position.x + player.width >= platform.position.x 
                & player.position.x <= platform.position.x + platform.width )
                return platform
    else return false
}

console.log(platforms_cords)
function create_minigame_clouds(platforms_cords, platforms)
{
    var clouds = ''
    for(i=0 ; i < platforms_cords.length ; i++)
    {

        var cloud_style = `
            top:`+platforms_cords[i][1] +`px;
            left:`+platforms_cords[i][0] +`px;
        `
        clouds +=   `
            <img id = ` + platforms[i].id + ` 
            class="background-clouds" 
            style = "`+ cloud_style +`" 
            src ="giffs/clouds1.gif"/>
        `
          
    
    }
    console.log(clouds)
    minigame_clouds.innerHTML = clouds
}

