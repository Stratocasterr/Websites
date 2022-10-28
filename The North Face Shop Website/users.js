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





function log_in()
{
    var username_input_value = username_input.value
    var password_input_value = password_input.value
    if(username_input_value && password_input_value)
    {
        if(all_users_names.includes(username_input_value))
        {
            if(all_users[username_input_value].password == password_input_value)
            {
                actual_user = 
                {
                    username: username_input_value,
                    password: password_input_value,
                    profile_img: all_users[username_input_value].profile_img
                }
                window.localStorage.setItem("memory_login_user", JSON.stringify(actual_user))
                

                $('.pop_window').css('visibility','hidden')
                reset_input()
                window.location.reload()
            }
            else pop_info_window("invalidpassword")
        }
        else pop_info_window("invalidusername")
    }
    else if(!username_input_value) pop_info_window("nousername")
    else if(!password_input_value) pop_info_window("nopassword")
    
    close_account_window()
}

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

            var new_user = 
            {
                username: create_username_input_value,
                password: create_password_input_value,
                profile_img: "images/users/" + file[0].name
            }
            
            all_users[create_username_input_value] = new_user
            
            actual_user = new_user
            
            
            
            window.localStorage.setItem("memory_all_users", JSON.stringify(all_users))
            all_users_names = get_object_names(all_users)
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
var all_users = {}
var memory_users = JSON.parse(window.localStorage.getItem("memory_all_users"))
var memory_login_userr = JSON.parse(window.localStorage.getItem("memory_login_user"))

if(memory_users)
{
    all_users = memory_users
    all_users_names = get_object_names(all_users)
    actual_user = JSON.parse(window.localStorage.getItem("memory_login_user"))
}

if(actual_user) say_welcome(actual_user)

function lala()
{
    setTimeout(function()
    {
        console.log("######")
        console.log(all_users)
        console.log(memory_users)

        console.log(actual_user)
        console.log(memory_login_userr)

        console.log(all_comments)
        console.log(memory_comments)
        console.log(all_users_names)
        lala()
    }, 2000)
}

lala()
//window.localStorage.clear();
