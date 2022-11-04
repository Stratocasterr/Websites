const minigame_clouds = document.querySelector('#minigame_clouds')
var pop_content = document.querySelectorAll('.pop_content')
const canvas = document.querySelector('#minigame')
const minigame = canvas.getContext('2d')

canvas.width =  window.innerWidth
canvas.height = 2* window.innerHeight

var platforms = []
const RESPplatform = new Platform(190, 600, "resp")
const PROJECTSplatform = new Platform(1000, 800, "projects")
const JOBplatform = new Platform(250, 1150, "job")
const EDUplatform = new Platform(1100, 1400, "edu")
const HOBBYplatform = new Platform(300, 1700, "hobby")

platforms.push(RESPplatform)
platforms.push(PROJECTSplatform)
platforms.push(JOBplatform)
platforms.push(EDUplatform)
platforms.push(HOBBYplatform)

var gravity = 0.5
const player = new Player()
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
animate()

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
        //platform.draw()
        if(check_collision(player, platform))
        {
            // stop player
            collision = true
            player.velocity.y = 0
            var collide_platform_content = document.querySelector('#' + platform.id+'')
            $(collide_platform_content).css('opacity','1')
            $(collide_platform_content).css('height','500px')

            // collide content background clouds
            const content_background_clouds = minigame_clouds.querySelectorAll('#' + platform.id+'')
            $(content_background_clouds[0]).css('transform','translate(150px, 150px)')
            $(content_background_clouds[1]).css('transform','translate(-100px, 150px)')

            // ball effect
            $(content_background_clouds[2]).css('animation','ball_effect 0.4s ease-in ')

           
           
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
        // hide background
        platforms.forEach(platform =>
            {
                const content_background_clouds = minigame_clouds.querySelectorAll('#' + platform.id+'')
                $(content_background_clouds[0]).css('transform','none')
                $(content_background_clouds[1]).css('transform','none')
                $(content_background_clouds[2]).css('animation','none')
            })

        // hide content
        pop_content.forEach(content => {$(content).css('opacity','0')})
        pop_content.forEach(content => {$(content).css('height','0')})
    }
}

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
        case 83:                    //hide minigame instru
            {
                if(window.scrollY > 1100)
                {
                    $(minigame_content).css('opacity','1')
                    $(minigame_canvas).css('opacity','1')
                    $(minigame_overlay).css('opacity','0')
                    $(minigame_instru).css('opacity','0')
                    start_minigame = true
                }
               
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

function create_minigame_clouds(platforms_cords, platforms)
{
    var cloud = ''
    var clouds = ''
    var signs = ''
    for(i=0 ; i < platforms_cords.length ; i++)
    {
        var sign_style = `
            top:`+platforms_cords[i][1] +`px;
            left:`+platforms_cords[i][0] +`px;
            
        `
        var cloud_style = `
            top:`+platforms_cords[i][1] +`px;
            left:`+platforms_cords[i][0] +`px;
        `
        cloud =   `
            <img id = ` + platforms[i].id + ` 
            class="background-clouds" 
            style = "`+ cloud_style +`" 
            src ="giffs/clouds1.gif"/>
        `    
        signs += `
            <img id = "sign_` + platforms[i].id + `" 
            class="sign" 
            style = "`+ sign_style +`" 
            src ="images/sign2.png"/>
        `
        clouds += cloud + cloud + cloud
    }
    minigame_clouds.innerHTML = clouds 
    console.log(minigame_clouds.innerHTML)
}

