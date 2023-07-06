import Head from "next/head";
import Script from "next/script";
import "../../public/style.css";
import "../../public/css/style-grocery-price.css";
import "../../public/css/style-currency.css";

export default function Home() {
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
                      <p>Breaking News:</p>
                    </div>
                    <div id="breakingNewsTicker" className="ticker">
                      <ul>
                        <li>
                          <a href="single-post.html">
                            10 Things Amazon Echo Can Do
                          </a>
                        </li>
                        <li>
                          <a href="single-post.html">
                            Welcome to DracoWare Family.
                          </a>
                        </li>
                        <li>
                          <a href="single-post.html">
                            Boys 'doing well' after Thai
                          </a>
                        </li>
                      </ul>
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
                  <div
                    className="tab-pane fade show active"
                    id="post-1"
                    role="tabpanel"
                    aria-labelledby="post-1-tab"
                  >
                    {/* <!-- Single Feature Post --> */}
                    <div
                      className="single-feature-post video-post bg-img"
                      style={{ backgroundImage: "url(/img/bg-img/7.jpg)" }}
                    >
                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                        <a href="#" className="post-cata">
                          Sports
                        </a>
                        <a href="single-post.html" className="post-title">
                          Reunification of migrant toddlers, parents should be
                          completed Thursday
                        </a>
                        <div className="post-meta d-flex">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 25
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="post-2"
                    role="tabpanel"
                    aria-labelledby="post-2-tab"
                  >
                    {/* <!-- Single Feature Post --> */}
                    <div className="single-feature-post video-post bg-img">
                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                        <a href="#" className="post-cata">
                          Sports
                        </a>
                        <a href="single-post.html" className="post-title">
                          Reunification of migrant toddlers, parents should be
                          completed Thursday
                        </a>
                        <div className="post-meta d-flex">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 25
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="post-3"
                    role="tabpanel"
                    aria-labelledby="post-3-tab"
                  >
                    {/* <!-- Single Feature Post --> */}
                    <div className="single-feature-post video-post bg-img">
                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                        <a href="#" className="post-cata">
                          Sports
                        </a>
                        <a href="single-post.html" className="post-title">
                          Reunification of migrant toddlers, parents should be
                          completed Thursday
                        </a>
                        <div className="post-meta d-flex">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 25
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                <a href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                  {ob.attributes.title}
                </a>
                <p>{ob.attributes.shortContent} </p>
              </div>
            </div>
          </div>
        ))}
      </div>

                  <div
                    className="tab-pane fade"
                    id="post-5"
                    role="tabpanel"
                    aria-labelledby="post-5-tab"
                  >
                    {/* <!-- Single Feature Post --> */}
                    <div className="single-feature-post video-post bg-img">
                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                        <a href="#" className="post-cata">
                          Sports
                        </a>
                        <a href="single-post.html" className="post-title">
                          Reunification of migrant toddlers, parents should be
                          completed Thursday
                        </a>
                        <div className="post-meta d-flex">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 25
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="post-6"
                    role="tabpanel"
                    aria-labelledby="post-6-tab"
                  >
                    {/* <!-- Single Feature Post --> */}
                    <div className="single-feature-post video-post bg-img">
                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                        <a href="#" className="post-cata">
                          Sports
                        </a>
                        <a href="single-post.html" className="post-title">
                          Reunification of migrant toddlers, parents should be
                          completed Thursday
                        </a>
                        <div className="post-meta d-flex">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 25
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="post-7"
                    role="tabpanel"
                    aria-labelledby="post-7-tab"
                  >
                    {/* <!-- Single Feature Post --> */}
                    <div className="single-feature-post video-post bg-img">
                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                        <a href="#" className="post-cata">
                          Sports
                        </a>
                        <a href="single-post.html" className="post-title">
                          Reunification of migrant toddlers, parents should be
                          completed Thursday
                        </a>
                        <div className="post-meta d-flex">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 25
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5 col-lg-4">
                <ul className="nav vizew-nav-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="post-1-tab"
                      data-toggle="pill"
                      href="#post-1"
                      role="tab"
                      aria-controls="post-1"
                      aria-selected="true"
                    >
                      {/* <!-- Single Blog Post --> */}
                      <div className="single-blog-post style-2 d-flex align-items-center">
                        <div className="post-thumbnail">
                          <img src="/img/bg-img/3.jpg" alt="" />
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            Boys 'doing well' after Thai cave rescue
                          </h6>
                          <div className="post-meta d-flex justify-content-between">
                            <span>
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              25
                            </span>
                            <span>
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              11
                            </span>
                            <span>
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>{" "}
                              19
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="post-2-tab"
                      data-toggle="pill"
                      href="#post-2"
                      role="tab"
                      aria-controls="post-2"
                      aria-selected="false"
                    >
                      {/* <!-- Single Blog Post --> */}
                      <div className="single-blog-post style-2 d-flex align-items-center">
                        <div className="post-thumbnail">
                          <img src="/img/bg-img/4.jpg" alt="" />
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            Meet the 12 boys rescued from cave
                          </h6>
                          <div className="post-meta d-flex justify-content-between">
                            <span>
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              14
                            </span>
                            <span>
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              34
                            </span>
                            <span>
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>{" "}
                              84
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="nav-item">
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
                        <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} width={100}  height={200} alt={ob.attributes.title} />
                        
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            {ob.attributes.title}
                          </h6>
                          <div className="post-meta d-flex justify-content-between">
                            <span>
                            {ob.attributes.mainCategory.data.attributes.title}
                            </span>
                          
                           
                          </div>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
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
      

      
        {/* <!-- ##### Header Area End ##### --> */}

        {/* <!-- ##### Hero Area Start ##### --> */}
         <FeaturedPinnedPostedList promise={pinnedNewsData} />
        {/* <!-- ##### Hero Area End ##### --> */}

