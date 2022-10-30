
function pop_info_window(message)
{
    const info_window = document.getElementById('info_window')
    if(message == "noheader")
    {
        info_window.innerHTML = "No comment header"
        $('#info_window').css('background-color','red')
    }

    else if (message =="notext")
    {
        info_window.innerHTML = "No comment content"
        $('#info_window').css('background-color','red')
    }

    else if (message =="noscore")
    {
        info_window.innerHTML = "No score selected"
        $('#info_window').css('background-color','red')
    }

    else if (message =="comadded")
    {
        info_window.innerHTML = "Comment successfully added"
        $('#info_window').css('background-color','greenyellow')
    }

    else if (message =="comdeleted")
    {
        info_window.innerHTML = "Comment succesfully removed!"
        $('#info_window').css('background-color','red')
    }

    else if (message == "nousername")
    {
        info_window.innerHTML = "Type your user name!"
        $('#info_window').css('background-color','red')
    }

    else if (message == "nopassword")
    {
        info_window.innerHTML = "Type your password!"
        $('#info_window').css('background-color','red')
    }

    else if (message == "invalidusername")
    {
        info_window.innerHTML = "Invalid user name!"
        $('#info_window').css('background-color','red')
    }

    else if (message == "invalidpassword")
    {
        info_window.innerHTML = "Invalid password!"
        $('#info_window').css('background-color','red')
    }

    else if (message == "nocreatepassword2")
    {
        info_window.innerHTML = "Retype your password!"
        $('#info_window').css('background-color','red')
    }

    else if (message == "noimage")
    {
        info_window.innerHTML = "Add your profile image!"
        $('#info_window').css('background-color','red')
    }
    
    else if (message == "thesameusername")
    {
        info_window.innerHTML = "This username already exist! Please, choose another one"
        $('#info_window').css('background-color','red')
    }

    else if (message == "differentpassword")
    {
        info_window.innerHTML = "Invalid value of retyped password!"
        $('#info_window').css('background-color','red')
    }
    
    else if (message == "nouser")
    {
        info_window.innerHTML = "No user! Please log in to add comment"
        $('#info_window').css('background-color','red')
    }
    setTimeout(function(){info_window.innerHTML = ""}, 2000)
}

/* account functions */
function close_account_window()
{
    $(login_create_pop_window).css('visibility','hidden')
    $(login_create_pop_window).css('opacity','0')

    $(log_in_container).css('visibility','hidden')
    $(log_in_container).css('opacity','0')

    $('#create_account_container').css('visibility','hidden')
    $('#create_account_container').css('opacity','0')

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
    const small_pimg = welcome_user.querySelector('#small_profile_welcome_img')
    const welcome_user_headline = welcome_user.querySelector('h4')
    
    
    if(user) 
    {
        
        welcome_user_headline.innerHTML = "Welcome " + actual_user.username
        $(welcome_user).css('visibility','visible')
        log_in_window_button.textContent = "Log out"
        small_pimg.src = actual_user.profile_img
    }
    else
    { 
        $(welcome_user).css('visibility','hidden')
    }
}


function reset_input()
{
    username_input.value = ''
    password_input.value = ''
    create_username_input.value = ''
    create_password_input.value = ''
    create_password_input_2.value = ''
}

function get_object_names(obj)
{
    names = []
    if(obj)
    {
        for(var key in obj)
        {
           
            names.push(key)
        }
    }
    return names
}

