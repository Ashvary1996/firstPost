
let  url = `https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=814c30c02a5b466e9ad3cbb9742b6bfb`

let getdata = async () =>{

    let res = await fetch(url);
    let data = await res.json();
    appenddata(data.articles);
    console.log(data.articles);
}

getdata();



// let politic_data = [

//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/fpranking/1654743021831.jpg?impolicy=website&width=640&height=362",
//     title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/Nadda1.jpg?impolicy=website&width=640&height=362",
//     title:"Bengal BJP's infighting comes to the fore amid JP Nadda's visit",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/TKS-Elangovan-2.jpg?impolicy=website&width=640&height=362",
//     title:"Bengal BJP's infighting comes to the fore amid JP Nadda's visit",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/large_file_plugin/2020/11/1606734684_KSEshwarappapti.jpeg?impolicy=website&width=640&height=362",
//     title:"BJP MLA Eshwarappa has reportedly said the saffron flag has been respected for thousands of years and it will become the national flag one day",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/04/Rajnath-Singh11.jpg?impolicy=website&width=640&height=362",
//     title:"Singh made the calls to Congress' Mallikarjun Kharge and Akhilesh Yadav besides some other leaders on a day when leaders of 17 opposition parties met in New Delhi to build a consensus on a joint Opposition candidate",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/rsz_opposition_meet_president.jpg?impolicy=website&width=640&height=362",title:"Farooq Abdullah is the former chief minister of Jammu and Kashmir. Mahatma Gandhi's grandson Gopalkrishna Gandhi served as the governor of West Bengal",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/01/Rashtrapati-Bhavan-2.jpg?impolicy=website&width=640&height=362",title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/Sheikh-Hussain1.jpg?impolicy=website&width=640&height=362",title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/pen.jpg?impolicy=website&width=640&height=362",
//     title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/04/Untitled-design-127.jpg?impolicy=website&width=640&height=362",title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/pawar-mamata.jpg?impolicy=website&width=640&height=362",title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/Rahul-Gandhi-1.jpg?impolicy=website&width=640&height=362",title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/Amit-Shah-meeting11.jpg?impolicy=website&width=640&height=362",title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/aaditya2.jpg?impolicy=website&width=640&height=362",
//     title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/Lawrence-Bishnoi11.jpg?impolicy=website&width=640&height=362",title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/05/Sonia-Gandhi-and-Rahul-Gandhi1.jpg?impolicy=website&width=640&height=362",title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/ajit-pawar1.jpg?impolicy=website&width=640&height=362",
//     title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/large_file_plugin/2020/09/1600001265_sitaram-yechury-pti-875.jpg?impolicy=website&width=640&height=362",
//     title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2022/06/Kerala-CM11.jpg?impolicy=website&width=640&height=362",
//     title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
//     {urlToImage: "https://urlToImages.firstpost.com/wp-content/uploads/2018/08/kolkata-high-court.jpg?impolicy=website&width=640&height=362",title:"Chattisgarh: Bhupesh Baghel accuses Centre of misusing agencies to suppress Opposition",
//     description:"The ED on Friday issued a fresh summons to Sonia Gandhi asking her to appear on 23 June for questioning in connection with the National Herald money laundering case"},
// ]






let appenddata = (politic_data) =>{
    let cont = document.getElementById("politic_cont");
    politic_data.forEach(element => {

        let box = document.createElement("div");
       
        // urlToImage DATA
        let politic_imgdiv = document.createElement("div")
        politic_imgdiv.setAttribute("id","politic_imgdiv")
        let a = document.createElement("img");
        a.src = element.urlToImage;
        a.setAttribute("id","politic_img")
        if(element.urlToImage == null)
        {
            a.src = "data:urlToImage/png;base64,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"
        }


        // HEADING AND DESCRIPTION
        let bottom_div = document.createElement("div")
        bottom_div.setAttribute("id","heading_div")

        let name = document.createElement("p");
        name.innerText = "POLITICS"
        name.setAttribute("id","name_wali_id")


        let b = document.createElement("h2");
        b.innerText = element.title;

        let c = document.createElement("p");
        c.innerText = element.description;


        politic_imgdiv.append(a);
        bottom_div.append(name,b,c)


        box.append(politic_imgdiv,bottom_div);

        cont.append(box);


    });
}

// appenddata(politic_data);