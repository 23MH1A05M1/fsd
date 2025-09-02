 var cards=[
      { 
        img:"./ninja_hatori.jpg",                   
        Name:"Ninja Hatori",
        chanel:"Sonic"
            
        },
        {   
        img:"./doremon.jpg",
        Name:"Doremon",
        chanel:"Disney"
            
        },
        {   
        img:"./motupatulu.png",
        Name:"Motu patulu",
        chanel:"Nick"
            
        },
        {   
        img :"./shinchan.jpeg",
        Name:"Shinchan",
        chanel:"Hungama"
            
        },
        {   
        img:"./dora.jpg",
        Name:"Dora",
        chanel:"Nickjr."
            
        },
    ];

        var final=cards.map(ele=>{
           return( `
            <div class="cards">
                <div class="img-section">
                    <img src="${ele.img}">
                </div>
                <div class="information">
                    <div class="name">Cartoon Name:${ele.Name}</div>
                    <div class="chanel">Chanel:${ele.chanel}</div>
                </div>
            </div>`)
        }).join("");
        document.getElementsByClassName("cards-parent")[0].innerHTML=final;
        // document.innerHTML=final[0].value;
        console.log(final);