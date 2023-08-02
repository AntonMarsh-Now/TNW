<title>Travel News</title>

<body class="body">
    
<link rel="stylesheet" type= "text/css" href="style.css">
<header class="header">  
    <div class = "maintop">
            <div class = "top">

                    <div class = "topnav">  

                         <a href="/"><img class = "logo" src = "/images/travellogo.webp" alt = "logo"></a>
                    </div>
                                <div class = "topnavend">
                                    <ul>
                                        <a href="https://facebook.com"><img class = "socialpics" src = "/images/facebook.png" alt = "facebook"></a>
                                        <a href="https://twitter.com"><img class = "socialpics" src = "/images/twitter.png" alt = "twitter"></a>
                                        <a href="/"><img class = "socialpics" src="/images/search.png" alt="search"></a>
                                    </ul>
                                </div>
            </div>
                                    
                    <div class = "topright">
                             <a href= "/" class = "sub">Subscribe Free</a>
                    </div>

                    <div class="ham" onclick="toggleClass()">
                        <h1>&#9776;</h1>
                    </div>
     </div>

        <div class="bottom">
                 <nav class="navbar">
                        <ul>
                                <li class = "navit"><a href = "/" class="navitem">News</a></li>
                                <li ><a href = "/features" class="navitem">Features</a></li>
                                <li><a href = "/travelinfo" class="navitem">Travelinfo</a></li>
                                <li><a href = "/columns" class="navitem">Columns</a></li>
                                <li><a href = "/community" class="navitem">Community</a></li>
                                <li><a href = "/sponsored" class="navitem">Sponsored</a></li>
                                <li><a href = "/contact us" class="navitem">Contact Us</a></li>
                        </ul>
                 </nav>
        </div>
</header>

    <div class ="topcontainer">
        <div class = "topadd">
            <iframe class = "blog" src = "" title = "blog"></iframe>
        </div>
    </div>
<div class = "main">
    <div class = "blogcontainer">
        <iframe class = "blog" src = "" title = "blog"></iframe>
                <iframe class = "blogadd" src = "" title = "blogadd" scrolling = "no"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
                 <iframe class = "blogadd" src = "" title = "blogadd" scrolling = "no"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <iframe class = "blog" src = "" title = "blog"></iframe>
        <button class="loadmore">Loadmore</button>

    </div>
        
            <div class = "rightside">
            
                    <div class = "featuresblock">
                        <div class = "features">Feature</div> 
                        <div class = "featuresclick"><a href = "pdf/tnflightcentreindependentminibrandedftr2aug2023.pdf" target = "blank">Click to view</a></div>
                    </div>
        
                <div class = "flightfeature"><a href = "https://">Flight Centre Independent Feature August 2023</a></div>
            
            <iframe class = "add4" src="" title = "add4" scrolling = "no"></iframe>
        </div>
        
        <div class = "rightend">
            <iframe class = "add5" src="" title = "add4" scrolling = "no"></iframe>        </div>
    </div>


<script src = "dropdown.js"></script>

</body>

<style>

    .main{
        display:flex;
        background-color: none;
        padding-top: 10px;

    }

    .topcontainer{
        height:100px;
        padding-top: 130px;
        display:flex;
        align-items: center;
        justify-content: center;
    
    }

    .topadd{
        height:85px;
        width:45em;
        display:flex;
        border: 0px solid black;
        align-items: center;
        justify-content: center;
    }

    .blogcontainer{
        width:50%;
        height:1500px;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: none;
        overflow: hidden;
       
        
    }


    .blog{
        height:87px;
        width:98%;
    }

    .blog:hover{
        background-color: rgb(237, 236, 236);
    }
    .blogadd{
        width:555px;
        height:90px;
        margin:10px;
        
        overflow: hidden;
        
    }

    .blogadd:hover{
        width:560px;

    }


    .add4{
        margin: 0px;
       margin-top: 10px;
       
        width:100%;
        height:432px ;
        overflow: hidden; 
        aspect-ratio: auto 300/600;
    }

    .add5{
       width:300px ;
       height:600px ;
       overflow: hidden;
       aspect-ratio: auto 300/600;
   }
   


    
    .loadmore{
        height:40px;
        width:70%;
        display:flex;
        border: 1px solid lightgray;
        box-shadow: 1px 0px 3px 0px gray;
        align-items: center;
        justify-content: center;
        margin:20px;
        background-color:gray;
        cursor:pointer;
        border-radius: 10px;
    }

    .loadmore:hover{
        background-color: rgb(105, 103, 103);
        box-shadow: 2px 0px 4px 0px gray;

    }

    .loadmore:active{
        background-color: rgb(105, 103, 103);
        box-shadow: 3px 2px 5px 3px rgb(110, 110, 110);
        width:39em;
        height:41px;

    }


    .featuresblock{
        border:0px solid gray;
        display: flex;
        align-self: center;
        align-content: center;
        padding-top:5px;
        padding-bottom: 5px;
        margin:0px;
        text-align: center;
       justify-content: space-between;
       background-color: #dee2e6;

    }

    .featuresclick{
        width: 70%;
        margin: 0px;
        text-align: right;
        margin-right: 2px;
        align-self: center;
    }

    .featuresclick a{
        text-decoration: none;
        color: red;
    }

    .features{
        width:20%;
        margin: 0px;
        margin-left: 2px;
        color:#00498f;
        font-weight: 700;
    }
    
    .flightfeature{
        display: flex;
        align-self: center;
        align-content: center;
        padding-top:5px;
        border:0px solid black;
        margin:0px;
        margin-top: 5px;
        text-align: center;
        align-self: center;
    }

    .flightfeature a{
        text-decoration: none;
        color:red;
        font-weight: 700;
    }

    .rightside{
        background-color: none;
        width:20%;
    }

.rightend{
    width:20%;
}


</style>