{/* herzontal ad */}
<div className="container mt-2 mb-5">
  <a>
    <img src="img/bg-img/h-ad.png" alt=""/>
  </a>

</div>
{/* herzontal ad */}


        {/* <!-- ##### price section Start ##### --> */}
        <section className="vizew-post-area mb-50 ">
          <div className="container">
             <div className="row">
            <div className="col-12 col-md-8 col-lg-8 ">
              <div className="section-heading style-2">
                    <h4>الاسعار</h4>
                    <div className="line"></div>
                  </div>
              <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                      <div className="single-post-area mb-80 ">
{/* //////////////////////// */}
<div className="body-n">                       
<div class="container-n">
    <div class="weather-side">
      <div class="weather-gradient"></div>
      <div class="date-container">
        <h2 class="date-dayname">Tuesday</h2><span class="date-day">15 Jan 2019</span><i class="location-icon"
          data-feather="map-pin"></i><span class="location">Paris, FR</span>
      </div>
      <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
        <h1 class="weather-temp">29°C</h1>
        <h3 class="weather-desc">Sunny</h3>
      </div>
    </div>
    <div class="info-side">
      <div class="today-info-container">
        <div class="today-info">
          <div class="precipitation"> <span class="title">PRECIPITATION</span><span class="value">0 %</span>
            <div class="clear"></div>
          </div>
          <div class="humidity"> <span class="title">HUMIDITY</span><span class="value">34 %</span>
            <div class="clear"></div>
          </div>
          <div class="wind"> <span class="title">WIND</span><span class="value">0 km/h</span>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="week-container">
        <ul class="week-list">
          <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name">Tue</span><span
              class="day-temp">29°C</span></li>
          <li><i class="day-icon" data-feather="cloud"></i><span class="day-name">Wed</span><span
              class="day-temp">21°C</span></li>
          <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name">Thu</span><span
              class="day-temp">08°C</span></li>
          <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name">Fry</span><span
              class="day-temp">19°C</span></li>
          <div class="clear"></div>
        </ul>
      </div>
      
    </div>
  </div>
  </div>
{/* ///////////////////////// */}
                      </div>
              </div>
             <div className="col-12 col-md-6 col-lg-6">
                      <div className="single-post-area mb-80 ">
{/* //////////////////// */}
<div className="body-n">                       
<div class="container-n">
    <div class="weather-side">
      <div class="weather-gradient"></div>
      <div class="date-container">
        <h2 class="date-dayname">Tuesday</h2><span class="date-day">15 Jan 2019</span><i class="location-icon"
          data-feather="map-pin"></i><span class="location">Paris, FR</span>
      </div>
      <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
        <h1 class="weather-temp">29°C</h1>
        <h3 class="weather-desc">Sunny</h3>
      </div>
    </div>
    <div class="info-side">
      <div class="today-info-container">
        <div class="today-info">
          <div class="precipitation"> <span class="title">PRECIPITATION</span><span class="value">0 %</span>
            <div class="clear"></div>
          </div>
          <div class="humidity"> <span class="title">HUMIDITY</span><span class="value">34 %</span>
            <div class="clear"></div>
          </div>
          <div class="wind"> <span class="title">WIND</span><span class="value">0 km/h</span>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="week-container">
        <ul class="week-list">
          <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name">Tue</span><span
              class="day-temp">29°C</span></li>
          <li><i class="day-icon" data-feather="cloud"></i><span class="day-name">Wed</span><span
              class="day-temp">21°C</span></li>
          <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name">Thu</span><span
              class="day-temp">08°C</span></li>
          <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name">Fry</span><span
              class="day-temp">19°C</span></li>
          <div class="clear"></div>
        </ul>
      </div>
      
    </div>
  </div>
  </div>

