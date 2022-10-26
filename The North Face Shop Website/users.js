const log_in_window_button = document.querySelector('#log_in')
const close_login_button=document.querySelector('.close-btn')
const welcome_user = document.getElementById('menu').querySelector('h4')

const log_in_container = document.querySelector('#log_in_container')
const username_input = document.querySelector('#username_input')
const password_input = document.querySelector('#password_input')
const log_in_button = document.querySelector('#log_in_button')

const create_account_window_button = document.querySelector('#create_account_window_button')

log_in_window_button.addEventListener("click", () => 
{
    $('.pop_window').css('visibility','visible')
    $('#log_in_container').css('visibility','visible')
})

close_login_button.addEventListener("click", () => 
{ 
    $('.pop_window').css('visibility','hidden')
    $('#log_in_container').css('visibility','hidden')
    $('#create_account_container').css('visibility','hidden')
})

log_in_button.addEventListener("click", () => {log_in()})
create_account_window_button.addEventListener("click", () => 
{
    $('#create_account_container').css('visibility','visible')
    $('#log_in_container').css('visibility','hidden')
    $('#log_in_container').css('position','absolute')
})

var actual_user = 
{
    username: "leomessi10",
    password: "football1",
    profile_img: "images/users/messi1.jpg"
}

    
if(actual_user) 
{
    welcome_user.innerHTML = "Welcome " + actual_user.username
    $(welcome_user).css('visibility','visible')
}

var all_users = new Map()
all_users.set(actual_user.username, actual_user)

users_names = Array.from(all_users.keys())



function log_in()
{
    var username_input_value = username_input.value
    var password_input_value = password_input.value
    //var all_usernames = 
    if(username_input_value && password_input_value)
    {
        if(users_names.includes(username_input_value))
        {
            if(all_users.get(username_input_value).password == password_input_value)
            {
                actual_user = 
                {
                    username: username_input_value,
                    password: password_input_value,
                    profile_img: all_users.get(username_input_value).profile_img
                }

                $('.pop_window').css('visibility','hidden')
                username_input.innerHTML = ''
                password_input.innerHTML = ''
            }
            else pop_info_window("invalidpassword")
        }
        else pop_info_window("invalidusername")
    }
    else if(!username_input_value) pop_info_window("nousername")
    else if(!password_input_value) pop_info_window("nopassword")

}
