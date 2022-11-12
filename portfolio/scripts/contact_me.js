const contact_me = document.querySelector('#contact_me')


front_ground_block_img = "images/blocks/dirt.png"

middle_ground_block_img1 = "images/blocks/middle1.png"
middle_ground_block_img2 = "images/blocks/middle2.png"

stone_ground_block_img1= "images/blocks/stone1.png"
stone_ground_block_img2= "images/blocks/stone2.png"

underground_block_img = "images/blocks/under.png"


function create_ground()
{
    block_height = 100
    block_width = 100
    const front_blocks = block_rows( 0, 1, block_height, block_width, front_ground_block_img)
    const middle_blocks = block_rows(block_height, 2, block_height, block_width, [middle_ground_block_img1, middle_ground_block_img2])
    const stone_blocks = block_rows(3* block_height, 2, block_height, block_width, [stone_ground_block_img1, stone_ground_block_img2])
    const under_blocks = block_rows(5* block_height, 10, block_height, block_width, underground_block_img)

    contact_me.innerHTML = front_blocks + middle_blocks + stone_blocks + under_blocks
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

