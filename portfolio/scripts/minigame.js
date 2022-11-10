const minigame_clouds = document.querySelector('#minigame_clouds')
var pop_content = document.querySelectorAll('.pop_content')
const canvas = document.querySelector('#minigame')
const minigame = canvas.getContext('2d')

canvas.width =  window.innerWidth
canvas.height = 2* window.innerHeight

var platforms = []
const RESPplatform = new Platform(190, 600, "About_me")
const PROJECTSplatform = new Platform(1000, 800, "My_projects")
const JOBplatform = new Platform(250, 1150, "My_experience")
const EDUplatform = new Platform(1100, 1400, "My_education")
const HOBBYplatform = new Platform(300, 1700, "My_interests")

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

    const headers = minigame_clouds.querySelectorAll('.cloud_header')
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
            $(collide_platform_content).css('min-height','500px')

            // collide content background clouds
            const content_background_clouds = minigame_clouds.querySelectorAll('#' + platform.id+'')
            $(content_background_clouds[0]).css('transform','translate(150px, 150px)')
            $(content_background_clouds[1]).css('transform','translate(-100px, 150px)')

            // ball effect
            $(content_background_clouds[2]).css('animation','ball_effect 0.4s ease-in ')

            // hide clouds headers
            
            headers.forEach(header => {if(header.id == platform.id) 
                                            $(header).css('opacity','0')})
            var new_pop_content = []
            pop_content.forEach(content => 
                {
                    if(content.id != platform.id) new_pop_content.push(content)
                })
            new_pop_content.forEach(content => {$(content).css('opacity','0')})

            // education platform staff 
            if(platform.id == "My_education") 
            {
                const images = document.querySelector("#My_education").querySelectorAll(img)
            }
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

        // show clouds headers
        headers.forEach(header => {$(header).css('opacity','0.3')})
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
    var header = ''
    for(i=0 ; i < platforms_cords.length ; i++)
    {
        var header_style = `
            top:`+ parseInt(platforms_cords[i][1]+ 200)  +`px;
            left:`+ parseInt(platforms_cords[i][0]+ 300)  +`px;
            
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
        header = `<div id = "`+ platforms[i].id + `" style = "`+ header_style +`" class = "cloud_header">`+ platforms[i].id.replace('_', ' ') +`</div>`
        clouds += cloud + cloud + cloud + header
    }
    minigame_clouds.innerHTML = clouds 
}


// my projects cloud

const myprojects = document.querySelectorAll('.project')
const myprojects_images =[]
const myprojects_contents = []
able_to_see_project = true

myprojects.forEach((project) => 
{
    myprojects_images.push(project.querySelector('img'))
    myprojects_contents.push(project.querySelector('.content'))
})

myprojects_contents.forEach((content) => 
{
    console.log(content)
    content.querySelector('#close_btn').addEventListener("click", () =>
    {
       
        $(content).css('opacity','0')
        $(content).css('visibility','hidden')
        myprojects_images.forEach((img) => 
        {
            $(img).css('opacity','1')
            $(img).css('transform', 'scale(1)')
            $(img).css('cursor', 'default')
        })
        able_to_see_project = true
    })
})

myprojects_images.forEach((image) => 
{
    //$(image).css('animation', 'move_up_down 5s ease-in-out forwards infinite alternate')
    
        image.addEventListener("mouseover", (image) => 
        {
            if(able_to_see_project)
            {       
                $(image.target).css('animation', 'pulse_moves 1s ease-in-out forwards infinite alternate')
                $(image.target).css('cursor', 'pointer')
                $(image.target).css('box-shadow', '0px 0px 67px -12px rgba(20, 20, 20, 1)')
            }
        })

        image.addEventListener("mouseleave", (image) => 
        {
            $(image.target).css('animation', 'none')
            $(image.target).css('box-shadow', '0px 33px 46px -12px rgba(66, 68, 90, 1)')
            
        })

        image.addEventListener("click", (image) => 
        {
            if(able_to_see_project)
            {
                able_to_see_project = false
                image_opacity = window.getComputedStyle(image.target).getPropertyValue("opacity");
                if(image_opacity)
                {
                    $(image.target).css('transform', 'scale(3)')
                    $(image.target).css('box-shadow', 'none')
                    $(image.target).css('opacity', '0')
                    img_index = myprojects_images.indexOf(image.target)
                    myprojects_contents.forEach((content) => 
                    {
                        console.log(img_index, myprojects_contents.indexOf(content))
                        if( img_index == myprojects_contents.indexOf(content)) 
                        {
                            $(content).css('opacity', '1')
                            $(content).css('z-index', '3')
                            $(content).css('visibility','visible')
                        }  
                    })
                }
            }   
        })
})


// my interest cloud
const my_interests = document.querySelector('#My_interests')
const programming = my_interests.querySelector('#programming')
const music = my_interests.querySelector('#music')
const sport = my_interests.querySelector('#sport')

// programming
const comp_img = programming.querySelector('img')
const programming_content = programming.querySelector('#programming_content')

//comp staff
const poweroff = programming.querySelector('#close_btn')
const poweron = programming.querySelector('#open_btn')
const log_in_window = programming.querySelector('#log_in_window')
const desktop = programming.querySelector('#desktop')

loading = programming.querySelector('#loading')
close_allow = true

comp_img.addEventListener("mouseover",(image) =>
{
    $(image.target).css('animation', 'none')
    $(image.target).css('cursor','pointer')
    $(poweroff).css('transition','all 1.8s ease-in-out')
    $(poweron).css('transition','all 1.8s ease-in-out')
})

poweroff.addEventListener("click",() =>{reset_computer()})

poweron.addEventListener("click", () =>
{
    close_allow = false
    $(loading).css('opacity','1')
    setTimeout(function() {computer() }, 1000);
})

comp_img.addEventListener("click", (image) =>
{
    $(poweroff).css('opacity','1')
    $(poweron).css('opacity','1')

    $(comp_img).css('cursor','default')
    $(programming_content).css('z-index','3')

    $(image.target).css('transform','scale(10)')
    $(image.target).css('z-index','3')
    $(image.target).css('animation', 'none')

    const video = `<video 
        style = "position: absolute; top:0; left:0; "
        autoplay muted plays-inline>
        <source src = "clips/cmd.mp4" type="video/mp4">
        </video>`
        
    //programming_content.innerHTML = video

})

function computer()
{
    
    $(loading).css('opacity','0')
    
    $(log_in_window).css('z-index', '3')
    setTimeout(function() 
    {
        $(log_in_window).css('opacity', '1')
        close_allow = true
    }, 1000);

    log_in_window.querySelector('#login_btn').addEventListener("click",() =>
    {
        close_allow = false
        $(desktop).css('z-index','3')

        setTimeout(function() 
        {
            close_allow = true
            $(desktop).css('opacity','1') 
            $(log_in_window).css('z-index', '1')
        }, 3000);
        
        $(log_in_window).css('opacity','0')
    })
}

function reset_computer()
{
    if(close_allow)
    {
        $(comp_img).css('transform','scale(1)')
        $(comp_img).css('animation', 'pulse_moves 1s ease-in-out forwards infinite alternate')
        $(comp_img).css('cursor','default')
    
        $(poweroff).css('transition','all 0.1s ease-in-out')
        $(poweroff).css('opacity','0')
    
        $(poweron).css('transition','all 0.1s ease-in-out')
        $(poweron).css('opacity','0')
    
        $(desktop).css('z-index','1')
        $(desktop).css('opacity','0')
    
        $(log_in_window).css('z-index', '1')
        $(log_in_window).css('opacity','0')
    }
   
}