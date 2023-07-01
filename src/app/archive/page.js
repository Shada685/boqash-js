import Head from "next/head";
import Script from "next/script";
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
      {/* <div class="preloader d-flex align-items-center justify-content-center">
        <div class="lds-ellipsis">
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
                                <p>اخر الاخبار</p>
                            </div>
                            <div id="breakingNewsTicker" className="ticker">
                                <ul>
                                    <li><a href="single-post.html">بوتين يعلن مشروعاً لإنشاء منطقة صناعية روسية في
                                            مصر</a></li>
                                    <li><a href="single-post.html">تحديات سعر الصرف ومصلحة المواطن</a></li>
                                    <li><a href="single-post.html">هل تورطت بريطانيا في تزوير أسعار الفائدة خلال الأزمة
                                            المالية العالمية؟</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="top-meta-data d-flex align-items-center justify-content-end">
                            {/* <!-- Top Social Info --> */}
                            <div className="top-social-info">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                            {/* <!-- Top Search Area --> */}
                            <div className="top-search-area">
                                <form action="index.html" method="post">
                                    <input type="search" name="top-search" id="topSearch" placeholder="بحث..." />
                                    <button type="submit" className="btn"><i className="fa fa-search"
                                            aria-hidden="true"></i></button>
                                </form>
                            </div>
                            {/* <!-- Login --> */}
                            <a href="login.html" className="login-btn"><i className="fa fa-user" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Navbar Area --> */}
        <div class="vizew-main-menu" id="sticker">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">

                    {/* <!-- Menu --> */}
                    <nav class="classy-navbar justify-content-between" id="vizewNav">

                        {/* <!-- Nav brand --> */}
                        <a href="index.html" class="nav-brand"><img src="/img/core-img/logo2.png" alt="" /></a>

                        {/* <!-- Navbar Toggler --> */}
                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <div class="classy-menu">

                            {/* <!-- Close Button --> */}
                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>

                            {/* <!-- Nav Start --> */}
                            <div class="classynav">
                                <ul>
                                    <li class="active"><a href="index.html">الرئيسية</a></li>
                                    <li><a href="archive-list.html">Archives</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul class="dropdown">
                                            <li><a href="index.html">- الرئيسية</a></li>
                                            <li><a href="archive-list.html">- Archive List</a></li>
                                            <li><a href="archive-grid.html">- Archive Grid</a></li>
                                            <li><a href="single-post.html">- Single Post</a></li>
                                            <li><a href="video-post.html">- Single Video Post</a></li>
                                            <li><a href="contact.html">- Contact</a></li>
                                            <li><a href="typography.html">- Typography</a></li>
                                            <li><a href="login.html">- Login</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Features</a>
                                        <div class="megamenu">
                                            <ul class="single-mega cn-col-4">
                                                <li><a href="index.html">- الرئيسية</a></li>
                                                <li><a href="archive-list.html">- Archive List</a></li>
                                                <li><a href="archive-grid.html">- Archive Grid</a></li>
                                                <li><a href="single-post.html">- Single Post</a></li>
                                                <li><a href="video-post.html">- Single Video Post</a></li>
                                                <li><a href="contact.html">- Contact</a></li>
                                                <li><a href="typography.html">- Typography</a></li>
                                                <li><a href="login.html">- Login</a></li>
                                            </ul>
                                            <ul class="single-mega cn-col-4">
                                                <li><a href="index.html">- الرئيسية</a></li>
                                                <li><a href="archive-list.html">- Archive List</a></li>
                                                <li><a href="archive-grid.html">- Archive Grid</a></li>
                                                <li><a href="single-post.html">- Single Post</a></li>
                                                <li><a href="video-post.html">- Single Video Post</a></li>
                                                <li><a href="contact.html">- Contact</a></li>
                                                <li><a href="typography.html">- Typography</a></li>
                                                <li><a href="login.html">- Login</a></li>
                                            </ul>
                                            <ul class="single-mega cn-col-4">
                                                <li><a href="index.html">- الرئيسية</a></li>
                                                <li><a href="archive-list.html">- Archive List</a></li>
                                                <li><a href="archive-grid.html">- Archive Grid</a></li>
                                                <li><a href="single-post.html">- Single Post</a></li>
                                                <li><a href="video-post.html">- Single Video Post</a></li>
                                                <li><a href="contact.html">- Contact</a></li>
                                                <li><a href="typography.html">- Typography</a></li>
                                                <li><a href="login.html">- Login</a></li>
                                            </ul>
                                            <ul class="single-mega cn-col-4">
                                                <li><a href="index.html">- الرئيسية</a></li>
                                                <li><a href="archive-list.html">- Archive List</a></li>
                                                <li><a href="archive-grid.html">- Archive Grid</a></li>
                                                <li><a href="single-post.html">- Single Post</a></li>
                                                <li><a href="video-post.html">- Single Video Post</a></li>
                                                <li><a href="contact.html">- Contact</a></li>
                                                <li><a href="typography.html">- Typography</a></li>
                                                <li><a href="login.html">- Login</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
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
    <div class="vizew-breadcrumb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    {/* <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fa fa-الرئيسية" aria-hidden="true"></i>
                                    الرئيسية</a></li>
                            <li class="breadcrumb-item"><a href="#">Feature</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Archive by Category SPORTS</li>
                        </ol>
                    </nav> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ##### Breadcrumb Area End ##### --> */}

    {/* <!-- ##### Archive Grid Posts Area Start ##### --> */}
    <div class="vizew-grid-posts-area mb-80">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8">
                    {/* <!-- Archive Catagory & View Options --> */}
                    <div class="archive-catagory-view mb-50 d-flex align-items-center justify-content-between">
                        {/* <!-- Catagory --> */}
                        <div class="archive-catagory">
                            <h4><i class="fa fa-trophy" aria-hidden="true"></i> Archive</h4>
                        </div>
                        {/* <!-- View Options --> */}
                        
                    </div>

                    <div class="row">
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

                                {/* <!-- Video Duration --> */}
                                <span className="video-duration">05.03</span>
                            </div>

                            {/* <!-- Single Feature Post --> */}
                            
                        </div>

                      
{/* post single list */}
 {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt="" />

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" class="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" class="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/24.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" class="post-title mb-2">Theresa May warned Brexit
                                        strategy 'risks putting Jeremy Corbyn</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/21.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" class="post-title mb-2">May fights on after Johnson
                                        savages Brexit approach</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" class="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" class="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


{/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt="" />

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" class="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" class="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/24.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" class="post-title mb-2">Theresa May warned Brexit
                                        strategy 'risks putting Jeremy Corbyn</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/21.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" class="post-title mb-2">May fights on after Johnson
                                        savages Brexit approach</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" class="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div class="single-post-area style-2">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div class="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                    {/* <!-- Video Duration --> */}
                                    <span class="video-duration">05.03</span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div class="post-content mt-0">
                                    <a href="#" class="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" class="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div class="post-meta d-flex align-items-center mb-2">
                                        <a href="#" class="post-author">By Jane</a>
                                        <i class="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" class="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p class="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div class="post-meta d-flex">
                                        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/* sigle post list end  */}

                        
                    </div>

                    {/* <!-- Pagination --> */}
                    <nav class="mt-50">
                        <ul class="pagination justify-content-center">
                            <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="sidebar-area">

                        

                    

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div class="single-widget add-widget mb-50">
                            <a href="#"><img src="img/bg-img/add.png" alt=""/></a>
                        </div>

                     

                       

                        

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ##### Archive Grid Posts Area End ##### --> */}

  {/* <!-- ##### Footer Area Start ##### --> */}
    <footer className="footer-area">
        <div className="container">
            <div className="row">
                {/* <!-- Footer Widget Area --> */}
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="footer-widget mb-70">
                        {/* <!-- Logo --> */}
                        <a href="index.html" className="foo-logo d-block mb-4"><img src="img/core-img/logo2.png" alt="" /></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna</p>
                        {/* <!-- Footer Newsletter Area --> */}
                        <div className="footer-nl-area">
                            <form action="#" method="post">
                                <input type="email" name="nl-email" className="form-control" id="nlEmail"
                                    placeholder="Your email"/>
                                <button type="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
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
                                    <p><i className="fa fa-twitter"></i> <span>@Leonard</span> I am so happy because I found
                                        this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                </div>
                                {/* <!-- Single Twit --> */}
                                <div className="single-twit">
                                    <p><i className="fa fa-twitter"></i> <span>@Leonard</span> I am so happy because I found
                                        this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                </div>
                            </div>

                            {/* <!-- Single Twitter Slide --> */}
                            <div className="single--twitter-slide">
                                {/* <!-- Single Twit --> */}
                                <div className="single-twit">
                                    <p><i className="fa fa-twitter"></i> <span>@dracware</span> I am so happy because I
                                        found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                </div>
                                {/* <!-- Single Twit --> */}
                                <div className="single-twit">
                                    <p><i className="fa fa-twitter"></i> <span>@dracware</span> I am so happy because I
                                        found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
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
                                <a href="single-post.html" className="post-title">DC Shoes: gymkhana the</a>
                                <div className="post-meta d-flex justify-content-between">
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="single-blog-post d-flex">
                            <div className="post-thumbnail">
                                <img src="img/bg-img/2.jpg" alt=""/>
                            </div>
                            <div className="post-content">
                                <a href="single-post.html" className="post-title">Sweet Yummy Chocolatea Tea</a>
                                <div className="post-meta d-flex justify-content-between">
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
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
                            <p>101 E 129th St, East Chicago, <br/>IN 46312, US</p>
                            <p>Phone: 001-1234-88888</p>
                            <p>Email: info.dracware@gmail.com</p>
                        </div>
                        {/* <!-- Footer Social Area --> */}
                        <div className="footer-social-area">
                            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                            <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
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
                           
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script> All rights reserved | This
                            template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a
                                href="" target="_blank">dracware</a>
                            
                        </p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <nav className="footer-nav">
                            <ul>
                                <li><a href="#">Advertise</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Disclaimer</a></li>
                                <li><a href="#">Privacy</a></li>
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
  )
}