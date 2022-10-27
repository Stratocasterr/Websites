/*CONST*/

/*login*/
const log_in_window_button = document.querySelector('#log_in')
const close_window_button=document.querySelector('.close-btn')
const welcome_user = document.getElementById('menu').querySelector('h4')

const log_in_container = document.querySelector('#log_in_container')
const username_input = document.querySelector('#username_input')
const password_input = document.querySelector('#password_input')
const log_in_button = document.querySelector('#log_in_button')

/*headline*/
const window_container = document.querySelector('.window_container')
const window_headline = window_container.querySelector('h3')

/*create account*/
const create_account_window_button = document.querySelector('#create_account_window_button')
const create_account_button = document.querySelector('#create_account_button')
const create_username_input = document.querySelector('#your_username_input')
const create_password_input = document.querySelector('#type_password_input')
const create_password_input_2 = document.querySelector('#retype_password_input')
const upload_profile_img = document.querySelector('#upload_profile_img')



close_window_button.addEventListener("click", () => 
{ 
    $('.pop_window').css('visibility','hidden')
    $('#log_in_container').css('visibility','hidden')
    $('#create_account_container').css('visibility','hidden')
    window_headline.textContent = "Log in"
})

/*log in functions*/

log_in_window_button.addEventListener("click", () => 
{
    $('.pop_window').css('visibility','visible')
    $('#log_in_container').css('visibility','visible')
})

log_in_button.addEventListener("click", () => {log_in()})

function showpassword()
{
    var password_input = document.getElementById("password_input");
    if (password_input.type === "password") password_input.type = "text";
    else password_input.type = "password";
}


function log_in()
{
    var username_input_value = username_input.value
    var password_input_value = password_input.value
    //var all_usernames = 
    if(username_input_value && password_input_value)
    {
        if(all_users_names.includes(username_input_value))
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

/*create account functions*/

create_account_window_button.addEventListener("click", () => 
{
    $('#create_account_container').css('visibility','visible')
    $('#log_in_container').css('visibility','hidden')
    $('#log_in_container').css('position','absolute')
    window_headline.textContent = "Join us"
})

create_account_button.addEventListener("click", () => {create_account()})

function create_account()
{
    var create_username_input_value = create_username_input.value
    var create_password_input_value = create_password_input.value
    var create_password_input_value_2 = create_password_input_2.value
    var profile_img_input_value = upload_profile_img.value

    if(create_username_input_value && create_password_input_value
        && create_password_input_value_2 && profile_img_input_value)
        {
            if(all_users_names.includes(create_username_input_value)) 
            {
                pop_info_window("thesameusername")
                return 0
            }
            
            if(create_password_input_value != create_password_input_value_2)
            {
                pop_info_window("differentpassword")
                return 0
            }

            let new_user = 
            {
                username: create_username_input_value,
                password: create_password_input_value,
                profile_img: profile_img_input_value
            }
            
            all_users.set(create_username_input_value, new_user)
            actual_user = new_user
            create_username_input.value = ''
            create_password_input.value = ''
            create_password_input_2.value = ''
        }

    else
    {
        if(!create_username_input_value) pop_info_window("nousername")
        else if(!create_password_input_value) pop_info_window("nopassword")
        else if(!create_password_input_value_2) pop_info_window("nocreatepassword2")
        else if(!profile_img_input_value) pop_info_window("noimage")
    }
}


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

all_users_names = Array.from(all_users.keys())

/*image uploader*/

upload_profile_img.addEventListener("change", (element => 
    {
        if(window.File && window.FileReader && window.FileList && window.Blob)
        {
            const files = element.target.files
            console.log(files)
        }
        else alert("Adding images failed!")
    }))