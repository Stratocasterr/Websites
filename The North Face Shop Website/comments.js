window.localStorage.clear();
const comment_adder = document.querySelector('#comment_adder')
const write_com_btn = document.querySelector('#write_comment_btn')
const all_comments_html = document.querySelector('#all_comments')

memory_comments = window.localStorage.getItem('storaged_all_comments')
if(memory_comments) all_comments_html.innerHTML = memory_comments
var all_comments = []

const add_com_btn = document.querySelector('#add_comment_btn')
const user_name = comment_adder.querySelector('#username')
const user_img = comment_adder.querySelector('#user_img')

const com_header_input = document.getElementById('comment_h_input')
const com_text_input = document.getElementById('comment_text_input')

const stars_container = document.querySelector('#stars')

var actual_user = 
{
    username: "leo42",
    profile_img : "images/users/messi1.jpg"
}

write_com_btn.addEventListener("click", () =>{com_adding()})

function com_adding()
{
   
    score = 0
    adder_stars = []
    stars_container.innerHTML = ''

    $(comment_adder).css('visibility','visible')
    $(comment_adder).css('position','static')
    $(write_com_btn).css('visibility','hidden')
    $(add_com_btn).css('visibility','visible')
    user_img.src = actual_user.profile_img
    user_name.textContent = actual_user.username
    create_stars_group()
    adder_stars = comment_adder.querySelectorAll('#star-five')

    adder_stars.forEach(element =>
    {
        element.addEventListener("click", function(element)
        {
            score = parseInt(element.target.textContent)
            color_stars(score, adder_stars)
        })})
}

add_com_btn.addEventListener("click", () =>
{
    var header_value = com_header_input.value
    var text_value = com_text_input.value

    com_header_input.value = ""
    com_text_input.value = ""
    
    if(header_value && text_value && score)
    {
        var new_com = 
        {
            header: header_value,
            comment_text: text_value,
            score: score,
            id: Math.floor(Math.random() * 10000)
        }

        $(comment_adder).css('visibility','hidden')
        $(comment_adder).css('position','absolute')
        $(write_com_btn).css('visibility','visible')
        $(add_com_btn).css('visibility','hidden')
        all_comments.push(new_com)
       
        add_thml_items()
    }

    else if(!header_value) pop_info_window("noheader")
    else if(!text_value) pop_info_window("notext")
    else if(!text_value) pop_info_window("nostars")
    else if(!score) pop_info_window("noscore")
})


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
    setTimeout(function(){info_window.innerHTML = ""}, 2000)
}

function add_thml_items()
{
    var html_item = ''
    if(memory_comments) html_item += memory_comments
    if ( all_comments.length > 0)
    {
        all_comments.forEach((com) => 
    {
        html_item += 
            `
                <div id = "comment`+ com.id +`" class = "comments">
                    <div id="userinfo">
				        <img id="user_img" src="`+ actual_user.profile_img +`"/>
				        </br>
				        <h id="username" >`+ actual_user.username +`</h>
                    </div>
                   <div id = "comment_content" style = "background-color: #50545f;">
                        <div id = "header_stars" style = "background-color: #50545f;">
                            <h id = "comment_header" style = "color: white; font-size:30px; background-color: #50545f;">`+ com.header +`</h>
						    <div id="score" style = "background-color: #50545f;">`+ stars_container.innerHTML +`</div>
						    </br>
					    </div>
					<div class = "comment_text" style="color:white; font-size:20px">`+ com.comment_text +`</div>
                    </div>
                </div>
            `
           
    })
   
    all_comments_html.innerHTML = html_item

    all_comments.forEach((com) =>
    {
        var coment = document.querySelector("#comment"+ com.id)
        stars = coment.querySelectorAll("#star-five")
        color_stars(com.score, stars)
    })
    content_to_storage = document.querySelector('#all_comments').innerHTML 
    if(content_to_storage != null) window.localStorage.setItem("storaged_all_comments", content_to_storage)
    }
}

function create_stars_group()
{
    var stars =''
    for(i=0; i<5; i++)
    {
        value = i + 1 
        stars +=`<div style=" margin-top:-5px; margin-left:-120px; float:left;" id = "star-five">` + value + `</div>`
    }
    stars_container.innerHTML = stars
}

function color_stars(index, stars)
{
    for(i=0 ; i < index ; i++)
    {
        $(stars[i]).css('--basic_color','gold')
    }

    for(i=0; i<stars.length; i++)
    {
        if(i>index-1) $(stars[i]).css('--basic_color','white')
    }

}

