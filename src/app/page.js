import Head from "next/head";
import Script from "next/script";
import "../../public/style.css";
import "../../public/css/style-grocery-price.css";
import "../../public/css/style-currency.css";
import Image from "next/image";
import { Suspense } from "react";

async function BreakingList({ promise }) {
  const res = await promise;
  const data = res.data.slice(0, 14);
  return (
    <ul>
      {data.map((ob, i) => (
        <li key={ob.id}>{ob.attributes.content}</li>
      ))}
    </ul>
  );
}

async function FeaturedPinnedPostedList({ promise }) {
  const data = await promise;
  
    
  return (
    <section className="hero--area section-padding-80">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <!-- Section Heading --> */}
          <div className="section-heading">
            <h4>ابرز الاخبار</h4>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
    <div className="col-12 col-md-7 col-lg-8">
      <div className="tab-content">
        {data.data.map((ob,i) => (
          <div
            key={ob.id}
            className={"tab-pane fade "+(i==0? "active show" :"")}
            id={"post-" + ob.id}
            role="tabpanel"
            aria-labelledby={"post-"+ob.id+"-tab"}
          >
            <div
              className="single-feature-post video-post bg-img"
              style={{
                backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url})`,
              }}
            >
              {/* <!-- Post Content --> */}
              <div className="post-content">
                <a href="#" className="post-cata">
                  {ob.attributes.zone}
                </a>

                <a href="single-post.html" className="post-title">
                  {ob.attributes.title}
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
     <div className="col-12 col-md-5 col-lg-4">
                <ul className="nav vizew-nav-tab" role="tablist">
    {data.data.map((ob,i) => (
     
                  <li key={ob.id} className="nav-item">
                  
                    <a
                      className={"nav-link "+(i==0? "active show" :"")}
                      id={"post-"+ ob.id+"-tab"}
                      data-toggle="pill"
                      href={"#post-" +  ob.id}
                      role="tab"
                      aria-controls={"post-" + ob.id}
                      aria-selected={i==0? "true" : "false"}
                    >
                      {/* <!-- Single Blog Post --> */}
                      <div className="single-blog-post style-2 d-flex align-items-center">
                        <div className="post-thumbnail">
                        <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} width={100}  height={100} alt={ob.attributes.title} />
                        
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            {ob.attributes.title}
                          </h6>
                          <div className="post-meta d-flex justify-content-between">
                            <span>
                             {ob.attributes.zone}
                            </span>
                          
                           
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

             
        ))}
      </ul>
              </div>
    </div>
    </div>
    </section>
  );
}

export default async function Home() {
  const breakingNews = getBreakingNews();
  const pinnedNews = getPinnedNews();
  const arabicNews = getArabicNews();
  const localNews =  getLocalNews();
  const globalNews= getGlobalNews();
  const russianNews = getRussianNews();
  const articale = getِArticales();
  const [breakingNewsData,
    pinnedNewsData,
    arabicNewsData,
    localNewsData,
    globalNewsData,
    russianNewsData,
    articaleData] = await Promise.all([breakingNews, pinnedNews,arabicNews,
      localNews,
      globalNews,
      russianNews,
      articale])
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <body>
        {/* <!-- Preloader --> */}

        {/* <!-- ##### Header Area Start ##### --> */}
        <header className="header-area">
          {/* <!-- Top Header Area --> */}
          <div className="top-header-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  {/* <!-- Breaking News Widget --> */}
                  <div className="breaking-news-area d-flex align-items-center">
                    <div className="news-title">
                      <p>اخر الاخبار:</p>
                    </div>
                    <div id="breakingNewsTicker" className="ticker">
                      <Suspense fallback={<div>......</div>}>
                        <BreakingList promise={breakingNewsData} />
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="top-meta-data d-flex align-items-center justify-content-end">
                    {/* <!-- Top Social Info --> */}
                    <div className="top-social-info">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </div>
                    {/* <!-- Top Search Area --> */}
                    <div className="top-search-area">
                      <form action="index.html" method="post">
                        <input
                          type="search"
                          name="top-search"
                          id="topSearch"
                          placeholder="Search..."
                        />
                        <button type="submit" className="btn">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </form>
                    </div>
                    {/* <!-- Login --> */}
                    <a href="login.html" className="login-btn">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Navbar Area --> */}
          <div className="vizew-main-menu" id="sticker">
            <div className="classy-nav-container breakpoint-off">
              <div className="container">
                {/* <!-- Menu --> */}
                <nav
                  className="classy-navbar justify-content-between"
                  id="vizewNav"
                >
                  {/* <!-- Nav brand --> */}
                  <a href="index.html" className="nav-brand">
                    <img src="img/core-img/logo2.png" alt="" />
                  </a>

                  {/* <!-- Navbar Toggler --> */}
                  <div className="classy-navbar-toggler">
                    <span className="navbarToggler">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>

                  <div className="classy-menu">
                    {/* <!-- Close Button --> */}
                    <div className="classycloseIcon">
                      <div className="cross-wrap">
                        <span className="top"></span>
                        <span className="bottom"></span>
                      </div>
                    </div>

                    {/* <!-- Nav Start --> */}
                    <div className="classynav">
                      <ul>
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="archive-list.html">Archives</a>
                        </li>
                        <li>
                          <a href="#">Pages</a>
                          <ul className="dropdown">
                            <li>
                              <a href="index.html">- Home</a>
                            </li>
                            <li>
                              <a href="archive-list.html">- Archive List</a>
                            </li>
                            <li>
                              <a href="archive-grid.html">- Archive Grid</a>
                            </li>
                            <li>
                              <a href="single-post.html">- Single Post</a>
                            </li>
                            <li>
                              <a href="video-post.html">- Single Video Post</a>
                            </li>
                            <li>
                              <a href="contact.html">- Contact</a>
                            </li>
                            <li>
                              <a href="typography.html">- Typography</a>
                            </li>
                            <li>
                              <a href="login.html">- Login</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Features</a>
                          <div className="megamenu">
                            <ul className="single-mega cn-col-4">
                              <li>
                                <a href="index.html">- Home</a>
                              </li>
                              <li>
                                <a href="archive-list.html">- Archive List</a>
                              </li>
                              <li>
                                <a href="archive-grid.html">- Archive Grid</a>
                              </li>
                              <li>
                                <a href="single-post.html">- Single Post</a>
                              </li>
                              <li>
                                <a href="video-post.html">
                                  - Single Video Post
                                </a>
                              </li>
                              <li>
                                <a href="contact.html">- Contact</a>
                              </li>
                              <li>
                                <a href="typography.html">- Typography</a>
                              </li>
                              <li>
                                <a href="login.html">- Login</a>
                              </li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li>
                                <a href="index.html">- Home</a>
                              </li>
                              <li>
                                <a href="archive-list.html">- Archive List</a>
                              </li>
                              <li>
                                <a href="archive-grid.html">- Archive Grid</a>
                              </li>
                              <li>
                                <a href="single-post.html">- Single Post</a>
                              </li>
                              <li>
                                <a href="video-post.html">
                                  - Single Video Post
                                </a>
                              </li>
                              <li>
                                <a href="contact.html">- Contact</a>
                              </li>
                              <li>
                                <a href="typography.html">- Typography</a>
                              </li>
                              <li>
                                <a href="login.html">- Login</a>
                              </li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li>
                                <a href="index.html">- Home</a>
                              </li>
                              <li>
                                <a href="archive-list.html">- Archive List</a>
                              </li>
                              <li>
                                <a href="archive-grid.html">- Archive Grid</a>
                              </li>
                              <li>
                                <a href="single-post.html">- Single Post</a>
                              </li>
                              <li>
                                <a href="video-post.html">
                                  - Single Video Post
                                </a>
                              </li>
                              <li>
                                <a href="contact.html">- Contact</a>
                              </li>
                              <li>
                                <a href="typography.html">- Typography</a>
                              </li>
                              <li>
                                <a href="login.html">- Login</a>
                              </li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li>
                                <a href="index.html">- Home</a>
                              </li>
                              <li>
                                <a href="archive-list.html">- Archive List</a>
                              </li>
                              <li>
                                <a href="archive-grid.html">- Archive Grid</a>
                              </li>
                              <li>
                                <a href="single-post.html">- Single Post</a>
                              </li>
                              <li>
                                <a href="video-post.html">
                                  - Single Video Post
                                </a>
                              </li>
                              <li>
                                <a href="contact.html">- Contact</a>
                              </li>
                              <li>
                                <a href="typography.html">- Typography</a>
                              </li>
                              <li>
                                <a href="login.html">- Login</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Nav End --> */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- ##### Header Area End ##### --> */}

        {/* <!-- ##### Hero Area Start ##### --> */}
         <FeaturedPinnedPostedList promise={pinnedNewsData} />
        {/* <!-- ##### Hero Area End ##### --> */}
        {/* <!-- ##### Header Area End ##### --> */}

        {/* <!-- ##### price section Start ##### --> */}
        <section className="hero--area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- Section Heading --> */}
                <div className="section-heading">
                  <h4>الاسعار</h4>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              {/* currency price */}
              <div className="col-12 col-md-6 col-lg-6">
                <div className="body-n">
                  <div className="container-n">
                    <div className="weather-side">
                      <div className="weather-gradient"></div>
                      <div className="date-container">
                        <h2 className="date-dayname">Tuesday</h2>
                        <span className="date-day">15 Jan 2019</span>
                        <i className="location-icon" data-feather="map-pin"></i>
                        <span className="location">Paris, FR</span>
                      </div>
                      <div className="weather-container">
                        <i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">29°C</h1>
                        <h3 className="weather-desc">Sunny</h3>
                      </div>
                    </div>
                    <div className="info-side">
                      <div className="today-info-container">
                        <div className="today-info">
                          <div className="precipitation">
                            {" "}
                            <span className="title">PRECIPITATION</span>
                            <span className="value">0 %</span>
                            <div className="clear"></div>
                          </div>
                          <div className="humidity">
                            {" "}
                            <span className="title">HUMIDITY</span>
                            <span className="value">34 %</span>
                            <div className="clear"></div>
                          </div>
                          <div className="wind">
                            {" "}
                            <span className="title">WIND</span>
                            <span className="value">0 km/h</span>
                            <div className="clear"></div>
                          </div>
                        </div>
                      </div>
                      <div className="week-container">
                        <ul className="week-list">
                          <li className="active">
                            <i className="day-icon" data-feather="sun"></i>
                            <span className="day-name">Tue</span>
                            <span className="day-temp">29°C</span>
                          </li>
                          <li>
                            <i className="day-icon" data-feather="cloud"></i>
                            <span className="day-name">Wed</span>
                            <span className="day-temp">21°C</span>
                          </li>
                          <li>
                            <i
                              className="day-icon"
                              data-feather="cloud-snow"
                            ></i>
                            <span className="day-name">Thu</span>
                            <span className="day-temp">08°C</span>
                          </li>
                          <li>
                            <i
                              className="day-icon"
                              data-feather="cloud-rain"
                            ></i>
                            <span className="day-name">Fry</span>
                            <span className="day-temp">19°C</span>
                          </li>
                          <div className="clear"></div>
                        </ul>
                      </div>
                      <div className="location-container">
                        <button className="location-button">
                          {" "}
                          <i data-feather="map-pin"></i>
                          <span>Change location</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="body-n">
                  <div className="container-n">
                    <div className="weather-side">
                      <div className="weather-gradient"></div>
                      <div className="date-container">
                        <h2 className="date-dayname">Tuesday</h2>
                        <span className="date-day">15 Jan 2019</span>
                        <i className="location-icon" data-feather="map-pin"></i>
                        <span className="location">Paris, FR</span>
                      </div>
                      <div className="weather-container">
                        <i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">29°C</h1>
                        <h3 className="weather-desc">Sunny</h3>
                      </div>
                    </div>
                    <div className="info-side">
                      <div className="today-info-container">
                        <div className="today-info">
                          <div className="precipitation">
                            {" "}
                            <span className="title">PRECIPITATION</span>
                            <span className="value">0 %</span>
                            <div className="clear"></div>
                          </div>
                          <div className="humidity">
                            {" "}
                            <span className="title">HUMIDITY</span>
                            <span className="value">34 %</span>
                            <div className="clear"></div>
                          </div>
                          <div className="wind">
                            {" "}
                            <span className="title">WIND</span>
                            <span className="value">0 km/h</span>
                            <div className="clear"></div>
                          </div>
                        </div>
                      </div>
                      <div className="week-container">
                        <ul className="week-list">
                          <li className="active">
                            <i className="day-icon" data-feather="sun"></i>
                            <span className="day-name">Tue</span>
                            <span className="day-temp">29°C</span>
                          </li>
                          <li>
                            <i className="day-icon" data-feather="cloud"></i>
                            <span className="day-name">Wed</span>
                            <span className="day-temp">21°C</span>
                          </li>
                          <li>
                            <i
                              className="day-icon"
                              data-feather="cloud-snow"
                            ></i>
                            <span className="day-name">Thu</span>
                            <span className="day-temp">08°C</span>
                          </li>
                          <li>
                            <i
                              className="day-icon"
                              data-feather="cloud-rain"
                            ></i>
                            <span className="day-name">Fry</span>
                            <span className="day-temp">19°C</span>
                          </li>
                          <div className="clear"></div>
                        </ul>
                      </div>
                      <div className="location-container">
                        <button className="location-button">
                          {" "}
                          <i data-feather="map-pin"></i>
                          <span>Change location</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* currency price end*/}

              {/* اسعار المود الغذائية */}

              <div className="col-12 col-md-7 col-lg-8">
                <div className="body-m">
                  <div className="CartContainer">
                    <div className="Header">
                      <h3 className="Heading">Shopping Cart</h3>
                    </div>

                    <div className="Cart-Items">
                      <div className="image-box">
                        <img
                          src="/img/bg-img/apple.png"
                          style={{ height: "100px" }}
                        />
                      </div>
                      <div className="about">
                        <h1 className="title">Apple Juice</h1>
                      </div>

                      <div className="prices">
                        <div className="amount">$2.99</div>
                      </div>
                    </div>
                    <hr />
                    <div className="Cart-Items pad">
                      <div className="image-box">
                        <img
                          src="/img/bg-img/grapes.png"
                          style={{ height: "100px" }}
                        />
                      </div>
                      <div className="about">
                        <h2 className="title">Grapes Juice</h2>
                      </div>

                      <div className="prices">
                        <div className="amount">$3.19</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5 col-lg-4"></div>
            </div>
            {/* اسعار المود الغذائية */}
          </div>
        </section>
        {/* <!-- ##### price section End ##### --> */}

        {/* <!-- ##### Vizew Post Area Start ##### --> */}
        <section className="vizew-post-area mb-50 ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-8 ">
                <div className="all-posts-area">
                  {/* <!-- Section Heading --> */}
                  <div className="section-heading style-2">
                  <a href="/الاخبار-المحلية"> <h4>الاخبار المحلية</h4></a>
                    <div className="line"></div>
                  </div>

                  {/* <!-- Featured Post Slides --> */}
                  <div className="featured-post-slides owl-carousel mb-30 ">
                    {/* <!-- Single Feature Post --> */}
                    {[...localNewsData.data.slice(0, 2)].map((ob, i) => (
                      <div key={ob.id}
                      className="single-feature-post video-post bg-img"
                      style={{ backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url})` }}
                    >
                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                      
                        <a href={ob.attributes.slug+"/الاخبار-المحلية"} className="post-title">
                        {ob.attributes.title}
                        </a>
                        <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                        </div>
                      </div>
                    </div>
      ))}
                   
                    
                
                  </div>

                  <div className="row">
                    {/* <!-- Single Blog Post --> */}
                  
                    {[...localNewsData.data.slice(2, 4)].map((ob, i) => (  <div  key={ob.id} className="col-12 col-md-6 col-lg-6"> <div   className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={600} height={381}   />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.slug+"/الاخبار-المحلية"} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                      </div> </div>))}
                     
                   

            
                  </div>

                  <div className="row">
                    {/* <!-- Single Blog Post --> */}
                    {[...localNewsData.data.slice(4, 7)].map((ob, i) => (   <div  key={ob.id} className="col-12 col-md-6 col-lg-4"> <div   className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={600} height={381} />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.slug+"/الاخبار-المحلية"} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                      </div> </div>))}
                 
                  </div>

                  <div className="row">
                    <div className="col-12">
                      {/* <!-- Section Heading --> */}
                      <div className="section-heading">
                      <a href="/الاخبار-العربية"> <h4>الاخبار العربية</h4></a>
                        <div className="line"></div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      {/* <!-- Section Heading --> */}

                      {/* <!-- Sports Video Slides --> */}
                      <div className="sport-video-slides owl-carousel mb-50 ">
                      {[...arabicNewsData.data.slice(0, 2)].map((ob, i) => ( <div  key={ob.id} className="single-post-area">
                          {/* <!-- Post Thumbnail --> */}
                          <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={600} height={381}     />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.slug+"/الاخبار-العربية"} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                        </div>))}
                        {/* <!-- Single Blog Post --> */}
                       
                       
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      {/* <!-- Business Video Slides --> */}
                      <div className="  mb-50 ">
                      {[...arabicNewsData.data.slice(2, 3)].map((ob, i) => (  
                        <div  key={ob.id} className="single-post-area">
                          {/* <!-- Post Thumbnail --> */}
                          <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={600} height={381}     />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.slug+"/الاخبار-العربية"} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                        </div>
))}
                       
                      </div>
                    </div>
                  </div>

                  <div className="row mb-30">
                  {[...arabicNewsData.data.slice(3, 7)].map((ob, i) => ( <div  key={ob.id} className="col-12 col-lg-6 ">
                      <div className="single-blog-post style-3 d-flex mb-50 ">
                      <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={600} height={381}     />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.slug+"/الاخبار-العربية"} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                      </div>
                    </div>))}
                 
                   
 
                  </div>

                  {/* <!-- Section Heading --> */}
                  <div className="section-heading style-2">
                   
                    <a href="/الاخبار-العالمية"> <h4>الاخبار العالمية</h4></a>
                    <div className="line"></div>
                  </div>

                  {/* <!-- Featured Post Slides --> */}
                  <div className="featured-post-slides owl-carousel mb-30 ">
                  {[...globalNewsData.data.slice(0, 3)].map((ob, i) => ( <div
                     key={ob.id}  className="single-feature-post video-post bg-img"
                     style={{ backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url})` }}
                    >
                     
                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.slug+"/الاخبار-العربية"} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                    </div>  ))}
                  
                  </div>
                  {[...globalNewsData.data.slice(3, 7)].map((ob, i) => ( <div  key={ob.id} className="single-post-area mb-30 ">
                    <div className="row align-items-center ">
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={600} height={381}     />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Content --> */}
                        <div className="post-content mt-0 ">
                           
                        <a href={ob.attributes.slug+"/الاخبار-العربية"} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex align-items-center mb-2">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                          <p className="mb-2">
                           {ob.attributes.shortContent}
                          </p>
                           
                        </div>
                      </div>
                    </div>
                  </div> ))}
                
                </div>
              </div>

              <div className="col-12 col-md-5 col-lg-4">
                <div className="sidebar-area">
                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget followers-widget mb-50 ">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                      <span className="counter">198</span>
                      <span>Fan</span>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                      <span className="counter">220</span>
                      <span>Followers</span>
                    </a>
                    <a href="#" className="google">
                      <i className="fa fa-google" aria-hidden="true"></i>
                      <span className="counter">140</span>
                      <span>Subscribe</span>
                    </a>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget latest-video-widget mb-50 ">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      <h4>مقتطفات</h4>
                      <div className="line"></div>
                    </div>

                    {/* <!-- Single Blog Post --> */}
                    <div className="single-post-area mb-30 ">
                      {/* <!-- Post Thumbnail --> */}
                      <div className="post-thumbnail">
                        <img src="img/bg-img/13.jpg" alt="" />
                      </div>

                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                        <a href="#" className="post-cata cata-sm cata-success">
                          Sports
                        </a>
                        <a href="single-post.html" className="post-title">
                          Full article Prince
                        </a>
                        <div className="post-meta d-flex">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            14
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 38
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            22
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                      <div className="post-thumbnail">
                        <img src="img/bg-img/1.jpg" alt="" />
                      </div>
                      <div className="post-content">
                        <a href="single-post.html" className="post-title">
                          DC Shoes: gymkhana five; the making of
                        </a>
                        <div className="post-meta d-flex justify-content-between">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            29
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 08
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            23
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                      <div className="post-thumbnail">
                        <img src="img/bg-img/2.jpg" alt="" />
                      </div>
                      <div className="post-content">
                        <a href="single-post.html" className="post-title">
                          Sweet Yummy Chocolatea Tea
                        </a>
                        <div className="post-meta d-flex justify-content-between">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            17
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 33
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            26
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                      <div className="post-thumbnail">
                        <img src="img/bg-img/35.jpg" alt="" />
                      </div>
                      <div className="post-content">
                        <a href="single-post.html" className="post-title">
                          How To Make Orange Chicken Recipe?
                        </a>
                        <div className="post-meta d-flex justify-content-between">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            11
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 42
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            21
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget add-widget mb-50">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>

                  {/* <!-- ***** Sidebar Widget ***** --> */}
                  <div className="single-widget youtube-channel-widget mb-50">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      <h4>مقالات</h4>
                      <div className="line"></div>
                    </div>

                    {/* <!-- Single YouTube Channel --> */}
                    <div className="single-youtube-channel d-flex align-items-center">
                      <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/25.jpg" alt="" />
                      </div>
                      <div className="youtube-channel-content">
                        <a href="single-post.html" className="channel-title">
                          Music Channel
                        </a>
                        <a href="#" className="btn subscribe-btn">
                          <i
                            className="fa fa-play-circle-o"
                            aria-hidden="true"
                          ></i>{" "}
                          Subscribe
                        </a>
                      </div>
                    </div>

                    {/* <!-- Single YouTube Channel --> */}
                    <div className="single-youtube-channel d-flex align-items-center">
                      <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/26.jpg" alt="" />
                      </div>
                      <div className="youtube-channel-content">
                        <a href="single-post.html" className="channel-title">
                          Trending Channel
                        </a>
                        <a href="#" className="btn subscribe-btn">
                          <i
                            className="fa fa-play-circle-o"
                            aria-hidden="true"
                          ></i>{" "}
                          Subscribe
                        </a>
                      </div>
                    </div>

                    {/* <!-- Single YouTube Channel --> */}
                    <div className="single-youtube-channel d-flex align-items-center">
                      <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/27.jpg" alt="" />
                      </div>
                      <div className="youtube-channel-content">
                        <a href="single-post.html" className="channel-title">
                          Travel Channel
                        </a>
                        <a href="#" className="btn subscribe-btn">
                          <i
                            className="fa fa-play-circle-o"
                            aria-hidden="true"
                          ></i>{" "}
                          Subscribe
                        </a>
                      </div>
                    </div>

                    {/* <!-- Single YouTube Channel --> */}
                    <div className="single-youtube-channel d-flex align-items-center">
                      <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/28.jpg" alt="" />
                      </div>
                      <div className="youtube-channel-content">
                        <a href="single-post.html" className="channel-title">
                          Sport Channel
                        </a>
                        <a href="#" className="btn subscribe-btn">
                          <i
                            className="fa fa-play-circle-o"
                            aria-hidden="true"
                          ></i>{" "}
                          Subscribe
                        </a>
                      </div>
                    </div>

                    {/* <!-- Single YouTube Channel --> */}
                    <div className="single-youtube-channel d-flex align-items-center">
                      <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/29.jpg" alt="" />
                      </div>
                      <div className="youtube-channel-content">
                        <a href="single-post.html" className="channel-title">
                          TV Show Channel
                        </a>
                        <a href="#" className="btn subscribe-btn">
                          <i
                            className="fa fa-play-circle-o"
                            aria-hidden="true"
                          ></i>{" "}
                          Subscribe
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget newsletter-widget mb-50">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      <h4>النشرة البريدية</h4>
                      <div className="line"></div>
                    </div>
                    <p>
                      Subscribe our newsletter gor get notification about new
                      updates, information discount, etc.
                    </p>
                    {/* <!-- Newsletter Form --> */}
                    <div className="newsletter-form">
                      <form action="#" method="post">
                        <input
                          type="email"
                          name="nl-email"
                          className="form-control mb-15"
                          id="emailnl"
                          placeholder="Enter your email"
                        />
                        <button type="submit" className="btn vizew-btn w-100">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget mb-50">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      
                      <a href="/الحرب-الروسية"> <h4>الحرب الروسية</h4></a>
                      <div className="line"></div>
                    </div>
                    {[...russianNewsData.data.slice(0, 7)].map((ob, i) => (  <div  key={ob.id} className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={100} height={70}     />
                        </div>

                      <div className="post-content">
                      <a href={ob.attributes.slug+"/الحرب-الروسية"} className="post-title">
                           {ob.attributes.title}
                          </a>
                        <div className="post-meta d-flex justify-content-between">
                        { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                        </div>
                      </div>
                    </div> ))}
                   
                   

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ##### Vizew Psot Area End ##### --> */}

        {/* <!-- ##### Footer Area Start ##### --> */}
        <footer className="footer-area">
          <div className="container">
            <div className="row">
              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  {/* <!-- Logo --> */}
                  <a href="index.html" className="foo-logo d-block mb-4">
                    <img src="img/core-img/logo2.png" alt="" />
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                  {/* <!-- Footer Newsletter Area --> */}
                  <div className="footer-nl-area">
                    <form action="#" method="post">
                      <input
                        type="email"
                        name="nl-email"
                        className="form-control"
                        id="nlEmail"
                        placeholder="Your email"
                      />
                      <button type="submit">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  <h6 className="widget-title">Latest Twister</h6>
                  {/* <!-- Twitter Slides --> */}
                  <div className="twitter-slides owl-carousel">
                    {/* <!-- Single Twitter Slide --> */}
                    <div className="single--twitter-slide">
                      {/* <!-- Single Twit --> */}
                      <div className="single-twit">
                        <p>
                          <i className="fa fa-twitter"></i>{" "}
                          <span>@Leonard</span> I am so happy because I found
                          this magazine, and it just made Vizeweasier. Thanks
                          for sharing
                        </p>
                      </div>
                      {/* <!-- Single Twit --> */}
                      <div className="single-twit">
                        <p>
                          <i className="fa fa-twitter"></i>{" "}
                          <span>@Leonard</span> I am so happy because I found
                          this magazine, and it just made Vizeweasier. Thanks
                          for sharing
                        </p>
                      </div>
                    </div>

                    {/* <!-- Single Twitter Slide --> */}
                    <div className="single--twitter-slide">
                      {/* <!-- Single Twit --> */}
                      <div className="single-twit">
                        <p>
                          <i className="fa fa-twitter"></i>{" "}
                          <span>@DracoWare</span> I am so happy because I found
                          this magazine, and it just made Vizeweasier. Thanks
                          for sharing
                        </p>
                      </div>
                      {/* <!-- Single Twit --> */}
                      <div className="single-twit">
                        <p>
                          <i className="fa fa-twitter"></i>{" "}
                          <span>@DracoWare</span> I am so happy because I found
                          this magazine, and it just made Vizeweasier. Thanks
                          for sharing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  <h6 className="widget-title">Sport Videos</h6>

                  {/* <!-- Single Blog Post --> */}
                  <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                      <img src="img/bg-img/1.jpg" alt="" />
                    </div>
                    <div className="post-content">
                      <a href="single-post.html" className="post-title">
                        DC Shoes: gymkhana the
                      </a>
                      <div className="post-meta d-flex justify-content-between">
                        <a href="#">
                          <i
                            className="fa fa-comments-o"
                            aria-hidden="true"
                          ></i>{" "}
                          14
                        </a>
                        <a href="#">
                          <i className="fa fa-eye" aria-hidden="true"></i> 34
                        </a>
                        <a href="#">
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>{" "}
                          84
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Blog Post --> */}
                  <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                      <img src="img/bg-img/2.jpg" alt="" />
                    </div>
                    <div className="post-content">
                      <a href="single-post.html" className="post-title">
                        Sweet Yummy Chocolatea Tea
                      </a>
                      <div className="post-meta d-flex justify-content-between">
                        <a href="#">
                          <i
                            className="fa fa-comments-o"
                            aria-hidden="true"
                          ></i>{" "}
                          14
                        </a>
                        <a href="#">
                          <i className="fa fa-eye" aria-hidden="true"></i> 34
                        </a>
                        <a href="#">
                          <i
                            className="fa fa-thumbs-o-up"
                            aria-hidden="true"
                          ></i>{" "}
                          84
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  <h6 className="widget-title">Our Address</h6>
                  {/* <!-- Contact Address --> */}
                  <div className="contact-address">
                    <p>
                      101 E 129th St, East Chicago, <br />
                      IN 46312, US
                    </p>
                    <p>Phone: 001-1234-88888</p>
                    <p>Email: info.colorlib@gmail.com</p>
                  </div>
                  {/* <!-- Footer Social Area --> */}
                  <div className="footer-social-area">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="google-plus">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Copywrite Area --> */}
          <div className="copywrite-area">
            <div className="container">
              <div className="row align-items-center">
                {/* <!-- Copywrite Text --> */}
                <div className="col-12 col-sm-6">
                  <p className="copywrite-text">
                    {/* <!-- Link back to Colorlib cant be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </p>
                </div>
                <div className="col-12 col-sm-6">
                  <nav className="footer-nav">
                    <ul>
                      <li>
                        <a href="#">Advertise</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Disclaimer</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- ##### Footer Area End ##### --> */}
        <Script src="/js/jquery/jquery-2.2.4.min.js" />
        <Script src="/js/bootstrap/popper.min.js" />
        <Script src="/js/bootstrap/bootstrap.min.js" />
        <Script src="/js/plugins/plugins.js" />
        <Script src="/js/active.js" />
      </body>
    </>
  );
}
const BASE_URL = "http://127.0.0.1:1337",
  BEARER_TOKEN =
    "5682b7252772bad46d0a3a19b3883c8f377a9a39eb5ef29b18cd441c23349118d6902a96232bf8a90f4c696bba3a5905caa704cee65d822bb6ec47fceb562456346657773017e6a64f1df0706d040148cc4c665fc961d2314ff13269ee742f829f43e9b43694d2dbb41cca3812cf3dd15c5c3006adcf6e1b14bde92ca624f9c6",
  headers = {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
  newsRevalidate = 20;

export async function getBreakingNews() {
  const res = await fetch(
    `${BASE_URL}/api/short-news?populate=*&pagination[limit]=28&sort[0]=createdAt%3Adesc`,
    { headers, next: { revalidate: newsRevalidate } }
  );

  return res.json();
}

export async function getPinnedNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=10&filters[pin][$eq]=true&sort[0]=publishedAt%3Adesc`,
    { headers, next: { revalidate: newsRevalidate } }
  );

  return res.json();
}

export async function getArabicNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[zone][$eq]=عربي`,
    { headers, next: { revalidate: newsRevalidate } }
  );

  return res.json();
}

export async function getLocalNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[zone][$eq]=محلي`,
    { headers, next: { revalidate: newsRevalidate } }
  );

  return res.json();
}

export async function getGlobalNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[zone][$eq]=عالمي`,
    { headers, next: { revalidate: newsRevalidate } }
  );

  return res.json();
}
export async function getRussianNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[zone][$eq]=الحرب%20الروسية`,
    { headers, next: { revalidate: newsRevalidate } }
  );

  return res.json();
}

export async function getِArticales() {
  const res = await fetch(
    `${BASE_URL}/api/articales?populate=*&pagination[limit]=7&sort[0]=publishedAt%3Adesc`,
    { headers, next: { revalidate: newsRevalidate } }
  );

  return res.json();
}
