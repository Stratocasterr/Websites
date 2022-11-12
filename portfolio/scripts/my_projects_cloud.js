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