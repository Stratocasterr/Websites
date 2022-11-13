const contact_me = document.querySelector('#contact_me')

// background
const front_ground_block_img = "images/blocks/dirt.png"

const middle_ground_block_img1 = "images/blocks/middle1.png"
const middle_ground_block_img2 = "images/blocks/middle2.png"

const stone_ground_block_img1= "images/blocks/stone1.png"
const stone_ground_block_img2= "images/blocks/stone2.png"

const underground_block_img = "images/blocks/under.png"

//trees
const swierk_img = "images/trees/swierk.png"
function create_trees()
{
    create_tree(swierk_img, -395, -35, 329, 429, -1)
    create_tree(swierk_img, -280, 109, 220, 312, -1)
    create_tree(swierk_img, -280, -60, 190, 300,-1)
    create_tree(swierk_img, -85, 114, 135, 118, 1)
    create_tree(swierk_img, -90, 28, 103, 100, 1)

    create_tree(swierk_img, -280, 909, 220, 312, 1)
    create_tree(swierk_img, -85, 1004, 135, 100, -1)
    create_tree(swierk_img, -87, 828, 103, 89, -1)


    create_tree(swierk_img, -280, 1309, 220, 312, -1)
    create_tree(swierk_img, -480, 1670, 356, 539, 1)
    create_tree(swierk_img, -280, 1550, 323, 312, -1)
    create_tree(swierk_img, -280, 1772, 220, 312, -1)
    create_tree(swierk_img, -91, 1736, 124, 112, -1)

    create_tree(swierk_img, -85, 1304, 135, 100, -1)
    create_tree(swierk_img, -87, 1128, 103, 89, -1)

}


function create_tree(tree_img, y_pos, x_pos, width, height, z)
{
    
    contact_me.innerHTML += 
    `
    <img src = `+tree_img+`
                style = "top:` +(y_pos)+`px; left:`+x_pos+`px; width:`+width+`px; height:`+height+`px; z-index:`+ z + `"
                class ="tree"
    />`
}


function create_ground()
{
    block_height = 100
    block_width = 100
    const front_blocks = block_rows( 0, 1, block_height, block_width, front_ground_block_img)
    const middle_blocks = block_rows(block_height, 2, block_height, block_width, [middle_ground_block_img1, middle_ground_block_img2])
    const stone_blocks = block_rows(3* block_height, 2, block_height, block_width, [stone_ground_block_img1, stone_ground_block_img2])
    const under_blocks = block_rows(5* block_height, 20, block_height, block_width, underground_block_img)
    contact_me.innerHTML += front_blocks + middle_blocks + stone_blocks + under_blocks
}

function block_rows(y_offset, rows_amount, block_height, block_width, blocks_names)
{
    blocks_amount_x = window.innerWidth / block_width
    var block_img = ""
    var images_index = 0
    var x_offset = 0
    if(Array.isArray(blocks_names)) var block_img = blocks_names[0]
    else block_img = blocks_names
    blocks = ""

    for( r= 0;  r < rows_amount; r++)
    {
        for(k = 0; k < blocks_amount_x; k++)
        {
            blocks +=
            `
                <img src = `+block_img+`
                style = "top:` +y_offset+`px; left:`+x_offset+`px; width:`+block_width+`px; height:`+block_height+`px;"
                class ="block"
                />
            `
            x_offset += block_width
        }
        if(Array.isArray(blocks_names)) if(r+1 < blocks_names.length) block_img = blocks_names[r+1]
        x_offset = 0
        y_offset += block_height   
    }    
    return blocks
}

create_ground()
create_trees()
// contact me content

var oldScrollY = window.scrollY;
const header = contact_me.querySelector('header')
const contact_img = contact_me.querySelector('img')

const header_style = getComputedStyle(header)
const img_style = getComputedStyle(contact_img)

header_X_offset = 0
header_opacity_offset = 0
header_X_offset = 0
header_opacity_offset = 0
var lastScrollTop = 0;

window.addEventListener("scroll", function()
{ 
    console.log(header_style.opacity)
    console.log(header_style.transform)
    console.log(header_opacity_offset)
    console.log(header_X_offset)
    console.log("##############")


    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if(window.scrollY > 3500)
        {
            if (st > lastScrollTop)  //down
            {
                if(header_X_offset < 250) header_X_offset +=  10
                if(header_opacity_offset < 1) header_opacity_offset += 0.05
            }
        
            else                     //up
            {
                if(header_X_offset > 10) header_X_offset -= 10
                
                if(header_opacity_offset  <0 ) header_opacity_offset = 0
                else header_opacity_offset -= 0.05
            }
        
            $(header).css('transform','translateX('+header_X_offset+'px)')
            $(header).css('opacity',header_opacity_offset)
            
            $(contact_img).css('transform','translateY('+header_X_offset+'px)')
            $(contact_img).css('opacity',header_opacity_offset)

            lastScrollTop = st <= 0 ? 0 : st; 
        }
    else
    {
        $(header).css('opacity','0')
    }
})
       
           





