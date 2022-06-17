let search=async ()=>{
    try{
    
        const url=`https:masai-mock-api.herokuapp.com/news/top-headlines?country=in`
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.articles);
        append(data.articles);
      
    }
    catch(err){
        console.log(err);
    }
}
search();

let srch=async ()=>{
    try{
    
        const url=`https:masai-mock-api.herokuapp.com/news/top-headlines?country=ch`
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.articles);
        app(data.articles);
      
    }
    catch(err){
        console.log(err);
    }
}
srch();



function append(data){
    let news_result=document.getElementById("news_result");
    data.forEach((el)=>{
        
        let image=document.createElement("img");
        image.src=el.urlToImage;
        
        let title=document.createElement("h3")
        title.innerText=el.title;

        // let src=document.createElement("h2");
        // src.innerText=el.url;
      

        let div=document.createElement("div");
        div.append(title,image);

        news_result.append(div);
        
    });
}



function app(data){
    
    data.forEach((el)=>{
        
        let image=document.createElement("img");
        image.src=el.urlToImage;
      
        let title=document.createElement("h3")
        title.innerText=el.title;

        // let src=document.createElement("h2");
        // src.innerText=el.url;
      
        
        let div=document.createElement("div");
        div.append(title,image);

        side_news.append(div);
        
    });
}