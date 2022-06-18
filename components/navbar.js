function navbar()
{
    return `
    <!-- Sidebar Section -->
    <div id="mySidenav" class="sidenav">
        <div class="close-sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        </div>
        <div class="tab-container">
            <div class="tab">
                <div class="tablinks active">
                    <a href="">
                        <i class="fa-solid fa-folder-open"></i>
                        <p>Sections</p>
                    </a>
                </div>
                <div class="tablinks">
                    <a href="">
                        <i class="fa-solid fa-folder-open"></i>
                        <p>More</p>
                    </a>
                </div>
                <div class="tablinks">
                    <a href="">
                        <i class="fa-solid fa-folder-open"></i>
                        <p>Shows</p>
                    </a>
                </div>
                <div class="tablinks">
                    <a href="">
                        <i class="fa-solid fa-folder-open"></i>
                        <p>F.Brands</p>
                    </a>
                </div>
            </div>
            <div id="more" class="tabcontent">
                <ul class="menu-list">
                    <li class="hamburger-events">
                        <a href="">Coronavirus Outbreak</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Board Exam Results 2022</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">India Positive In Coronavirus</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Manjul Toons</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">FREEDOM365</a>
                    </li>
                </ul>
            </div>
            <div id="shows" class="tabcontent">
                <ul class="menu-list">
                    <li class="hamburger-events">
                        <a href="">Firstpost Conversations</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">9 Months S.5</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Vanity Diaries</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Poetry Project</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Social Media Star</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">F.Originals</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Its a wrap</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Firstpost Salon</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Firstday First Showsha</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">India Ka Fashion Capital</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Firstpost Ground Report</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Our Better World</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Web Talkies</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Bowled Over</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">What the Duck</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">101 India</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Patio Unplugged</a>
                    </li>
                </ul>
            </div>
            <div id="f-brands" class="tabcontent">
                <ul class="menu-list">
                    <li class="hamburger-events">
                        <a href="">Crypto</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Tata Steel</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Budget 2022</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Meghalaya Tourism</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="">Assembly Election 2022</a>
                    </li>
                </ul>
            </div>
            <div id="section" class="tabcontent" style="display: block;">
                <ul class="menu-list">
                    <li class="hamburger-events">
                        <a href="home.html">Home</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="india.html">Health</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="india.html">India</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="world.html">World</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="politics.html">Politics</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="entertainment.html">Arts & Culture</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="auto.html">Auto</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="opinion.html">Opinion</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="sports.html">Sports</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="cricket.html">Cricket</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="entertainment.html">Entertainment</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="home.html">Tech</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="#">Photos</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="#">Videos</a>
                    </li>
                    <li class="hamburger-events">
                        <a href="#">Business</a>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="horizontal-share">
            <li>
                <a href="" class="sc-icon">
                    <img style="border-radius: 50%;" height="26"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="">
                </a>
            </li>
            <li>
                <a href="" class="sc-icon">
                    <img style="border-radius: 50%;"
                        src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
                        alt="">
                </a>
            </li>
            <li>
                <a href="" class="sc-icon">
                    <img style="border-radius: 50%;" height="26"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                        alt="">
                </a>
            </li>
            <li>
                <a href="" class="sc-icon">
                    <img style="border-radius: 50%;" height="26"
                        src="https://i.pinimg.com/originals/6a/42/04/6a4204f04496559aa27101d25983d0f0.png"
                        alt="">
                </a>
            </li>
        </ul>
    </div>


    <!-- Header Section -->
    <div class="header-sticky">
        <header>
            <div class="header-wrap container">
                <div class="hamburger-menu">
                    <div class="sidenav-menu-btn" onclick="openNav()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="logo">
                    <a href="home.html">
                        <img width="157" height="45" src="https://www.firstpost.com/static/images/fp-desk-logo.png"
                            alt="">
                    </a>
                </div>
                <div class="social-div">
                    <a href="home.html">
                        <img style="border-radius: 50%;" height="26"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="">
                    </a>
                    <a href="home.html">
                        <img style="border-radius: 50%;" height="33"
                            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
                            alt="">
                    </a>
                    <a href="home.html">
                        <img style="border-radius: 50%;" height="26"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                            alt="">
                    </a>
                    <a href="home.html">
                        <img style="border-radius: 50%;" height="26"
                            src="https://i.pinimg.com/originals/6a/42/04/6a4204f04496559aa27101d25983d0f0.png" alt="">
                    </a>
                </div>
                <div class="box">
                    <input type="checkbox" id="check">
                    <div id="mySEARCH" class="search-box">
                        <input type="text" placeholder="search">
                        <label for="check" class="icon">
                            <i class="fas fa-search"></i>
                        </label>
                    </div>
                </div>
            </div>
        </header>
        <style></style>
        <nav class="main-menu-wrap">
            <div class="menu-wrap container">
                <ul class="main-menu">
                    <li class="nav-events">
                        <a href="home.html" title="Health">Health</a>
                    </li>
                    <li class="nav-events">
                        <a href="india.html" title="India">India</a>
                    </li>
                    <li class="nav-events">
                        <a href="world.html" title="World">World</a>
                    </li>
                    <li class="nav-events">
                        <a href="politics.html" title="Politics">Politics</a>
                    </li>
                    <li class="nav-events">
                        <a href="auto.html" title="Auto">Auto</a>
                    </li>
                    <li class="nav-events">
                        <a href="opinion.html" title="Opinion">Opinion</a>
                    </li>
                    <li class="nav-events">
                        <a href="sports.html" title="Sports">Sports</a>
                    </li>
                    <li class="nav-events">
                        <a href="cricket.html" title="Cricket">Cricket</a>
                    </li>
                    <li class="nav-events">
                        <a href="entertainment.html" title="Entertainment">Entertainment</a>
                    </li>
                    <li class="nav-events">
                        <a href="home.html" title="Tech">Tech</a>
                    </li>
                </ul>
                <ul class="sub-menu">
                    <li class="nav-events">
                        <a href="https://www.firstpost.com/tag/cryptocurrency" class="total">
                            <strong>Crypto</strong>
                        </a>
                    </li>
                    <li class="hdfc-events">
                        <a href="https://www.news18.com/netrasuraksha/">
                            <img width="103" height="25"
                                src="https://www.firstpost.com/static/images/netrasuraksha_L2_103x25px.jpg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <!-- Main Section -->
    

    
    `
}

