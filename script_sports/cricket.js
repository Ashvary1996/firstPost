import { showdata, append ,date} from "../sports_components/sports_fetching.js"

const key = `d5509407951145e8bd64b0aaf9ca0cee`

let sports_qury = 'cricket'

let sports_url = `https://newsapi.org/v2/everything?q=${sports_qury}&from=${date()}&language=en&apiKey=${key}`

let data = await showdata(sports_url);

let showcase = document.getElementById("left_sports_news");

append(data, showcase);


import sp_nav from "../sports_components/sp_navbar.js";
document.getElementById("sports_navbar").innerHTML=sp_nav;

import append_side from "../sports_components/sidenews_topclass.js";
document.getElementById("right_sports_news").innerHTML=append_side;