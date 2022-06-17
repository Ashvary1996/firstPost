

let showdata = async (url) => {
    try {
        let res = await fetch(url)
        let x = await res.json()

        let data = x.articles
        return data;
    }
    catch (err) {
        return "Error";
    }

}

let append =(data, showcase) => {
    //   showcase.innerHTML = null;

  

   data.forEach(el => {

       let div = document.createElement("div")

       let img=document.createElement("img")
       img.src=el.urlToImage

       let title = document.createElement("h2")
       title.id=""
       title.innerText = el.title
       title.addEventListener("click", function () {
           console.log(el.urlToImage)
        //    window.location.href=el.url
       })

       let content = document.createElement("p")
       content.id="des_sports"
       content.innerHTML = el.description;

    //    let publish = document.createElement("p")
    //    publish.innerText = el.publishedAt;

       let sports=document.createElement("p")
       sports.className="category-name"
       sports.innerText="SPORTS"

       let boxover=document.createElement("div")
       boxover.id="ttitlebox"

       

       boxover.append(sports,title,content)

       div.append(img,boxover)
       showcase.append(div)
      
   }); 
   
}

function date() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd
    return today
}

export { showdata, append,date }
