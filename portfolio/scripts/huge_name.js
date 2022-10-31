const huge_name = document.querySelector('#name')
const huge_surname = document.querySelector('#surname')




var oldScrollY = window.scrollY;

window.onscroll = function() 
{
    var huge_name_x_pos = huge_name.getBoundingClientRect().left;
    var huge_surname_x_pos = huge_surname.getBoundingClientRect().left;
   
    if(oldScrollY < window.scrollY)                    //scrolling down
    {
        $(huge_name).css('transform','translateX(800px)')
        $(huge_surname).css('transform','translateX(-800px)')
    }
    
    else                                               //scrolling up
    {
        $(huge_name).css('transform','translateX(-800px)')
        $(huge_surname).css('transform','translateX(800px)')
    }
    
                                                
    oldScrollY = window.scrollY;
}


