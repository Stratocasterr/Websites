var all_users = 
[
    {
        username: "leo42",
        password: "123football",
        profile_img : "images/users/messi1.jpg"
    },
    {
        username: "nate_diaz",
        password: "420runner",
        profile_img : "images/users/natediaz4.jpg"
    },
    {
        username: "jano_polish_bear",
        password: "noszak789",
        profile_img : "images/users/janek8.jpg"
    },

]

const sing_in_button = document.querySelector('#sing_in')



sing_in_button.addEventListener("click",function(){
   
    $('.pop_window').css('visibility','visible')
   
})
const closebtn=document.querySelector('.close-btn')

closebtn.addEventListener("click",function(){
   
    
    $('.pop_window').css('visibility','hidden')
   

})