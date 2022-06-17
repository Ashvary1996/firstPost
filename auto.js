
// let url = `https://newsapi.org/v2/everything?q=politics&from=2022-05-15&sortBy=publishedAt&language=en&apiKey=814c30c02a5b466e9ad3cbb9742b6bfb`;

// let getdata = async () =>{

//     let res = await fetch(url);
//     let data = await res.json();
//     appenddata(data.articles);
//     console.log(data.articles);
// }

// getdata();



let politic_data = [

    {Image: "https://www.firstpost.com/wp-content/uploads/2022/06/Toyota-is-set-to-launch-3-new-SUVs-and-1-new-MPV-in-India-this-year.jpg?impolicy=website&width=640&height=362",
    headline:"Toyota is set to launch 3 new SUVs and 1 new MPV in India this year",
    description:"In a bid to consolidate its position in the Indian market, Japanese automaker Toyota will be launching at least 3 new SUVs and 1 new MPV this year. These include the Hyryder, Land Cruiser, Innova Hycross and the new generation of the urban cruiser."},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/06/Interiors-of-Upcoming-2022-Mahindra-Scorpio-N-officially-revealed-ahead-of-launch-2.jpg?impolicy=website&width=640&height=362",
    headline:"Interiors of Upcoming 2022 Mahindra Scorpio-N officially revealed ahead of launch",
    description:"Interiors of Upcoming 2022 Mahindra Scorpio-N officially revealed ahead of launch"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/06/Mahindra-XUV300-will-soon-be-getting-an-all-new-version-in-India.jpg?impolicy=website&width=640&height=362",
    headline:"Mahindra XUV300 will soon be getting an all new version in India, with more powerful engine",
    description:"Mahindra is all likely to launch a new version of the XUV300, called the Sportz Edition, in a couple of weeks. The new version will come with a new and more powerful engine, and if rumours are to be believed, a mild hybrid system as well."},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/06/wuling-air-ev-1.jpg?impolicy=website&width=640&height=362",
    headline:"MG Motors’ entry-level EV for India uncovered, will be priced around Rs 10 Lakh",
    description:"MG Motors India is planning to launch an ultra affordable EV sometime next year, which would cost about Rs 10 Lakhs. The upcoming EV will be based on a kei-car design, with 2 sliding doors, and 39bhp drive train."},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/06/ezgif1.jpg?impolicy=website&width=640&height=362",
    headline:"https://www.firstpost.com/wp-content/uploads/2022/06/ezgif1.jpg?impolicy=website&width=640&height=362",
    description:"https://www.firstpost.com/wp-content/uploads/2022/06/ezgif1.jpg?impolicy=website&width=640&height=362"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/06/Porsche-Approved.jpg?impolicy=website&width=640&height=362",
    headline:"Porsche Approved pre-owned vehicle programme launched in India",
    description:"Porsche hopes to reassure car buyers interested in purchasing pre-owned models with the help of this new business venture"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/03/electric-vehicles.jpg?impolicy=website&width=640&height=362",
    headline:"Building smart electric vehicles from scratch",
    description:"Over the last decade, India has witnessed many types of electric vehicles"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/06/Mercedes-Benz-recalls-one-million-cars-mainly-SUVs-and-minivans-over-fear-of-faulty-brakes-1.jpg?impolicy=website&width=640&height=362",
    headline:"Mercedes Benz recalls one million cars, mainly SUVs and minivans, over fear of faulty brakes",
    description:"Mercedes Benz recalls one million cars, mainly SUVs and minivans, over fear of faulty brakes"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/05/Hindustan-Amdassador1.jpg?impolicy=website&width=640&height=362",
    headline:"Iconic Hindustan Ambassador to return in new avatar in 2 years; all you need to know",
    description:"According to media reports, the joint venture between Hindustan Motors and Peugeot is in 'advanced stage' and Ambassador 2.0 is set to roll out in two years"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/05/Uber.jpg?impolicy=website&width=640&height=362",
    headline:"https://www.firstpost.com/wp-content/uploads/2022/05/Uber.jpg?impolicy=website&width=640&height=362",
    description:"https://www.firstpost.com/wp-content/uploads/2022/05/Uber.jpg?impolicy=website&width=640&height=362"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/05/Helmet-fine.jpg?impolicy=website&width=640&height=362",
    headline:"Helmets worn without fastened strap or BIS certification to attract fine of up to Rs 2,000",
    description:"Helmets worn without fastened strap or BIS certification to attract fine of up to Rs 2,000"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/05/Keeway.jpg?impolicy=website&width=640&height=362",
    headline:"https://www.firstpost.com/wp-content/uploads/2022/05/Keeway.jpg?impolicy=website&width=640&height=362",
    description:"All three products from Keeway will come to India via the Completely Knocked Down (CKD) route"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/05/Tata-Nexon-EV-Max-5.jpg?impolicy=website&width=640&height=362",
    headline:"https://www.firstpost.com/wp-content/uploads/2022/05/Tata-Nexon-EV-Max-5.jpg?impolicy=website&width=640&height=362",
    description:"Does the Tata Nexon EV Max make a stronger case for an affordable yet usable electric car over the standard version of the Nexon EV? We took it for a spin recently to answer that question for you!"},
    {Image: "https://www.firstpost.com/wp-content/uploads/2022/05/EV-Fire.jpg?impolicy=website&width=640&height=362",
    headline:"Could EV makers be sending higher quality cells for testing while using lower quality ones?",
    description:"An exclusive investigation by CNBC-TV18 shows signs that some EV makers could be making use of such practices"}

]






let appenddata = (politic_data) =>{
    let cont = document.getElementById("politic_cont");
    politic_data.forEach(element => {

        let box = document.createElement("div");
       
        // IMAGE DATA
        let politic_imgdiv = document.createElement("div")
        politic_imgdiv.setAttribute("id","politic_imgdiv")
        let a = document.createElement("img");
        a.src = element.Image;
        a.setAttribute("id","politic_img")


        // HEADING AND DESCRIPTION
        let bottom_div = document.createElement("div")
        bottom_div.setAttribute("id","heading_div")

        let name = document.createElement("p");
        name.innerText = "AUTO"
        name.setAttribute("id","name_wali_id")


        let b = document.createElement("h2");
        b.innerText = element.headline;

        let c = document.createElement("p");
        c.innerText = element.description;


        politic_imgdiv.append(a);
        bottom_div.append(name,b,c)


        box.append(politic_imgdiv,bottom_div);

        cont.append(box);


    });
}

appenddata(politic_data);