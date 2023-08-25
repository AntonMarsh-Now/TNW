<script>
  import { onMount } from "svelte";
  import { supabase } from "../lib/supabase/supabaseCLient";
  let count = 13;

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

  let promotions = [];

  const fetchPromotions = async () => {
    try {
      const { data, error } = await supabase.from("promotions").select("*");

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
    await fetchPromotions().then((data) => {
      promotions = data;
      loading = false;
    });
  });
</script>

<title>Travel News</title>

<body class="body">
  <script src="BlogCard.js"></script>
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
      <div class="back">
        <a href="https://go4itafrica.com"
          ><img src="/images/back.png" alt="" /></a
        >
      </div>
      <div class="ham" onclick="toggleClass()">
        <h1>&#9776;</h1>
      </div>
    </div>

    <div id="bottom">
      <nav id="navbar">
        <ul>
          <li><a href="/" id="navitem">News</a></li>
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
    {#if !loading}
      {#each promotions as promotions}
        <div id="topadd">
          <img id="topaddimage" src={promotions.image} alt="img" />
        </div>
      {/each}
    {:else}
      <div>loading...</div>
    {/if}
  </div>
  <div class="main">
    <div id="blogcontainer" onclick="myFunction()">
      {#if !loading}
        {#each blogs.slice(0, count) as blog}
          <a href={`/blogs/${blog.id}`} id="blogs">
            <div id="blogimagesblock">
              <img id="images" src={blog.blog_bg} alt="img" />
            </div>
            <div id="content1">{blog.title}</div>
            <div id="content2">{blog.author}</div>
            <div id="content3">{blog.category}</div>
          </a>
        {/each}
      {:else}
        <div>loading...</div>
      {/if}

      <button
        class="button"
        on:click={() => {
          count += count;
        }}
        >load more
      </button>
    </div>
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
      <div class="add5">
        <img
          src="https://nmas.nowmedia.co.za//www/images/c6c6031c3f890dfff3196b4bf03193b3.gif"
          alt="img"
        />
      </div>
      <div class="sticky">
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
        <li>
          <a href="https://tnw-cms.vercel.app/" target="_blank">
            Admin Portal</a
          >
        </li>
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
    height: 0px;
    padding: 60px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #blogs {
    max-height: 100px;
    display: flex;
    background-color: none;
    padding: 0px;
    margin: 10px;
  }

  #blogs:hover {
    background-color: #e9e9e9;
  }

  #blogcontainer {
    width: 54%;
    display: flex;
    flex-direction: column;
    height: auto;
  }

  #blogcontainer a {
    text-decoration: none;
    color: black;
  }

  #topaddimage {
    border-radius: 0px;
  }

  #images {
    width: fit-content;
    height: 100%;
    margin: 0px;
    padding: 2px;
    border-radius: 0px;
  }

  #content1 {
    width: 70%;
    margin-top: 5px;
    margin-left: 15px;
    color: #1d1e1f;
  }

  #content2 {
    width: 10%;
    margin-top: 15px;
    color: #7c7d7d;
  }

  #content3 {
    width: 10%;
    margin-top: 15px;
    color: #7c7d7d;
  }

  #images:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
  #blogimagesblock {
    width: 18%;
    height: 100px;
    overflow: hidden;
    margin: 0px;
    border-radius: 0px;
    overflow: hidden;
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

  .sticky {
    position: sticky;
    top: 112px;
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
    margin-left: 20px;
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
    margin-right: 100px;
  }

  .rightfoot ul li {
    margin: 0px;
    align-self: center;
    padding: 10px 10px;
    border: 0px;
    font-weight: 600;
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
    margin-left: 100px;
    font-size: 12px;
  }

  .leftfoot ul li {
    margin: 0px;
    padding: 10px 20px;
    font-weight: 600;
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

  .button {
    margin: auto;
    width: 95%;
    border: none;
    background-color: #75797c;
    border-color: #545b62;
    color: white;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 40px;
  }
  .button:hover {
    background-color: #545b62;
  }

  .back a {
    cursor: default;
  }

  @media only screen and (max-width: 900px) {
    .rightside {
      display: none;
    }
    .add5 {
      width: 170px;
      height: auto;
    }

    .rightend {
      width: 30%;
      justify-content: right;
    }

    .main {
      justify-content: space-between;
    }

    #blogcontainer {
      width: 70%;
    }

    #blogs {
      font-size: medium;
    }
  }
</style>
