<script>
  import { page } from "$app/stores";

  const id = $page.url.pathname.substr($page.url.pathname.lastIndexOf("/") + 1);

  import { onMount } from "svelte";
  import { supabase } from "../../../lib/supabase/supabaseCLient";

  let blog;
  let loading = true;

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id);

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
      blog = data[0];
      loading = false;
    });
  });
</script>

<title>Travel News</title>

<body class="body">
  <link rel="stylesheet" type="text/css" href="/style.css" />
  <link rel="stylesheet" type="text/css" href="/blog.css" />
  <script src="BlogCard.js"></script>
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
    <img src="/images/TNW-ele.gif" alt="add" />
  </div>

  <div class="main">
    <div id="blogcontainer">
      {#if !loading}
        <div id="blogtitle">{blog.title}</div>
        <img id="blogimage" src={blog.blog_bg} alt="img" height="320px" />
        <div>
          {#each blog.blog_content.split("\n") as paragraph}
            <div class="para">{paragraph}</div>
          {/each}
        </div>
        <div>{blog.author}</div>
        <div>{blog.category}</div>
        <div>
          <img id="bloggallery" src={blog.images} alt="" height="250px" />
        </div>
      {:else}
        <div>loading...</div>
      {/if}
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
        src="/images/tn-flight-centre-independent-mini-branded-ftr-2-aug-2023-cover.png"
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
  .para {
    margin-bottom: 20px;
  }

  #bloggallery {
    margin: 50px 2px;
  }

  .sticky {
    position: sticky;
    top: 112px;
  }
</style>
