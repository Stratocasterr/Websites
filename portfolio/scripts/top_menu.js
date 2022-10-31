const top_menu = document.querySelector('#top_menu')
const top_menu_btns = top_menu.querySelector('#top_menu_buttons')
const open_site_menu_btn = top_menu.querySelector('#open_site_menu')

const site_menu = document.querySelector('#site_menu')
const site_menu_btns = site_menu.querySelector('#site_menu_btns')

open_site_menu_btn.addEventListener("click", () =>
{
    const containerH = site_menu.getBoundingClientRect().height
    const btnsH = site_menu_btns.getBoundingClientRect().height

    if(containerH === 0 )
    {
        site_menu.style.height = `${btnsH}px`
        site_menu.classList.toggle('show_site_menu')
    }
    else
    {
        site_menu.style.height = 0
    }
})

window.addEventListener("resize", function()
{
    if(document.body.clientWidth < 1000 ) 
    {
        //$(top_menu_btns).css('visibility', 'hidden')
        $(top_menu_btns).css('opacity', '0')

        //$(open_site_menu_btn).css('visibility', 'visible')
        $(open_site_menu_btn).css('opacity', '1')
    }
    else  
    {
        //$(top_menu_btns).css('visibility','visible')
        $(top_menu_btns).css('opacity', '1')

        //$(open_site_menu_btn).css('visibility', 'hidden') 
        $(open_site_menu_btn).css('opacity', '0')
    }
})