function footer()
{
    return `<!-- Footer Section -->
    <footer class="footer">
        <div class="container">
            <div class="footer-main">
                <a href="">
                    <img width="116" height="33" src="https://www.firstpost.com/static/images/fp-logo.png" alt="">
                </a>
                <ul class="horizontal-share">
                    <li>
                        <a href="" class="sc-icon">
                            <img style="border-radius: 50%;" height="26"
                                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="" class="sc-icon">
                            <img style="border-radius: 50%;"
                                src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
                                alt="">
                        </a>
                    </li>
                    <li>
                        <a href="" class="sc-icon">
                            <img style="border-radius: 50%;" height="26"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                                alt="">
                        </a>
                    </li>
                    <li>
                        <a href="" class="sc-icon">
                            <img style="border-radius: 50%;" height="26"
                                src="https://i.pinimg.com/originals/6a/42/04/6a4204f04496559aa27101d25983d0f0.png"
                                alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer-link-wrap">
                <div class="footer-column">
                    <p class="footer-heading">Firstpost</p>
                    <ul class="footer-links">
                        <li><a href="">About Firstpost</a></li>
                        <li><a href="">Press Release</a></li>
                        <li><a href="">RSS</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Facebook</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <p class="footer-heading">Section</p>
                    <ul class="footer-links">
                        <li>
                            <a href="home.html">Front Page</a>
                        </li>
                        <li>
                            <a href="politics">Politics</a>
                        </li>
                        <li>
                            <a href="sports.html">Sports</a>
                        </li>
                        <li>
                            <a href="india.html">India</a>
                        </li>
                        <li>
                            <a href="world.html">World</a>
                        </li>
                        <li>
                            <a href="">Business</a>
                        </li>
                        <li>
                            <a href="entertainment.html">Entertainment News</a>
                        </li>
                        <li>
                            <a href="cricket.html">Cricket</a>
                        </li>
                        <li>
                            <a href="home.html">Tech</a>
                        </li>
                        <li>
                            <a href="home.html">Health</a>
                        </li>
                        <li>
                            <a href="">Photos</a>
                        </li>
                        <li>
                            <a href="">Videos</a>
                        </li>
                        <li>
                            <a href="">Press Release</a>
                        </li>
                        <li>
                            <a href="entertainment.html">Firstculture</a>
                        </li>
                        <li>
                            <a href="">Long Reads</a>
                        </li>
                        <li>
                            <a href="">Latest Mobiles</a>
                        </li>
                        <li>
                            <a href="">Latest Tablets</a>
                        </li>
                        <li>
                            <a href="">Latest Laptops</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-column">
                    <p class="footer-heading">Plus</p>
                    <ul class="footer-links">
                        <li>
                            <a href="">Cricket Live Score</a>
                        </li>
                        <li>
                            <a href="">New Delhi</a>
                        </li>
                        <li>
                            <a href="">Mumbai</a>
                        </li>
                        <li>
                            <a href="">Fp Exclusives</a>
                        </li>
                        <li>
                            <a href="">Board Exam Results 2020</a>
                        </li>
                        <li>
                            <a href="">Ipl 2020</a>
                        </li>
                        <li>
                            <a href="">Coronavirus</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-column">
                    <p class="footer-heading">Tools</p>
                    <ul class="footer-links">
                        <li>
                            <a href="">Rss Feeds</a>
                        </li>
                    </ul>
                    <p class="footer-heading">Apps</p>
                    <ul class="footer-links">
                        <li>
                            <a href="">Ios</a>
                        </li>
                        <li>
                            <a href="">Android</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="other-sites">
                <p class="company-name">
                    Network18 sites
                    <svg viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                    </svg>
                </p>
                <ul class="other-sites-links">
                    <li>
                        <a href="">Moneycontrol</a>
                    </li>
                    <li>
                        <a href="">News18</a>
                    </li>
                    <li>
                        <a href="">CNBC TV18</a>
                    </li>
                    <li>
                        <a href="">Overdrive</a>
                    </li>
                    <li>
                        <a href="">Forbes India</a>
                    </li>
                    <li>
                        <a href="">TopperLearning</a>
                    </li>
                </ul>
            </div>
            <p class="copywrite">
                Copyright © 2022.
                <a href="">Firstpost</a>
                - All Rights Reserved.
            </p>
            <ul class="tnc-links">
                <li>
                    <a href="">Terms of use</a>
                </li>
                <li>
                    <a href="">Privacy</a>
                </li>
                <li>
                    <a href="">Cookie Policy</a>
                </li>
            </ul>
        </div>
    </footer>`
}

// export default navbar
export {navbar,footer}