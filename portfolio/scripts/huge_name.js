const huge_name = document.querySelector('#name')
const huge_surname = document.querySelector('#surname')

const scrolling_gif = document.querySelector('#scroll_down').querySelector('img')

var huge_name_x_pos = huge_name.getBoundingClientRect().left;
var huge_surname_x_pos = huge_surname.getBoundingClientRect().left;
var oldScrollY = window.scrollY;
//console.log("surn: ",huge_surname_x_pos)
//console.log("name: ",huge_name_x_pos)
window.onscroll = function() 
{
    //console.log(oldScrollY)
    var huge_name_x_pos = huge_name.getBoundingClientRect().left;
    var huge_surname_x_pos = huge_surname.getBoundingClientRect().left;
   //console.log("surn: ",huge_surname_x_pos)
    console.log(window.scrollY)
    if (oldScrollY > 10)
    {

        $(scrolling_gif).css('opacity','0')
        if(1200 > window.scrollY & window.scrollY > 170 ) //      window.scrollY>170 and <1200                                         //   scrolling down
        {
           
            $(huge_name).css('transform','translateX(1500px)')
            $(scrolling_gif).css('opacity','0')
            //$(huge_name).css('visibility','visible')
            //$(huge_surname).css('visibility','visible')
            $(huge_surname).css('transform','translateX(-1800px)')
        }
    
        else if(window.scrollY > 1200 || window.scrollY < 170)                                // window.scroll >1200 or <170
        {
            $(huge_name).css('transform','translateX(-1500px)')
            $(huge_surname).css('transform','translateX(1800px)')
            //$(huge_name).css('visibility','hidden')
            //$(huge_surname).css('visibility','hidden')
            $(scrolling_gif).css('opacity','1')

        }
    
                                    
    }
    
    oldScrollY = window.scrollY;
    
}


