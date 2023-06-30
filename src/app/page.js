import Head from "next/head";
import Script from "next/script";
import '../../public/style.css'
import '../../public/css/style-grocery-price.css'
import '../../public/css/style-currency.css'


export default function Home() {
  return (
    <>
    <Head>
   
  
    </Head>
    <body>
       
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

    {/* <!-- ##### Hero Area Start ##### --> */}
    <section className="hero--area section-padding-80">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-12 col-md-7 col-lg-8">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="post-1" role="tabpanel" aria-labelledby="post-1-tab">
                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                            style={{ backgroundImage: "url(/img/bg-img/7.jpg)" }}
                               >
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
                        </div>
                        <div className="tab-pane fade" id="post-2" role="tabpanel" aria-labelledby="post-2-tab">
                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                               >
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
                        </div>
                        <div className="tab-pane fade" id="post-3" role="tabpanel" aria-labelledby="post-3-tab">
                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                              >
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
                        </div>

                        <div className="tab-pane fade" id="post-4" role="tabpanel" aria-labelledby="post-4-tab">
                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                              >
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
                        </div>

                        <div className="tab-pane fade" id="post-5" role="tabpanel" aria-labelledby="post-5-tab">
                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                               >
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
                        </div>

                        <div className="tab-pane fade" id="post-6" role="tabpanel" aria-labelledby="post-6-tab">
                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                              >
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
                        </div>

                        <div className="tab-pane fade" id="post-7" role="tabpanel" aria-labelledby="post-7-tab">
                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                              >
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
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-5 col-lg-4">
                    <ul className="nav vizew-nav-tab" role="tablist">

                        <li className="nav-item">
                            <a className="nav-link active" id="post-1-tab" data-toggle="pill" href="#post-1" role="tab"
                                aria-controls="post-1" aria-selected="true">
                                {/* <!-- Single Blog Post --> */}
                                <div className="single-blog-post style-2 d-flex align-items-center">
                                    <div className="post-thumbnail">
                                       
                                        <img src="/img/bg-img/3.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <h6 className="post-title">Boys 'doing well' after Thai cave rescue</h6>
                                        <div className="post-meta d-flex justify-content-between">
                                            <span><i className="fa fa-comments-o" aria-hidden="true"></i> 25</span>
                                            <span><i className="fa fa-eye" aria-hidden="true"></i> 11</span>
                                            <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 19</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="post-2-tab" data-toggle="pill" href="#post-2" role="tab"
                                aria-controls="post-2" aria-selected="false">
                                {/* <!-- Single Blog Post --> */}
                                <div className="single-blog-post style-2 d-flex align-items-center">
                                    <div className="post-thumbnail">
                                      
                                        <img  src="/img/bg-img/4.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <h6 className="post-title">Meet the 12 boys rescued from cave</h6>
                                        <div className="post-meta d-flex justify-content-between">
                                            <span><i className="fa fa-comments-o" aria-hidden="true"></i> 14</span>
                                            <span><i className="fa fa-eye" aria-hidden="true"></i> 34</span>
                                            <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="post-3-tab" data-toggle="pill" href="#post-3" role="tab"
                                aria-controls="post-3" aria-selected="false">
                                {/* <!-- Single Blog Post --> */}
                                <div className="single-blog-post style-2 d-flex align-items-center">
                                    <div className="post-thumbnail">
                                        
                                        <img src="/img/bg-img/5.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <h6 className="post-title">Pogba dedicates France win to Thai cave boys</h6>
                                        <div className="post-meta d-flex justify-content-between">
                                            <span><i className="fa fa-comments-o" aria-hidden="true"></i> 14</span>
                                            <span><i className="fa fa-eye" aria-hidden="true"></i> 34</span>
                                            <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="post-4-tab" data-toggle="pill" href="#post-4" role="tab"
                                aria-controls="post-4" aria-selected="false">
                                {/* <!-- Single Blog Post --> */}
                                <div className="single-blog-post style-2 d-flex align-items-center">
                                    <div className="post-thumbnail">
                                        
                                        <img src="/img/bg-img/6.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <h6 className="post-title">How the world reacted to PM's Brexit crisis</h6>
                                        <div className="post-meta d-flex justify-content-between">
                                            <span><i className="fa fa-comments-o" aria-hidden="true"></i> 24</span>
                                            <span><i className="fa fa-eye" aria-hidden="true"></i> 98</span>
                                            <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 63</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="post-5-tab" data-toggle="pill" href="#post-5" role="tab"
                                aria-controls="post-5" aria-selected="false">
                                {/* <!-- Single Blog Post --> */}
                                <div className="single-blog-post style-2 d-flex align-items-center">
                                    <div className="post-thumbnail">
                                     
                                        <img src="/img/bg-img/4.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <h6 className="post-title">Meet the 12 boys rescued from cave</h6>
                                        <div className="post-meta d-flex justify-content-between">
                                            <span><i className="fa fa-comments-o" aria-hidden="true"></i> 14</span>
                                            <span><i className="fa fa-eye" aria-hidden="true"></i> 34</span>
                                            <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="post-6-tab" data-toggle="pill" href="#post-6" role="tab"
                                aria-controls="post-6" aria-selected="false">
                                {/* <!-- Single Blog Post --> */}
                                <div className="single-blog-post style-2 d-flex align-items-center">
                                    <div className="post-thumbnail">
                                         <img  src="/img/bg-img/6.jpg" alt=""/>
                                    </div>
                                    <div className="post-content">
                                        <h6 className="post-title">How the world reacted to PM's Brexit crisis</h6>
                                        <div className="post-meta d-flex justify-content-between">
                                            <span><i className="fa fa-comments-o" aria-hidden="true"></i> 24</span>
                                            <span><i className="fa fa-eye" aria-hidden="true"></i> 98</span>
                                            <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 63</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="post-7-tab" data-toggle="pill" href="#post-7" role="tab"
                                aria-controls="post-7" aria-selected="false">
                                {/* <!-- Single Blog Post --> */}
                                <div className="single-blog-post style-2 d-flex align-items-center">
                                    <div className="post-thumbnail">
                                        
                                         <img src="/img/bg-img/4.jpg" alt=""/>
                                    </div>
                                    <div className="post-content">
                                        <h6 className="post-title">Meet the 12 boys rescued from cave</h6>
                                        <div className="post-meta d-flex justify-content-between">
                                            <span><i className="fa fa-comments-o" aria-hidden="true"></i> 14</span>
                                            <span><i className="fa fa-eye" aria-hidden="true"></i> 34</span>
                                            <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ##### Hero Area End ##### --> */}
    {/* <!-- ##### Header Area End ##### --> */}
    

    {/* <!-- ##### Trending Posts Area Start ##### --> */}
    <section className="trending-posts-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading">
                        <h4>Trending Videos</h4>
                        <div className="line"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* <!-- Single Blog Post --> */}
                <div className="col-12 col-md-4 ">
                    <div className="single-post-area mb-80">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                           
                             <img src="/img/bg-img/11.jpg" alt="" />

                            {/* <!-- Video Duration --> */}
                            <span className="video-duration">05.03</span>
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content ">
                            <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                            <a href="single-post.html" className="post-title">Warner Bros. Developing ‘The accountant’
                                Sequel</a>
                            <div className="post-meta d-flex">
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 22</a>
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 16</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 15</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Blog Post --> */}
                <div className="col-12 col-md-4">
                    <div className="single-post-area mb-80">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          
 <img src="/img/bg-img/12.jpg" alt=""/>
                            {/* <!-- Video Duration --> */}
                            <span className="video-duration">05.03</span>
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                            <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                            <a href="single-post.html" className="post-title">انباء عن اصدار لعبة GTA6</a>
                            <div className="post-meta d-flex">
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 28</a>
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Blog Post --> */}
                <div className="col-12 col-md-4">
                    <div className="single-post-area mb-80">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                           
 <img src="/img/bg-img/13.jpg" alt=""/>
                            {/* <!-- Video Duration --> */}
                            <span className="video-duration">05.03</span>
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                            <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                            <a href="single-post.html" className="post-title">Love Island star's boyfriend found dead after
                                her funeral</a>
                            <div className="post-meta d-flex">
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    {/* <!-- ##### Trending Posts Area End ##### --> */}
{/* <!-- ##### Vizew Post Area Start ##### --> */}
    <section className="vizew-post-area mb-50 ">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7 col-lg-8 ">
                    <div className="all-posts-area">
                        {/* <!-- Section Heading --> */}
                        <div className="section-heading style-2">
                            <h4>Featured Videos</h4>
                            <div className="line"></div>
                        </div>

                        {/* <!-- Featured Post Slides --> */}
                        <div className="featured-post-slides owl-carousel mb-30 ">
                            

                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                               style={{ backgroundImage: "url(/img/bg-img/7.jpg)" }}>
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
                        </div>

                        <div className="row">
                            {/* <!-- Single Blog Post --> */}
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="single-post-area mb-80">
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/12.jpg" alt="" />

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>

                                    {/* <!-- Post Content --> */}
                                    <div className="post-content">
                                        <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                        <a href="single-post.html" className="post-title">Searching for the 'angel' who held
                                            me on Westminste Bridge</a>
                                        <div className="post-meta d-flex">
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 28</a>
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Blog Post --> */}

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="single-post-area mb-80">
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/13.jpg" alt="" />

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>

                                    {/* <!-- Post Content --> */}
                                    <div className="post-content">
                                        <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                        <a href="single-post.html" className="post-title">Love Island star's boyfriend found
                                            dead after her funeral</a>
                                        <div className="post-meta d-flex">
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* <!-- Single Blog Post --> */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-post-area mb-80">
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/12.jpg" alt="" />

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>

                                    {/* <!-- Post Content --> */}
                                    <div className="post-content">
                                        <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                        <a href="single-post.html" className="post-title">Searching for the 'angel' who held
                                            me on Westminste Bridge</a>
                                        <div className="post-meta d-flex">
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 28</a>
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-post-area mb-80">
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/13.jpg" alt="" />

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>

                                    {/* <!-- Post Content --> */}
                                    <div className="post-content">
                                        <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                        <a href="single-post.html" className="post-title">Love Island star's boyfriend found
                                            dead after her funeral</a>
                                        <div className="post-meta d-flex">
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-post-area mb-80">
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/13.jpg" alt="" />

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>

                                    {/* <!-- Post Content --> */}
                                    <div className="post-content">
                                        <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                        <a href="single-post.html" className="post-title">Love Island star's boyfriend found
                                            dead after her funeral</a>
                                        <div className="post-meta d-flex">
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-6">
                                {/* <!-- Section Heading --> */}
                                <div className="section-heading style-2">
                                    <h4>Sport Videos</h4>
                                    <div className="line"></div>
                                </div>

                                {/* <!-- Sports Video Slides --> */}
                                <div className="sport-video-slides owl-carousel mb-50">
                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-post-area">
                                        {/* <!-- Post Thumbnail --> */}
                                        <div className="post-thumbnail">
                                            <img src="img/bg-img/15.jpg" alt="" />

                                            {/* <!-- Video Duration --> */}
                                            <span className="video-duration">05.03</span>
                                        </div>

                                        {/* <!-- Post Content --> */}
                                        <div className="post-content">
                                            <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                            <a href="single-post.html" className="post-title">Searching for the 'angel' who
                                                held me on Westminster Bridge</a>
                                            <div className="post-meta d-flex">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-post-area ">
                                        {/* <!-- Post Thumbnail --> */}
                                        <div className="post-thumbnail">
                                            <img src="img/bg-img/13.jpg" alt="" />

                                            {/* <!-- Video Duration --> */}
                                            <span className="video-duration">05.03</span>
                                        </div>

                                        {/* <!-- Post Content --> */}
                                        <div className="post-content ">
                                            <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                            <a href="single-post.html" className="post-title">Searching for the 'angel' who
                                                held me on Westminster Bridge</a>
                                            <div className="post-meta d-flex">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                {/* <!-- Section Heading --> */}
                                <div className="section-heading style-2">
                                    <h4>Business Videos</h4>
                                    <div className="line"></div>
                                </div>

                                {/* <!-- Business Video Slides --> */}
                                <div className="business-video-slides owl-carousel mb-50">
                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-post-area">
                                        {/* <!-- Post Thumbnail --> */}
                                        <div className="post-thumbnail">
                                            <img src="img/bg-img/17.jpg" alt="" />

                                            {/* <!-- Video Duration --> */}
                                            <span className="video-duration">05.03</span>
                                        </div>

                                        {/* <!-- Post Content --> */}
                                        <div className="post-content">
                                            <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                            <a href="single-post.html" className="post-title">Full article Prince Charles's
                                                'urgent' global research</a>
                                            <div className="post-meta d-flex">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-post-area">
                                        {/* <!-- Post Thumbnail --> */}
                                        <div className="post-thumbnail">
                                            <img src="img/bg-img/13.jpg" alt="" />

                                            {/* <!-- Video Duration --> */}
                                            <span className="video-duration">05.03</span>
                                        </div>

                                        {/* <!-- Post Content --> */}
                                        <div className="post-content">
                                            <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                            <a href="single-post.html" className="post-title">Full article Prince Charles's
                                                'urgent' global research</a>
                                            <div className="post-meta d-flex">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-30">
                            {/* <!-- Single Blog Post --> */}
                            <div className="col-12 col-lg-6 ">
                                <div className="single-blog-post style-3 d-flex mb-50">
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/16.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">Epileptic boy's cannabis let
                                            through border</a>
                                        <div className="post-meta d-flex justify-content-between">
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 16</a>
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 26</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 17</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="col-12 col-lg-6">
                                <div className="single-blog-post style-3 d-flex mb-50">
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/18.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">Paramedics 'drilled into boat
                                            death woman'</a>
                                        <div className="post-meta d-flex justify-content-between">
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 16</a>
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 26</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 17</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="col-12 col-lg-6">
                                <div className="single-blog-post style-3 d-flex mb-50">
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/19.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">Tory vice-chairs quit over PM's
                                            Brexit plan</a>
                                        <div className="post-meta d-flex justify-content-between">
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 16</a>
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 26</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 17</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="col-12 col-lg-6">
                                <div className="single-blog-post style-3 d-flex mb-50">
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/20.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">Do This One Simple Action for an
                                            Absolutely</a>
                                        <div className="post-meta d-flex justify-content-between">
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 16</a>
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 26</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 17</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Section Heading --> */}
                        <div className="section-heading style-2">
                            <h4>Latest News</h4>
                            <div className="line"></div>
                        </div>

                        {/* <!-- Featured Post Slides --> */}
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

                        {/* <!-- Single Post Area --> */}
                        <div className="single-post-area mb-30">
                            <div className="row align-items-center ">
                                <div className="col-12 col-lg-6">
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/21.jpg" alt="" />

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* <!-- Post Content --> */}
                                    <div className="post-content mt-0 ">
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
                        <div className="single-post-area mb-30">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-6">
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/22.jpg" alt="" />

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* <!-- Post Content --> */}
                                    <div className="post-content mt-0">
                                        <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                        <a href="single-post.html" className="post-title mb-2">Thailand cave rescue: Boys
                                            'doing well' after spending night</a>
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
                        <div className="single-post-area mb-30">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-6">
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/23.jpg" alt="" />

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
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
                        <div className="single-post-area mb-30">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-6">
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="post-thumbnail">
                                        <img src="img/bg-img/24.jpg" alt="" />

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
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

                    </div>
                </div>

                <div className="col-12 col-md-5 col-lg-4">
                    <div className="sidebar-area">

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget followers-widget mb-50">
                            <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span
                                    className="counter">198</span><span>Fan</span></a>
                            <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span
                                    className="counter">220</span><span>Followers</span></a>
                            <a href="#" className="google"><i className="fa fa-google" aria-hidden="true"></i><span
                                    className="counter">140</span><span>Subscribe</span></a>
                        </div>

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget latest-video-widget mb-50 ">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading style-2 mb-30">
                                <h4>Latest Video</h4>
                                <div className="line"></div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="single-post-area mb-30">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/13.jpg" alt="" />

                                    {/* <!-- Video Duration --> */}
                                    <span className="video-duration">05.03</span>
                                </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Full article Prince Charles's 'urgent'
                                        global research</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="single-blog-post d-flex">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/1.jpg" alt="" />
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">DC Shoes: gymkhana five; the making
                                        of</a>
                                    <div className="post-meta d-flex justify-content-between">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 29</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 08</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 23</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="single-blog-post d-flex">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/2.jpg" alt="" />
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">Sweet Yummy Chocolatea Tea</a>
                                    <div className="post-meta d-flex justify-content-between">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 17</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 33</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 26</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="single-blog-post d-flex">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/35.jpg" alt="" />
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</a>
                                    <div className="post-meta d-flex justify-content-between">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 11</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 21</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget add-widget mb-50">
                            <a href="#"><img src="img/bg-img/add.png" alt="" /></a>
                        </div>

                        {/* <!-- ***** Sidebar Widget ***** --> */}
                        <div className="single-widget youtube-channel-widget mb-50">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading style-2 mb-30">
                                <h4>Hot Channels</h4>
                                <div className="line"></div>
                            </div>

                            {/* <!-- Single YouTube Channel --> */}
                            <div className="single-youtube-channel d-flex align-items-center">
                                <div className="youtube-channel-thumbnail">
                                    <img src="img/bg-img/25.jpg" alt="" />
                                </div>
                                <div className="youtube-channel-content">
                                    <a href="single-post.html" className="channel-title">Music Channel</a>
                                    <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o"
                                            aria-hidden="true"></i> Subscribe</a>
                                </div>
                            </div>

                            {/* <!-- Single YouTube Channel --> */}
                            <div className="single-youtube-channel d-flex align-items-center">
                                <div className="youtube-channel-thumbnail">
                                    <img src="img/bg-img/26.jpg" alt="" />
                                </div>
                                <div className="youtube-channel-content">
                                    <a href="single-post.html" className="channel-title">Trending Channel</a>
                                    <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o"
                                            aria-hidden="true"></i> Subscribe</a>
                                </div>
                            </div>

                            {/* <!-- Single YouTube Channel --> */}
                            <div className="single-youtube-channel d-flex align-items-center">
                                <div className="youtube-channel-thumbnail">
                                    <img src="img/bg-img/27.jpg" alt="" />
                                </div>
                                <div className="youtube-channel-content">
                                    <a href="single-post.html" className="channel-title">Travel Channel</a>
                                    <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o"
                                            aria-hidden="true"></i> Subscribe</a>
                                </div>
                            </div>

                            {/* <!-- Single YouTube Channel --> */}
                            <div className="single-youtube-channel d-flex align-items-center">
                                <div className="youtube-channel-thumbnail">
                                    <img src="img/bg-img/28.jpg" alt="" />
                                </div>
                                <div className="youtube-channel-content">
                                    <a href="single-post.html" className="channel-title">Sport Channel</a>
                                    <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o"
                                            aria-hidden="true"></i> Subscribe</a>
                                </div>
                            </div>

                            {/* <!-- Single YouTube Channel --> */}
                            <div className="single-youtube-channel d-flex align-items-center">
                                <div className="youtube-channel-thumbnail">
                                    <img src="img/bg-img/29.jpg" alt=""/>
                                </div>
                                <div className="youtube-channel-content">
                                    <a href="single-post.html" className="channel-title">TV Show Channel</a>
                                    <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o"
                                            aria-hidden="true"></i> Subscribe</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget newsletter-widget mb-50">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading style-2 mb-30">
                                <h4>Newsletter</h4>
                                <div className="line"></div>
                            </div>
                            <p>Subscribe our newsletter gor get notification about new updates, information discount,
                                etc.</p>
                            {/* <!-- Newsletter Form --> */}
                            <div className="newsletter-form">
                                <form action="#" method="post">
                                    <input type="email" name="nl-email" className="form-control mb-15" id="emailnl"
                                        placeholder="Enter your email" />
                                    <button type="submit" className="btn vizew-btn w-100">Subscribe</button>
                                </form>
                            </div>
                        </div>

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget mb-50">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading style-2 mb-30">
                                <h4>Most Viewed Playlist</h4>
                                <div className="line"></div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="single-blog-post d-flex">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/1.jpg" alt=""/>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">DC Shoes: gymkhana five; the making
                                        of</a>
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
                                    <a href="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</a>
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
                                    <img src="img/bg-img/36.jpg" alt=""/>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">Sweet Yummy Chocolate in the</a>
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
                                    <img src="img/bg-img/37.jpg" alt=""/>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">DC Shoes: gymkhana five; the making
                                        of</a>
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
                                    <img src="img/bg-img/38.jpg" alt=""/>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</a>
                                    <div className="post-meta d-flex justify-content-between">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
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