{/* /////////////////////// */}
                      </div>
             </div>
              </div>
             <div className="col-12 col-md-12 col-lg-12 mt-5">
                      <div className="single-post-area mb-80 ">

{/* //////////////////// */}

<div className="body-m">
<div class="CartContainer">
		<div class="Header">
			<h3 class="Heading">اسعار المواد الغذائية</h3>
		</div>

		<div class="Cart-Items">
			<div class="image-box">
				<img src="img/bg-img/apple.png" style={{ height:"100px" }} />
			</div>
			<div class="about">
				<h1 class="title">Apple Juice</h1>

			</div>

			<div class="prices">
				<div class="amount">$2.99</div>

			</div>
		</div>
		<hr />
		<div class="Cart-Items pad">
			<div class="image-box">
				<img src="img/bg-img/grapes.png" style={{ height:"100px" }} />
			</div>
			<div class="about">
				<h2 class="title">Grapes Juice</h2>
				

			</div>

			<div class="prices">
				<div class="amount">$3.19</div>

			</div>
		</div>
		<hr />

	</div>
</div>
{/* ///////////////////// */}

                      </div>
             </div>
              

            </div>
            <div className="col-12 col-md-5 col-lg-4">
                <div className="sidebar-area">
                  
{/* /////////////////// */}
{/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget add-widget mb-50 bg-white shadow">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>
{/* //////////////////// */}


                </div>
                </div>
            </div>
            
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
                  <a href={localNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/"}> <h4>الاخبار المحلية</h4></a>
                    <div className="line"></div>
                  </div>

                  {/* <!-- Featured Post Slides --> */}
                  <div className="featured-post-slides owl-carousel mb-30 ">
                    {/* <!-- Single Feature Post --> */}
                    {[...localNewsData.data.slice(0, 2)].map((ob) => (
                      <div key={ob.id}
                      className="single-feature-post video-post bg-img"
                      style={{ backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url})` }}
                    >
                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                      
                        <a  href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
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
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200}   />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          <a href="#" className="post-cata cata-sm cata-danger">
                            Game
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Blog Post --> */}

                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <img src="img/bg-img/13.jpg" alt="" />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          <a
                            href="#"
                            className="post-cata cata-sm cata-primary"
                          >
                            Business
                          </a>
                          <a href="single-post.html" className="post-title">
                            Love Island star's boyfriend found dead after her
                            funeral
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
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              38
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
                    </div>
                  </div>

                  <div className="row">
                    {/* <!-- Single Blog Post --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200} />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          <a href="#" className="post-cata cata-sm cata-danger">
                            Game
                          </a>
                          <a href="single-post.html" className="post-title">
                            Searching for the 'angel' who held me on Westminste
                            Bridge
                          </a>
                          <div className="post-meta d-flex">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              28
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              17
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
                    </div>

                    {/* <!-- Single Blog Post --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <img src="img/bg-img/13.jpg" alt="" />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          <a
                            href="#"
                            className="post-cata cata-sm cata-primary"
                          >
                            Business
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <img src="img/bg-img/13.jpg" alt="" />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          <a
                            href="#"
                            className="post-cata cata-sm cata-primary"
                          >
                            Business
                          </a>
                          <a href="single-post.html" className="post-title">
                            Love Island star's boyfriend found dead after her
                            funeral
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
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              38
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
                    </div>
                  </div>


{/* ///////////////////// */}
<div className="row">
  <div className="col-12">
    {/* herzontal ad */}
<div className="container mt-2 mb-5">
  <a>
    <img src="img/bg-img/h-ad.png" alt=""/>
  </a>
</div>
{/* herzontal ad */}
  </div>
</div>
{/* ///////////////////// */}



                  <div className="row">
                    <div className="col-12">
                      {/* <!-- Section Heading --> */}
                      <div className="section-heading">
                        <h4>الاخبار العربية</h4>
                        <div className="line"></div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      {/* <!-- Section Heading --> */}

                      {/* <!-- Sports Video Slides --> */}
                      <div className="sport-video-slides owl-carousel mb-50 ">
                        {/* <!-- Single Blog Post --> */}
                        <div className="single-post-area">
                          {/* <!-- Post Thumbnail --> */}
                          <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200}     />
                        </div>

                          {/* <!-- Post Content --> */}
                          <div className="post-content">
                            <a
                              href="#"
                              className="post-cata cata-sm cata-success"
                            >
                              Sports
                            </a>
                            <a href="single-post.html" className="post-title">
                              Searching for the 'angel' who held me on
                              Westminster Bridge
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
                                <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                                38
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
                       
                       
                      </div>
                    </div>

                    <div className="col-12 col-lg-6 ">
                      {/* <!-- Business Video Slides --> */}
                      <div className="business-video-slides owl-carousel mb-50 ">
                        {/* <!-- Single Blog Post --> */}
                        <div className="single-post-area">
                          {/* <!-- Post Thumbnail --> */}
                          <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200}     />
                        </div>

                          {/* <!-- Post Content --> */}
                          <div className="post-content">
                            <a
                              href="#"
                              className="post-cata cata-sm cata-primary"
                            >
                              Business
                            </a>
                            <a href="single-post.html" className="post-title">
                              Full article Prince Charles's 'urgent' global
                              research
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
                                <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                                38
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
))}
                       
                      </div>
                    </div>
                  </div>

                  <div className="row mb-30">
                    {/* <!-- Single Blog Post --> */}
                    <div className="col-12 col-lg-6 ">
                      <div className="single-blog-post style-3 d-flex mb-50 ">
                        <div className="post-thumbnail">
                          <img src="img/bg-img/16.jpg" alt="" />
                        </div>

                    {/* <!-- Single Blog Post --> */}
                    <div className="col-12 col-lg-6">
                      <div className="single-blog-post style-3 d-flex mb-50 ">
                        <div className="post-thumbnail">
                          <img src="img/bg-img/18.jpg" alt="" />
                        </div>
                        <div className="post-content">
                          <a href="single-post.html" className="post-title">
                            Paramedics 'drilled into boat death woman'
                          </a>
                          <div className="post-meta d-flex justify-content-between">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              16
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              26
                            </a>
                            <a href="#">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>{" "}
                              17
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Blog Post --> */}
                    <div className="col-12 col-lg-6">
                      <div className="single-blog-post style-3 d-flex mb-50 ">
                        <div className="post-thumbnail">
                          <img src="img/bg-img/19.jpg" alt="" />
                        </div>
                        <div className="post-content">
                          <a href="single-post.html" className="post-title">
                            Tory vice-chairs quit over PM's Brexit plan
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Blog Post --> */}
                    <div className="col-12 col-lg-6">
                      <div className="single-blog-post style-3 d-flex mb-50 ">
                        <div className="post-thumbnail">
                          <img src="img/bg-img/20.jpg" alt="" />
                        </div>
                        <div className="post-content">
                          <a href="single-post.html" className="post-title">
                            Do This One Simple Action for an Absolutely
                          </a>
                          <div className="post-meta d-flex justify-content-between">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              16
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              26
                            </a>
                            <a href="#">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>{" "}
                              17
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


{/* ///////////////////// */}
<div className="row">
  <div className="col-12">
    {/* herzontal ad */}
<div className="container mt-2 mb-5">
  <a>
    <img src="img/bg-img/h-ad.png" alt=""/>
  </a>
</div>
{/* herzontal ad */}
  </div>
</div>
{/* ///////////////////// */}

                  {/* <!-- Section Heading --> */}
                  <div className="section-heading style-2">
                   
                    <a href={globalNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/"}> <h4>الاخبار العالمية</h4></a>
                    <div className="line"></div>
                  </div>
                 
                  {/* <!-- Featured Post Slides --> */}
                  <div className="featured-post-slides owl-carousel mb-30 ">
                  {[...globalNewsData.data.slice(0, 3)].map((ob) => ( <div
                     key={ob.id}  className="single-feature-post video-post bg-img"
                     style={{ backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url})` }}
                    >
                      {/* <!-- Post Content --> */}
                      <div className="post-content">
                        <a href="#" className="post-cata">
                          Sports
                        </a>
                        <a href="single-post.html" className="post-title">
                          Reunification of migrant toddlers, parents should be
                          completed Thursday
                        </a>
                        <div className="post-meta d-flex">
                          <a href="#">
                            <i
                              className="fa fa-comments-o"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                          <a href="#">
                            <i className="fa fa-eye" aria-hidden="true"></i> 25
                          </a>
                          <a href="#">
                            <i
                              className="fa fa-thumbs-o-up"
                              aria-hidden="true"
                            ></i>{" "}
                            25
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Post Area --> */}
                  <div className="single-post-area mb-30 ">
                    <div className="row align-items-center ">
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200}     />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Content --> */}
                        <div className="post-content mt-0 ">
                          <a
                            href="#"
                            className="post-cata cata-sm cata-success"
                          >
                            Sports
                          </a>
                          <a
                            href="single-post.html"
                            className="post-title mb-2"
                          >
                            May fights on after Johnson savages Brexit approach
                          </a>
                          <div className="post-meta d-flex align-items-center mb-2">
                            <a href="#" className="post-author">
                              By Jane
                            </a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                            <a href="#" className="post-date">
                              Sep 08, 2018
                            </a>
                          </div>
                          <p className="mb-2">
                            Quisque mollis tristique ante. Proin ligula eros,
                            varius id tristique sit amet, rutrum non ligula.
                          </p>
                          <div className="post-meta d-flex">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              32
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              42
                            </a>
                            <a href="#">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>{" "}
                              7
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Post Area --> */}
                  <div className="single-post-area mb-30 ">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <img src="img/bg-img/22.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Content --> */}
                        <div className="post-content mt-0">
                          <a href="#" className="post-cata cata-sm cata-danger">
                            Game
                          </a>
                          <div className="post-meta d-flex align-items-center mb-2">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                          <p className="mb-2">
                           {ob.attributes.shortContent}
                          </p>
                          <div className="post-meta d-flex">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              32
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              42
                            </a>
                            <a href="#">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>{" "}
                              7
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Post Area --> */}
                  <div className="single-post-area mb-30 ">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <img src="img/bg-img/23.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Content --> */}
                        <div className="post-content mt-0">
                          <a
                            href="#"
                            className="post-cata cata-sm cata-primary"
                          >
                            Business
                          </a>
                          <a
                            href="single-post.html"
                            className="post-title mb-2"
                          >
                            Theresa May battles Brexiteer backlash amid disquiet
                          </a>
                          <div className="post-meta d-flex align-items-center mb-2">
                            <a href="#" className="post-author">
                              By Jane
                            </a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                            <a href="#" className="post-date">
                              Sep 08, 2018
                            </a>
                          </div>
                          <p className="mb-2">
                            Quisque mollis tristique ante. Proin ligula eros,
                            varius id tristique sit amet, rutrum non ligula.
                          </p>
                          <div className="post-meta d-flex">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              32
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              42
                            </a>
                            <a href="#">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>{" "}
                              7
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Post Area --> */}
                  <div className="single-post-area mb-30 ">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <img src="img/bg-img/24.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* <!-- Post Content --> */}
                        <div className="post-content mt-0">
                          <a href="#" className="post-cata cata-sm cata-danger">
                            Game
                          </a>
                          <a
                            href="single-post.html"
                            className="post-title mb-2"
                          >
                            Theresa May warned Brexit strategy 'risks putting
                            Jeremy Corbyn
                          </a>
                          <div className="post-meta d-flex align-items-center mb-2">
                            <a href="#" className="post-author">
                              By Jane
                            </a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                            <a href="#" className="post-date">
                              Sep 08, 2018
                            </a>
                          </div>
                          <p className="mb-2">
                            Quisque mollis tristique ante. Proin ligula eros,
                            varius id tristique sit amet, rutrum non ligula.
                          </p>
                          <div className="post-meta d-flex">
                            <a href="#">
                              <i
                                className="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>{" "}
                              32
                            </a>
                            <a href="#">
                              <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                              42
                            </a>
                            <a href="#">
                              <i
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>{" "}
                              7
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5 col-lg-4">
                <div className="sidebar-area">

                  {/* <!-- ***** ad Widget ***** --> */}

               <div className="single-widget add-widget mb-50 bg-white shadow">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>



                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget followers-widget mb-50 bg-white shadow">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                      <span className="counter">198</span>
                      <span>اعجاب</span>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                      <span className="counter">220</span>
                      <span>متابع</span>
                    </a>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                      <span className="counter text-center">140</span>
                      <span>متابع</span>
                    </a>
                    <a href="#" className="google">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                      <span className="counter text-center">140</span>
                      <span>مشترك</span>
                    </a>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget latest-video-widget mb-50 bg-white shadow">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      <h4>مقتطفات</h4>
                      
                      <div className="line"></div>
                    </div>
                    {[...breakingNewsData.data.slice(14, 28)].map((ob) => (<div key={ob.id} className="single-blog-post d-flex">
                       
                      <div className="post-content">
                        <span  className="post-title">
                         {ob.attributes.content}
                        </span>
                        <div className="post-meta d-flex justify-content-between">
                        { new Date(ob.attributes.createdAt).toISOString().split("T")[0]}
                        </div>
                      </div>
                    </div>))}
                    
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget add-widget mb-50 bg-white shadow">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>

                  {/* <!-- ***** Sidebar Widget ***** --> */}
                  <div className="single-widget youtube-channel-widget mb-50 bg-white shadow">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                   
                      <a href="articles/"> <h4>مقالات</h4></a>
                      
                      <div className="line"></div>
                    </div>
                    {[...articaleData.data.slice(0, 7)].map((ob) => ( <div key={ob.id} className="single-youtube-channel d-flex align-items-center">
                      <div className="youtube-channel-thumbnail">
                      <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={110} height={80}     />
                      </div>
                      <div className="youtube-channel-content">
                        <a href={"articles/"+ob.attributes.slug} className="channel-title">
                        {ob.attributes.title}
                        </a>
                        <div className="post-meta d-flex align-items-center mb-2">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        
                      </div>
                    </div>))}
                   
                   
 
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget newsletter-widget mb-50 bg-white">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      <h4>النشرة البريدية</h4>
                      <div className="line"></div>
                    </div>
                    <p>
                      اشترك معنا واحصل على المزيد من الاخبار اولا باول
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
                          اشترك
                        </button>
                      </form>
                    </div>
                  </div>
                  
                  {/* ad widget */}
                  <div className="single-widget add-widget mb-50 bg-white shadow">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget mb-50 bg-white shadow">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      
                      <a href={russianNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/"}> <h4>الحرب الروسية</h4></a>
                     
                      <div className="line"></div>
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
                      <a   href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                           {ob.attributes.title}
                          </a>
                        <div className="post-meta d-flex justify-content-between">
                        { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                      <div className="post-thumbnail">
                        <img src="img/bg-img/36.jpg" alt="" />
                      </div>
                      <div className="post-content">
                        <a href="single-post.html" className="post-title">
                          Sweet Yummy Chocolate in the
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
                        <img src="img/bg-img/37.jpg" alt="" />
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
                        <img src="img/bg-img/38.jpg" alt="" />
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
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
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

  return res.json();
}

export async function getLocalNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=yemeni-news`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}

export async function getGlobalNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=inernational-news`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}
export async function getRussianNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=russian-news`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}

export async function getِArticales() {
  const res = await fetch(
    `${BASE_URL}/api/articales?populate=*&pagination[limit]=7&sort[0]=publishedAt%3Adesc`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}
