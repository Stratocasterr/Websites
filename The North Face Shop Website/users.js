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



close_window_button.addEventListener("click", () => {close_account_window()})

/*log in functions*/

log_in_window_button.addEventListener("click", (element) => 
{
    console.log(element.target.textContent)
    if(element.target.textContent == "Log in")
    {
        $('.pop_window').css('visibility','visible')
        $('#log_in_container').css('visibility','visible')
    }
    else 
    {
        console.log("lo")
        element.target.textContent = "Log in"
        actual_user = {}
        say_welcome(0)
    }

})

log_in_button.addEventListener("click", () => {log_in()})

function close_account_window()
{
    $('.pop_window').css('visibility','hidden')
    $('#log_in_container').css('visibility','hidden')
    $('#create_account_container').css('visibility','hidden')
    $('#profile_img_display').css('visibility', 'hidden')
    window_headline.textContent = "Log in"
}

function showpassword()
{
    var password_input = document.getElementById("password_input");
    if (password_input.type === "password") password_input.type = "text";
    else password_input.type = "password";
}

function say_welcome(user)
{
    if(user) 
    {
        welcome_user.innerHTML = "Welcome " + actual_user.username
        $(welcome_user).css('visibility','visible')
    }
    else $(welcome_user).css('visibility','hidden')
}


function reset_input()
{
    username_input.value = ''
    password_input.value = ''
    create_username_input.value = ''
    create_password_input.value = ''
    create_password_input_2.value = ''
}

function log_in()
{
    var username_input_value = username_input.value
    var password_input_value = password_input.value
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
                log_in_window_button.textContent = "Log out"

                $('.pop_window').css('visibility','hidden')
                reset_input()
            }
            else pop_info_window("invalidpassword")
        }
        else pop_info_window("invalidusername")
    }
    else if(!username_input_value) pop_info_window("nousername")
    else if(!password_input_value) pop_info_window("nopassword")
    say_welcome(actual_user)
    close_account_window()
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
                profile_img: "images/users/" + file[0].name
            }
            log_in_window_button.textContent = "Log out"
            all_users.set(create_username_input_value, new_user)
            actual_user = new_user
            all_users_names = Array.from(all_users.keys())
            
            say_welcome(actual_user)
            window.localStorage.setItem("all_users", JSON.stringify(all_users))
            close_account_window()
            reset_input()
        }
    else
    {
        if(!create_username_input_value) pop_info_window("nousername")
        else if(!create_password_input_value) pop_info_window("nopassword")
        else if(!create_password_input_value_2) pop_info_window("nocreatepassword2")
        else if(!profile_img_input_value) pop_info_window("noimage")
    }
}

var all_users_names = []
var actual_user = {}
let file = ''
var all_users = new Map()
let memory_users = window.localStorage.getItem(all_users)
if(memory_users) all_users = memory_users

/*image uploader*/
upload_profile_img.addEventListener("change", (element => 
    {
        if(window.File && window.FileReader && window.FileList && window.Blob)
        {
            file = element.target.files
            let profile_img_display =  document.querySelector('#profile_img_display')
            profile_img_display.querySelector('#user_profile_img').src = "images/users/" + file[0].name
            $(profile_img_display).css('visibility', 'visible')
        }
        else alert("Adding images failed!")
    }))
