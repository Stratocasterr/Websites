// cmd programs
cmd_programs = 
[
    {
        id: "run_program1",
        source: "clips/cmd.mp4"
    },

    {
        id: "run_programJS",
        source: "clips/cmd.mp4"
    },

    {
        id: "run_programPY",
        source: "clips/cmd.mp4"
    },

    {
        id: "run_programVS",
        source: "clips/cmd.mp4"
    }
]



// my interest cloud

const my_interests = document.querySelector('#My_interests')
const programming = my_interests.querySelector('#programming')
const music = my_interests.querySelector('#music')
const sport = my_interests.querySelector('#sport')

// programming
const comp_img = programming.querySelector('img')

//comp staff
const poweroff = programming.querySelector('#close_btn')
const poweron = programming.querySelector('#open_btn')
const log_in_window = programming.querySelector('#log_in_window')
const desktop = programming.querySelector('#desktop')
const run_program_icons = document.querySelectorAll('.run_program_icon')

console.log(run_program_icons)
loading = programming.querySelector('#loading')
close_allow = true

comp_img.addEventListener("mouseover",(image) =>
{
    $(image.target).css('animation', 'none')
    $(image.target).css('cursor','pointer')
    $(poweroff).css('transition','all 1.8s ease-in-out')
    $(poweron).css('transition','all 1.8s ease-in-out')
})

comp_img.addEventListener("mouseleave",(image) =>
{
    if(getComputedStyle(poweron).opacity ==0)
        $(image.target).css('animation', 'pulse_moves 1s ease-in-out forwards infinite alternate')
})

comp_img.addEventListener("click", (image) =>
{
    $(poweroff).css('opacity','1')
    $(poweron).css('opacity','1')

    $(poweroff).css('z-index','3')
    $(poweron).css('z-index','3')

    $(comp_img).css('cursor','default')
    $(image.target).css('transform','scale(10)')
    $(image.target).css('z-index','3')
    $(image.target).css('animation', 'none')
})

poweroff.addEventListener("click",() =>{reset_computer()})

poweron.addEventListener("click", () =>
{
    close_allow = false
    $(loading).css('opacity','1')
    setTimeout(function() {computer() }, 1000);
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

            run_program_icons.forEach((icon) =>
            {
                icon.addEventListener("click",(icon) =>
                {
                    video_id = icon.target.id
                    video_src = ""
                    cmd_programs.forEach(program =>
                        {
                            if(program.id == video_id)
                                video_src = program.source
                        })
                    run_program(video_src)
                })
            })
        }, 3000);
        
        $(log_in_window).css('opacity','0')
    })
}



function run_program(video_src)
{
    console.log(video_src)
    const video = `
    <img 
        src="images/cmd_frame.png" 
        style = "position: absolute; top:1vh; left:-4px; width: 750px; 
        "/>

    <img id = "close_btn" 
        src="images/x.png" 
        style="width:2.5vh; height:2.5vh; position:absolute; top:1vh; left:37vw;"

        />
    <video 
        style = "position: absolute; top:4vh; left:0.5vw; width: 702px;height: 410px; "
        autoplay muted plays-inline>
        <source src = "`+ video_src + `" type="video/mp4">
    </video>`

    program.innerHTML = video
    $(program).css('opacity','1')
    program.querySelector("#close_btn").addEventListener("click", () => 
    {
        $(program).css('opacity','0')
        program.innerHTML = ''
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
        $(poweroff).css('z-index','-1')
    
        $(poweron).css('transition','all 0.1s ease-in-out')
        $(poweron).css('opacity','0')
        $(poweron).css('z-index','-1')
    
        $(desktop).css('z-index','-1')
        $(desktop).css('opacity','0')
    
        $(log_in_window).css('z-index', '-1')
        $(log_in_window).css('opacity','0')

        program.innerHTML = ''
    }
   
}


function yourFunction(){
    console.log()

    setTimeout(yourFunction, 1000);
}

yourFunction();