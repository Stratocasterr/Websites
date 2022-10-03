const wproducts=[
    {
        name: "Women's Denali™ Pullover",
        price: "$159.00",
        image:"images/womens/denali pullover/ginger.JPG",
        content:"This version has a secure-zip chest pocket and adjustable hem for comfort and practicality.",
        colors: ["lawender.JPG", "ginger.JPG", "black.JPG"]
    },
 
    {
        name: "Women's Ridge Fleece Full-Zip",
        price: "$139.00",
        image:"images/womens/ridge fleece full-zip/black.JPG",
        content:"Made with a plush, has a relaxed fit that makes it perfect for adding layers above or below.",
        colors: ["black.JPG"]
    },
    {
        name: "Women's Canyonlands Zip",
        price: "$79.00",
        image:"images/womens/canyonlands zip/green.JPG",
        content:"With set-in sleeves for a classic look, this is a layer you’ll reach for all year long.",
        colors: ["rose.JPG", "green.JPG"]
    },

]

const mproducts=[
    {
        name: "Men's 1996 Retro Nuptse Vest",
        price: "$220.00",
        image:"images/mens/nuptse vest/violet.JPG",
        content:"In the mountains or in the city, the Men’s 1996 Retro Nuptse Vest is a cold-weather icon for good reason.",
        colors: ["violet.JPG", "thyme.JPG", "black.JPG"]
    },
 
    {
        name: "Men’s Printed 1996 Retro Nuptse Jacket",
        price: "$330.00",
        image:"images/mens/nuptse/vasabi.JPG",
        content:"The moment you see the oversized baffles you know you’re looking at our iconic Nuptse.",
        colors: ["antelope.JPG", "vasabi.JPG"]
    },

    {
        name: "Men’s Hydrenalit™ Down Mid",
        price: "$300.00",
        image:"images/mens/hydrenalite/antelope.JPG",
        content:"Expedition-tested features like 550-fill Down baffles and an insulated hood to keep the iciest winds at bay.",
        colors: ["antelope.JPG", "black.JPG"]
    },


]

const kproducts=[
    {
        name: "Kids’ Denali™ Jacket",
        price: "$109.00",
        image:"images/kids/denali/cameo.JPG",
        content:"Even the tiniest explorers should have iconic Denali™ Jacket style.",
        colors: ["taupe.JPG", "cameo.JPG"]
    },

    {
        name: "Kids’ ThermoBal™ Hooded Jacket",
        price: "$99.00",
        image:"images/kids/thermoball/black.JPG",
        content:"This versatile jacket can be worn as a winter mid-layer or as a stand-alone jacket all year long.",
        colors: ["black.JPG", "lavender.JPG"]
    },

    {
        name: "Kids’ Reversible Full-Zip Jacket",
        price: "$89.00",
        image:"images/kids/reversible/taupe.JPG",
        content:"The water-repellent hoodie pairs city style with expedition-tested features and an insulated hood.",
        colors: ["taupe.JPG", "blue.JPG"]
    },


]



const buttons = document.querySelectorAll(".buy_it_button")



buttons.forEach(function(btn)
{
    btn.addEventListener("click", function (btn)
    {       
        if(btn.target.id == "forMen")
        {
            change_group(mproducts)
        }
        else if(btn.target.id == "forWmen")
        {   
            change_group(wproducts)
        }
        else if(btn.target.id == "forKids")
        {
            change_group(kproducts)
        }
    })
})

function add_elements(items, colors)
{   
    var elements = ''
    for(i = 0; i < items.length; i++)
    {   
        elements += add_element(items[i].name, items[i].image, items[i].price, items[i].content, colors[i])
    }
    
   
    document.getElementById("products").innerHTML = elements 
    const color_btns = document.querySelectorAll(".color_circle")
    color_btns.forEach(btn => 
        {
            btn.addEventListener("click", function(btn)
            {
                change_img(btn.target.id)
            });
        })
}


function add_element(name, image, price, content, colors)
{   
    var element = `<div class = "buyproducts" style="padding:10px; border-bottom: 2px solid white;">
                        <img src = "` + image + `" width = "190px" height = "420px" style="margin-left: 120px"/>
                        </br>
                        <name class="productname" style="font-weight: 700;margin-left: 20px;" >` + name + `</name>
                        </br>
                        <price style="color: red; font-size: 14px; margin-left: 20px" >` + price + '&nbsp;&nbsp;' + '<s style="color:black;">'+ ("$" + (parseInt(price.substring(1))*1.5).toString()).strike()+ '</s>' + `</price>
                        </br>
                        <content style="font-weight: 300; font-size: 12px; text-align: justify; margin-left: 20px" >` + content + `</content>`
                        + colors + 
                    '</div>'
            
    return element

}

function color_btns(colors, name, img_path)
{
   
    img_path = img_path.split('/').slice(0, -1).join("/") + "/"
    var buttons = '<div class = "color_buttons">'
    for(i = 0; i < colors.length; i++)
    {

        buttons += '<button id="' + name + '_' + img_path + colors[i] + '" class="color_circle" style = "background-color:' + find_color(colors[i]) + ';"></button>'
    }

    return buttons + '</div>'
}

function find_color(color)
{
    const n_color = color.slice(0,-4)
    if (n_color == "lawender") return "rgb(150, 78, 102)"
    else if (n_color == "ginger") return "rgb(238, 203, 209)"
    else if (n_color == "antelope") return "rgb(236, 194, 140)"
    else if (n_color == "vasabi") return "rgb(121, 214, 214)"
    else if (n_color == "rose") return "rgb(214, 141, 141)"
    else if (n_color == "thyme" || n_color == "taupe") return "rgb(60, 95, 95)"
    else if (n_color == "cameo") return "pink"
    else return n_color
}

function change_group(products)
{
    var colors = []
    products.forEach(element => colors.push(color_btns(element.colors, element.name, element.image)))    
    add_elements(products, colors); 
}

function change_img(id_val)
{
    
    const n_id = id_val.split("_")
    var products = document.querySelectorAll(".buyproducts")
    products.forEach(p => 
        {
            if(p.getElementsByTagName('name')[0].outerText == n_id[0])
            {
                p.getElementsByTagName('img')[0].src = n_id[1]
            }
        })
    
}


document.getElementById("checked").addEventListener("click", 
function() 
{
    if($("#bird").css("display") =="none")
    {
        $("#bird").css("display","block")
    }
    else { $("#bird").css("display","none")}

})


var first = true

function reload(product)
{
    first = false
    
    var element = ''
    product.colors.forEach(color => {
        element += add_element(product.name, product.image.split('/').slice(0, -1).join("/") + "/" + color, product.price, product.content, '' )
    })
    document.getElementById("products").innerHTML = element
}

window.onload = reload(wproducts[0])


