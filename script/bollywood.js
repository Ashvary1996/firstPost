



getdataa()


async function getdataa(){


    try{
        let url=`https://newsapi.org/v2/everything?q=bollywood&pageSize=15&apiKey=fdd9ef74d3944c40b1de34bfaadbab18`

        let res= await fetch(url);
    
        let data= await res.json();
    
        console.log(data.articles)

        appen(data.articles)
        
        

    }
    catch{
        console.log("Error")
    }


}

function appen(data){

    let con=document.getElementById("mainnewsdata")
    con.innerHTML=""
   data.forEach(function(el){

    let div=document.createElement("div")

    div.style.cursor="pointer"

    

    let img=document.createElement("img")
    img.src=el.urlToImage

    if(el.urlToImage==null)
    {
        img.src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/02/19/Pictures/null_191c153a-3452-11e9-85ab-b5c6484f4b61.jpg"
    }

    let h=document.createElement("h4")
    h.innerText=el.title

    let p=document.createElement("p")
    p.innerText=el.description;

    div.addEventListener("click",function(){

       var arr=[el.url]

        localStorage.setItem("newdata",JSON.stringify(arr))
        window.open("showdata.html","_self")

        
    })

    div.append(img,h,p);

    con.append(div)


   })
        
}





mostviewz()

async function mostviewz(){

    try{
        let url=`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=fdd9ef74d3944c40b1de34bfaadbab18`

        let rest=await fetch(url);
    
        let dat=await rest.json();
    
        console.log(dat)
    
        appe(dat.articles)

    }
    catch{
        console.log("most view Error")
    }
}

let i=1;
function appe(data){

    let con=document.getElementById("musaread")
    con.innerHTML=""
   data.forEach(function(el){

    

    
        let div=document.createElement("div")

        div.innerText=i
        i++

        div.style.cursor="pointer"

    

    let h=document.createElement("h2")
    h.innerText=el.title

    let p=document.createElement("p")
    p.innerText=el.description;

    div.addEventListener("click",function(){

        let arr=el.url
        console.log(arr)
        
    })

    div.append(h,p);

    con.append(div)
        
    

    

  


   })
}

var bollywood=document.getElementById("buzz")

bollywood.addEventListener("click",sear)


function sear(){

window.open("entertainment.html","_self")


}