const huge_name = document.querySelector('#name')
const huge_surname = document.querySelector('#surname')

const scrolling_gif = document.querySelector('#scroll_down').querySelector('img')

const clouds = document.querySelector('#clouds')
const clouds_groupL = clouds.querySelector('#clouds_groupL')
const clouds_groupR = clouds.querySelector('#clouds_groupR')

var huge_name_x_pos = huge_name.getBoundingClientRect().left;
var huge_surname_x_pos = huge_surname.getBoundingClientRect().left;
var oldScrollY = window.scrollY;

window.onscroll = function() 
{

    var huge_name_x_pos = huge_name.getBoundingClientRect().left;
    var huge_surname_x_pos = huge_surname.getBoundingClientRect().left;
 
    console.log(window.scrollY)
    if (oldScrollY > 10)
    {

        $(scrolling_gif).css('opacity','0')
        if(1100 > window.scrollY & window.scrollY > 170 ) //      window.scrollY>170 and <1200                                         //   scrolling down
        {
            $(scrolling_gif).css('opacity','0')

            $(huge_name).css('transform','translateX(1500px)')
            $(huge_surname).css('transform','translateX(-1800px)')

            $(clouds_groupL).css('transform','translateX(1500px)')
            $(clouds_groupR).css('transform','translateX(-1100px)')
        }
    
        else if(window.scrollY > 1100 || window.scrollY < 170)                                // window.scroll >1200 or <170
        {
            $(scrolling_gif).css('opacity','1')

            $(huge_name).css('transform','translateX(-1500px)')
            $(huge_surname).css('transform','translateX(1800px)')
           
            $(clouds_groupL).css('transform','translateX(-1500px)')
            $(clouds_groupR).css('transform','translateX(1100px)')
        }
    
                                    
    }
    
    oldScrollY = window.scrollY;
    
}


function animate_top_clouds()
{
    const top_clouds = document.querySelector("#top_clouds")
    const cl = top_clouds.querySelector('#small-top_cloud1')
    const cr1 = top_clouds.querySelector('#small-top_cloud2')
    const cr2 = top_clouds.querySelector('#middle-top_clouds')


}
function lala()
{
    setTimeout(function()
    {

        lala()
    }, 2000)
}

//lala()