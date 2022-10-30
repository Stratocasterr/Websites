const welcome_user = menu.querySelector('#welcome_user')

/*profile window */


const profile_window = document.querySelector('#profile_window')
const profile_pop_window = profile_window.querySelector('.pop_window')
const profile_window_container = profile_pop_window.querySelector('#profile_window_container')
const close_profile_window_button = profile_window_container.querySelector('.close-btn')

//profile window
const profile_window_content  = profile_window_container.querySelector('#profile_window_content')
const profile_window_img = profile_window_content.querySelector('img')
const profile_window_username = profile_window_content.querySelector('#username')
const profile_window_password = profile_window_content.querySelector('#password')

const user_main_infos = profile_window_content.querySelector('#user_main_infos')

const username_password = user_main_infos.querySelectorAll('input')
var userinfo = Array.from(profile_window_content.querySelectorAll('.userinfo'))

const change_password_button = user_main_infos.querySelector('#change_password')
const edit_infos_button = profile_window_container.querySelector('#edit_button')
const profile_img_changer = user_main_infos.querySelector('#profile_img_changer')
const change_profile_img = profile_img_changer.querySelector('#upload_profile_img')

//const profile_window_gender
//const profile_window_shoe_size
//const profile_window_clothes_size
welcome_user.addEventListener("click",() => {open_profile_window()})
close_profile_window_button.addEventListener("click", () => {close_profile_window()})
edit_infos_button.addEventListener("click", () => {edit_infos()})
change_password_button.addEventListener("click", () => edit_password() )
change_profile_img.addEventListener("change", (element => 
    {
        change_img(element)
    }))


function change_img(element)
{
    if(window.File && window.FileReader && window.FileList && window.Blob)
    {
        file = element.target.files
        profile_window_img.src = "images/users/" + file[0].name
        //actual_user.profile_img =  profile_window_img.src
    }
    else alert("Adding images failed!")
}
    








function open_profile_window()
{
    $(profile_pop_window).css('visibility','visible')
    $(profile_pop_window).css('opacity','1')
    profile_window_img.src = actual_user.profile_img
    profile_window_username.textContent = actual_user.username
    profile_window_password.textContent = actual_user.password
    
    
}

function close_profile_window()
{
    $(profile_pop_window).css('visibility','hidden')
    $(profile_pop_window).css('opacity','0')
}

function edit_infos()
{
    userinfo_u = userinfo.filter(element => { return element.id != "username"})
    userinfo_up = userinfo_u.filter(element => { return element.id != "password"})
    const user_clothes_infos = profile_window_content.querySelector('#user_clothes_infos')
    edits_buttons = user_main_infos.querySelectorAll('button')
    edits_lists = user_clothes_infos.querySelectorAll('input')
    edits_buttons.forEach(button => {$(button).css('visibility','visible')})
    edits_lists.forEach(list => {$(list).css('visibility','visible')})
    userinfo_up.forEach(info => {$(info).css('visibility','hidden')})
}

function edit_password()
{
    userinfo_password = userinfo.filter(element => { return element.id == "password"})[0]
    $(userinfo_password).css('visibility','hidden')
    username_password.forEach(input => {$(input).css('visibility','visible')})
}