<script>
  import { onMount } from "svelte";
  import { supabase } from "../lib/supabase/supabaseCLient";

  let blogs = [];
  let loading = true;

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase.from("blogs").select("*");

      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.log("an enexpected error occured");
    }
  };

  onMount(async () => {
    await fetchBlogs().then((data) => {
      blogs = data;
      loading = false;
    });
  });
</script>

<title>Travel News</title>

<body class="body">
  <link rel="stylesheet" type="text/css" href="style.css" />
  <header id="header">
    <div id="maintop">
      <div id="top">
        <div id="topnav">
          <a href="/"
            ><img id="logo" src="/images/travellogo.webp" alt="logo" /></a
          >
        </div>
        <div id="topnavend">
          <ul>
            <a href="https://facebook.com"
              ><img
                id="socialpics"
                src="/images/facebook.png"
                alt="facebook"
              /></a
            >
            <a href="https://twitter.com"
              ><img
                id="socialpics"
                src="/images/twitter.png"
                alt="twitter"
              /></a
            >
            <a href="/"
              ><img id="socialpics" src="/images/search.png" alt="search" /></a
            >
          </ul>
        </div>
      </div>

      <div id="topright">
        <a href="/" id="sub">Subscribe Free</a>
      </div>

      <div class="ham" onclick="toggleClass()">
        <h1>&#9776;</h1>
      </div>
    </div>

    <div id="bottom">
      <nav id="navbar">
        <ul>
          <li class="navit"><a href="/" id="navitem">News</a></li>
          <li><a href="/features" id="navitem">Features</a></li>
          <li><a href="/travelinfo" id="navitem">Travelinfo</a></li>
          <li><a href="/columns" id="navitem">Columns</a></li>
          <li><a href="/community" id="navitem">Community</a></li>
          <li><a href="/sponsored" id="navitem">Sponsored</a></li>
          <li><a href="/contact us" id="navitem">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="topcontainer">
    <div id="leaderboard" class="col-16">
      <div
        class="region region-leaderboard d-flex flex-wrap justify-content-center"
      >
        <div class="revive-item">
          <div
            id="block-ftra-advertisement-leaderboard"
            class="block block-ftra-advertisement"
          >
            <div class="content">
              <ins
                data-revive-id="5aab8581fc0b61410f72c153e0e71db5"
                data-revive-zoneid="559"
                data-revive-seq="0"
                id="revive-0-0"
                data-revive-loaded="1"
                style="text-decoration: none;"
                ><a
                  href="https://nmas.nowmedia.co.za/www/delivery/cl.php?bannerid=21371&amp;zoneid=559&amp;sig=970d34e7c9e78c79ac31fb62b330b13be2a3f756a57740c9bcd46f437a229a00&amp;oadest=https%3A%2F%2Fwww.flyairlink.com%2Fen-za%2Fflights-to-malawi%3Futm_source%3DTNW%26utm_medium%3Ddisplay%26utm_campaign%3DTNW%2BAug%2B2023%2B-%2BMalawi"
                  target="_blank"
                  ><img
                    src="https://nmas.nowmedia.co.za//www/images/ec7ea082b42b99a88a54358f4db16b69.gif"
                    width="728"
                    height="90"
                    alt=""
                    title=""
                    border="0"
                  /></a
                >
                <div
                  id="beacon_dcea094fab"
                  style="position: absolute; left: 0px; top: 0px; visibility: hidden;"
                >
                  <img
                    src="https://nmas.nowmedia.co.za/www/delivery/lg.php?bannerid=21371&amp;campaignid=18380&amp;zoneid=559&amp;loc=https%3A%2F%2Fwww.travelnews.co.za%2F&amp;referer=https%3A%2F%2Fwww.google.com%2F&amp;cb=dcea094fab"
                    width="0"
                    height="0"
                    alt=""
                    style="width: 0px; height: 0px;"
                  />
                </div></ins
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main">
    <div class="blogcontainer" />
    {#if !loading}
      <div>{blogs[0].title}</div>
      {#each blogs as blog}
        <div>{blog.title}</div>
        <div>{blog.author}</div>
        <div>{blog.category}</div>
        <div>{blog.images}</div>
      {/each}
    {:else}
      <div>loading</div>
    {/if}
    <div class="rightside">
      <div class="featuresblock">
        <div class="features">Feature</div>
        <div class="featuresclick">
          <a
            href="pdf/tnflightcentreindependentminibrandedftr2aug2023.pdf"
            target="blank">Click to view</a
          >
        </div>
      </div>

      <div class="flightfeature">
        <a href="https://">Flight Centre Independent Feature August 2023</a>
      </div>

      <iframe
        class="add4"
        src="images/tn-flight-centre-independent-mini-branded-ftr-2-aug-2023-cover.png"
        title="add4"
        scrolling="no"
      />
    </div>

    <div class="rightend">
      <iframe
        class="add5"
        src="https://nmas.nowmedia.co.za//www/images/c6c6031c3f890dfff3196b4bf03193b3.gif"
        title="add4"
        scrolling="no"
      />
      <iframe
        class="add6"
        src="https://nmas.nowmedia.co.za//www/images/b63f5a95a965a429999f87ee4afea613.jpg"
        title="add6"
        scrolling="no"
      />
      <iframe
        class="add7"
        src="https://nmas.nowmedia.co.za//www/images/d222b5b54b192349813e273160595df8.gif"
        title="add7"
        scrolling="no"
      />
    </div>
  </div>

  <div class="footer">
    <div class="leftfoot">
      <ul>
        <li><a href="https://www.nowmedia.co.za">&#169 Now Media</a></li>
        <li><a href="privacy policy/+page.svelte">Privacy Policy</a></li>
      </ul>
    </div>

    <div class="rightfoot">
      <ul>
        <li>
          <a href="https://facebook.com" target="blank"
            ><img
              class="footsocial"
              src="/images/facebook.png"
              alt="facebook"
            /></a
          >
        </li>
        <li>
          <a href="https://twitter.com" target="blank"
            ><img
              class="footsocial"
              src="/images/twitter.png"
              alt="twitter"
            /></a
          >
        </li>
        <li>
          <a href="/" target="blank"
            ><img class="footsocialwifi" src="/images/wifi.png" alt="rss" /></a
          >
        </li>
        <li><a href="/">Contact Us</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Advertise</a></li>
        <li><a href="/">Send us News</a></li>
        <li><a href="https://tnw-cms.vercel.app/"> Admin Portal</a></li>
      </ul>
    </div>
  </div>

  <script src="dropdown.js"></script>
</body>

<style>
  .main {
    display: flex;
    background-color: none;
    padding-top: 10px;
  }

  .topcontainer {
    height: 100px;
    padding-top: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blogcontainer {
    width: 50%;
    height: 1500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: none;
    overflow: hidden;
  }

  .blog {
    display: flex;
    height: 87px;
    width: 98%;
    border: 0px solid black;
    margin: 1px;
    border-radius: 10px;
    background-color: #dee2e6;
  }

  .blog:hover {
    background-color: rgb(237, 236, 236);
  }
  .blogadd {
    width: 555px;
    height: 90px;
    margin: 10px;
    overflow: hidden;
  }

  .blogadd:hover {
    width: 560px;
  }

  .blogpicture {
    background-color: rgb(196, 194, 194);
    width: 20%;
    border-radius: 10px;
    margin: 0px;
    overflow: hidden;
  }

  .blogpics {
    height: 100%;
    margin: 0px;
    width: 100%;
  }

  .blogpicture .blogpics:hover {
    transform: scale(1.1);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  }

  .blogpics {
    height: 110%;
    margin: 0px;
    width: 110%;
  }

  .bloginfo {
    font-size: 15px;
    height: 85%;
    width: 80%;
    margin: 0px;
    border-radius: 10px;
    align-self: center;
  }
  .add4 {
    margin: 0px;
    margin-top: 10px;

    width: 100%;
    height: 432px;
    overflow: hidden;
    aspect-ratio: auto 300/600;
  }

  .add5 {
    width: 300px;
    height: 600px;
    overflow: hidden;
    aspect-ratio: auto 300/600;
  }

  .add6 {
    margin-top: 5px;
    width: 300px;
    height: 300px;
    overflow: hidden;
    aspect-ratio: auto 300/600;
  }

  .add7 {
    margin-top: 5px;
    width: 300px;
    height: 300px;
    overflow: hidden;
    aspect-ratio: auto 300/600;
  }

  .loadmore {
    height: 40px;
    width: 70%;
    display: flex;
    border: 1px solid lightgray;
    box-shadow: 1px 0px 3px 0px gray;
    align-items: center;
    justify-content: center;
    margin: 20px;
    background-color: gray;
    cursor: pointer;
    border-radius: 10px;
  }

  .loadmore:hover {
    background-color: rgb(105, 103, 103);
    box-shadow: 2px 0px 4px 0px gray;
  }

  .loadmore:active {
    background-color: rgb(105, 103, 103);
    box-shadow: 3px 2px 5px 3px rgb(110, 110, 110);
    width: 39em;
    height: 41px;
  }

  .featuresblock {
    border: 0px solid gray;
    display: flex;
    align-self: center;
    align-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0px;
    text-align: center;
    justify-content: space-between;
    background-color: #dee2e6;
  }

  .featuresclick {
    width: 70%;
    margin: 0px;
    text-align: right;
    margin-right: 2px;
    align-self: center;
  }

  .featuresclick a {
    text-decoration: none;
    color: red;
  }

  .features {
    width: 20%;
    margin: 0px;
    margin-left: 2px;
    color: #00498f;
    font-weight: 700;
  }

  .flightfeature {
    display: flex;
    align-self: center;
    align-content: center;
    padding-top: 5px;
    border: 0px solid black;
    margin: 0px;
    margin-top: 5px;
    text-align: center;
    align-self: center;
  }

  .flightfeature a {
    text-decoration: none;
    color: red;
    font-weight: 700;
  }

  .rightside {
    background-color: none;
    width: 20%;
  }

  .rightend {
    width: 20%;
  }

  .footer {
    display: flex;
    background-color: #dee2e6;
    justify-content: space-between;
    list-style: none;
  }

  .rightfoot ul {
    display: flex;
    text-decoration: none;
    list-style: none;
    font-size: 12px;
  }

  .rightfoot ul li {
    margin: 0px;
    align-self: center;
    padding: 10px 0px;
    border: 0px;
  }
  .rightfoot ul li a {
    text-decoration: none;
    color: #00498f;
  }

  .leftfoot {
    align-self: center;
  }

  .leftfoot ul {
    display: flex;
    list-style: none;
    margin: 0px;
    font-size: 12px;
  }

  .leftfoot ul li {
    margin: 0px;
    padding: 10px 0px;
  }
  .leftfoot ul li a {
    text-decoration: none;
    color: #00498f;
  }

  .leftfoot ul li:hover {
    background-color: #90c2f1;
  }

  .leftfoot ul li a:hover {
    color: white;
  }

  .rightfoot ul li a:hover {
    color: white;
  }
  .footsocialwifi {
    height: 14px;
    margin: 0px;
    border: 0px;
  }

  .footsocial {
    height: 14px;
    margin: 0px;
    border: 0px;
  }

  .rightfoot ul li:hover {
    background-color: #90c2f1;
    color: white;
  }
</style>
