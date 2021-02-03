console.log("test")
const animalsForHomePage = [
    {
        img: "https://s3-ap-southeast-2.amazonaws.com/showandtellonline/wp/wp-content/uploads/2015/12/24171026/cat1-300x221.jpg",
        text: "Domestic short-haired cats should not be confused with the British Shorthair, American Shorthair, or other standardized breeds with \"Short-hair\" names, which are breeds recognized by various registries. Domestic short-haireds are the most common cat in the United States, accounting for around 90–95% of their number.",
    },
    {
        img: "https://www.thesprucepets.com/thmb/NujGPbVzaXPJb8jYBnhol-KlgyQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/40539405_2161860974092198_1325213908451368757_n-5b983819c9e77c0050f7e8d4.jpg",
        text: "Siberian Huskies are probably best-known for their incredible sled-pulling skills, but these doggies aren't all business! They indeed make excellent working dogs—they were originally bred to help the Chukchi people of Siberia hunt more efficiently—but they're seriously sweet, friendly, and loyal cuddle bugs, too.",
    }
    
]
animalsForHomePage.forEach(function(item){
    let section = document.createElement("section")
    section.classList.add("animalSection")

    let img = document.createElement("img")
    img.src = item.img
    img.height = 270

    let p = document.createElement("p")
    p.innerHTML = item.text

    section.appendChild(img)
    section.appendChild(p)
    document.querySelector(".body").appendChild(section)

})
let candles = [
    {
        color:"green",
        smell:"grass",
        used:true,
    },
    {
        color:"pink",
        smell:"stroubery",
        used:false,
    }
]
// console.log(candles.length)
for(let i=0; i<= candles.length -1; i++) {
    // console.log(candles[i].color)
}
 let number = "8"
// number--
// number -= 4
// number = number - 4
// console.log(number != 8    )
// console.log(candles.length)
// if((candles.length >= 3 )) {
    // alert("UWAGA")
// } else {
    // alert("YES")
// }
let ikeaProducs = [
    {
        price: 60,
        name: "lamp",
    },
    {
        price: 990,
        name: "bed"
    },
    {
        price: 765,
        name:"table"
    },
    {
        price: 84,
        name: "cupboard",
    },
    {
        price: 40,
        name: "cup"
    },
    {
        price: 36,
        name: "hanger"
    },
    {
        price: 22,
        name: "towel"
    },
    {
        price: 70,
        name: "plate"
    },
    {
        price: 300,
        name: "mirror"
    },
    {
        price: 432,
        name: "desk"
    }
]
for(let i=0; i<= ikeaProducs.length -1; i++) {
    if(ikeaProducs[i].price <=60) {
        console.log(ikeaProducs[i])
    
    }
}
console.log("====================")
ikeaProducs.forEach(function(viki){
    if(viki.price > 500){
        console.log(viki)
    }
})