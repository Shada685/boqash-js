import Head from "next/head";
import Script from "next/script";
import Footer from "../components/footer";
import '../../../public/style.css'
import '../../../public/css/style-grocery-price.css'
import '../../../public/css/style-currency.css'

export default function Category() {
  return (
    <>
<Head>
    <title>Archive</title>

    </Head>
    <body>
      {/* <div className="preloader d-flex align-items-center justify-content-center">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div> */}

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
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </div>
                    {/* <!-- Top Search Area --> */}
                    <div className="top-search-area">
                      <form action="/" method="post">
                        <input
                          type="search"
                          name="top-search"
                          id="topSearch"
                          placeholder="يحث..."
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
                  <a href="/" className="nav-brand">
                    <img src="img/core-img/logo.png" alt="" />
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
                          <a href="/">الرئيسية</a>
                        </li>
                        {/* <li>
                          <a href="archive-list.html">الاخبار المحلية</a>
                        </li> */}
                        
                        <li>
                          <a href="">الاخبار</a>
                          <ul className="dropdown">
                            <li>
                              <a href="/">- الاخبار المحلية</a>
                            </li>
                            <li>
                              <a href="archive-list.html">- الاخبار العربية</a>
                            </li>
                            <li>
                              <a href="archive-grid.html">- الاخبار العالمية</a>
                            </li>
                            <li>
                              <a href="archive-grid.html">- الحرب الروسية</a>
                            </li>
                           
                           
                          </ul>
                        </li>
                        <li>
                          <a href="">الاسعار</a>
                          <div className="megamenu">
                            <ul className="single-mega cn-col-4">
                              <li>
                                <a href="/">- العملة</a>
                              </li>
                              <li>
                                <a href="archive-list.html">- الدولار</a>
                              </li>
                              <li>
                                <a href="archive-grid.html">- الريال السعودي</a>
                              </li>
                              <li>
                                <a href="single-post.html">- اليورو</a>
                              </li>
                              <li>
                                <a href="video-post.html">
                                  - درهم اماراتي
                                </a>
                              </li>
                             
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li>
                                <a href="/">- النفط</a>
                              </li>
                              <li>
                                <a href="archive-list.html">- البترول</a>
                              </li>
                              <li>
                                <a href="archive-grid.html">- الديزل</a>
                              </li>
                              <li>
                                <a href="single-post.html">- سولار</a>
                              </li>
                              
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li>
                                <a href="/">- الذهب</a>
                              </li>
                              <li>
                                <a href="archive-list.html">- عيار 24</a>
                              </li>
                              <li>
                                <a href="archive-grid.html">- عيار 21</a>
                              </li>
                              <li>
                                <a href="single-post.html">- عيار 18</a>
                              </li>
                              <li>
                                <a href="video-post.html">
                                  - الجنية
                                </a>
                              </li>
                              <li>
                                <a href="contact.html">- قيراط</a>
                              </li>
                              <li>
                                <a href="typography.html">- سبيكة</a>
                              </li>
                              
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li>
                                <a href="/">- المواد الغذائية</a>
                              </li>
                              <li>
                                <a href="archive-list.html">- الخضار</a>
                              </li>
                              <li>
                                <a href="archive-grid.html">- الفواكة</a>
                              </li>
                              <li>
                                <a href="single-post.html">- الدقيق</a>
                              </li>
                              <li>
                                <a href="video-post.html">
                                  - البر
                                </a>
                              </li>
                              <li>
                                <a href="contact.html">- السكر</a>
                              </li>
                              <li>
                                <a href="typography.html">- الارز</a>
                              </li>
                              
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="contact.html">مقالات</a>
                        </li>
                        <li>
                          <a href="contact.html">مقتطفات</a>
                        </li>
                        <li>
                          <a href="contact.html">عن بقش</a>
                        </li>
                        <li>
                          <a href="contact.html">للاعلان</a>
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

    {/* <!-- ##### Breadcrumb Area Start ##### --> */}
    <div className="vizew-breadcrumb">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i className="fa fa-الرئيسية" aria-hidden="true"></i>
                                    الرئيسية</a></li>
                            <li className="breadcrumb-item"><a href="#">Feature</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Archive by Category SPORTS</li>
                        </ol>
                    </nav> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ##### Breadcrumb Area End ##### --> */}

    {/* <!-- ##### Archive Grid Posts Area Start ##### --> */}
    <div className="vizew-grid-posts-area mb-80">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    {/* <!-- Archive Catagory & View Options --> */}
                    <div className="archive-catagory-view mb-50 d-flex align-items-center justify-content-between">
                        {/* <!-- Catagory --> */}
                        <div className="archive-catagory">
                            <h4><i className="fa fa-trophy" aria-hidden="true"></i> Archive</h4>
                        </div>
                        {/* <!-- View Options --> */}
                        
                    </div>

                    <div className="row">
<div className="featured-post-slides owl-carousel mb-30">
                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                               style={{ backgroundImage: "url(/img/bg-img/14.jpg)" }}>
                                {/* <!-- Play Button --> */}
                                <a href="video-post.html" className="btn play-btn"><i className="fa fa-play"
                                        aria-hidden="true"></i></a>

                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <a href="#" className="post-cata">Sports</a>
                                    <a href="single-post.html" className="post-title">Reunification of migrant toddlers,
                                        parents should be completed Thursday</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 25</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 25</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a>
                                    </div>
                                </div>

                                
                            </div>

                            {/* <!-- Single Feature Post --> */}
                            
                        </div>

                      
{/* post single list */}
 {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt="" />

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" className="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/24.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title mb-2">Theresa May warned Brexit
                                        strategy 'risks putting Jeremy Corbyn</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/21.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title mb-2">May fights on after Johnson
                                        savages Brexit approach</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" className="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


{/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt="" />

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" className="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/24.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title mb-2">Theresa May warned Brexit
                                        strategy 'risks putting Jeremy Corbyn</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/21.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title mb-2">May fights on after Johnson
                                        savages Brexit approach</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" className="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/* sigle post list end  */}

                        
                    </div>

                    {/* <!-- Pagination --> */}
                    <nav className="mt-50">
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left"></i></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="sidebar-area">

                        

                    

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget add-widget mb-50">
                            <a href="#"><img src="img/bg-img/add.png" alt=""/></a>
                        </div>

                     

                       

                        

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ##### Archive Grid Posts Area End ##### --> */}

  {/* <!-- ##### Footer Area Start ##### --> */}
   <Footer />
    {/* <!-- ##### Footer Area End ##### --> */}



<Script src="/js/jquery/jquery-2.2.4.min.js" />
      <Script src="/js/bootstrap/popper.min.js" />
      <Script src="/js/bootstrap/bootstrap.min.js" />
      <Script src="/js/plugins/plugins.js" />
      <Script src="/js/active.js" />

    </body>
    </>
  )
}