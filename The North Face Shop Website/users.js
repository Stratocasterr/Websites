const welcome_user = menu.querySelector('#welcome_user')

/*profile window */


const profile_window = document.querySelector('#profile_window')
const profile_pop_window = profile_window.querySelector('.pop_window')
const profile_window_container = document.querySelector('#profile_window_container')


welcome_user.addEventListener("click",() => {open_profile_window()})



function open_profile_window()
{
    $(profile_window_container).css('visibility','visible')
    $(profile_window_container).css('opacity','1')
}