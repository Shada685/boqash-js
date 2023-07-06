import Head from 'next/head'
import Script from "next/script";
import Footer from '../components/footer';
import '../../../public/style.css'


export default function About() {
  return (
    <>
    <Head>

    </Head>
    <body>
{/* <!-- ##### Header Area Start ##### --> */}
        <header className="header-area">
          {/* <!-- Top Header Area --> */}
          <div className="top-header-area pt-2">
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
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" aria-hidden="true"></i>
                                    الرئيسية</a></li>
                            <li className="breadcrumb-item"><a href="#">Archives</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Reunification of migrant toddlers
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ##### Breadcrumb Area End ##### --> */}

    {/* <!-- ##### Pager Area Start ##### --> */}
    <div className="vizew-pager-area">
        <div className="vizew-pager-prev">
            <p>PREVIOUS ARTICLE</p>

            {/* <!-- Single Feature Post --> */}
            <div className="single-feature-post video-post bg-img pager-article"
                style={{backgroundImage: "url(img/bg-img/15.jpg);"}}>
                {/* <!-- Post Content --> */}
                <div className="post-content">
                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                    <a href="video-post.html" className="post-title">Searching for the 'angel' who held me on Westminster
                        Bridge</a>
                    <div className="post-meta d-flex">
                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 18</a>
                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 32</a>
                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 24</a>
                    </div>
                </div>
                {/* <!-- Video Duration --> */}
                <span className="video-duration">11.13</span>
            </div>
        </div>

        <div className="vizew-pager-next">
            <p>NEXT ARTICLE</p>

            {/* <!-- Single Feature Post --> */}
            <div className="single-feature-post video-post bg-img pager-article"
                style={{backgroundImage: "url(img/bg-img/14.jpg);"}}>
                {/* <!-- Post Content --> */}
                <div className="post-content">
                    <a href="#" className="post-cata cata-sm cata-business">Business</a>
                    <a href="video-post.html" className="post-title">Reunification of migrant toddlers, parents should be
                        completed Thursday</a>
                    <div className="post-meta d-flex">
                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 25</a>
                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 25</a>
                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a>
                    </div>
                </div>
                {/* <!-- Video Duration --> */}
                <span className="video-duration">06.59</span>
            </div>
        </div>
    </div>
    {/* <!-- ##### Pager Area End ##### --> */}

    {/* <!-- ##### Post Details Area Start ##### --> */}
    <section className="post-details-area mb-80">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="post-details-thumb mb-50">
                        <img src="img/bg-img/34.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                {/* <!-- Post Details Content Area --> */}
                <div className="col-12 col-lg-8 col-xl-7">
                    <div className="post-details-content">
                        {/* <!-- Blog Content --> */}
                        <div className="blog-content">

                            {/* <!-- Post Content --> */}
                            <div className="post-content mt-0">
                                <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                <a href="single-post.html" className="post-title mb-2">Reunification of migrant toddlers,
                                    parents should be completed Thursday</a>

                                <div className="d-flex justify-content-between mb-30">
                                    <div className="post-meta d-flex align-items-center">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>

                            <p>I love dals. All kinds of them but yellow moong dal is my go-to lentil when I am in need
                                of some easy comfort food. In this recipe I added suva or dill leaves to the classic
                                moong dal recipe for a twist. I like the simplicity of this recipe, just the dal,
                                tomatoes and fresh dill with simple seasoning. This recipe is without any onions and
                                garlic. I love the aroma of fresh dill and I think, in Indian food, we don’t really use
                                dill as much as we can. Nine out of ten times, the only green leaves sprinkled on a
                                curry or a dal is fresh coriander and while I love coriander too, dill adds a unique
                                freshness and aroma to the dal. The delicate feathery leaves of dill are also rich in
                                Vitamin A, C and minerals like iron and manganese.</p>

                            <p>Dals or lentils are packed with proteins and especially in a vegetarian diet, lentils are
                                the main source of protein. It is amazing how this humble yellow moong dal can be made
                                into so many recipes from a plain dal khichdi to mangodi ki sabzi to the traditional
                                Indian desserts like moong dal halwa.</p>

                            <blockquote className="vizew-blockquote mb-15">
                                <h5 className="blockquote-text">“If you’re going to try, go all the way. There is no other
                                    feeling like that. You will be alone with the gods.”</h5>
                                <h6>Ollie Schneider - CEO Deercreative</h6>
                            </blockquote>

                            <p>Dals or lentils are packed with proteins and especially in a vegetarian diet, lentils are
                                the main source of protein. It is amazing how this humble yellow moong dal can be made
                                into so many recipes from a plain dal khichdi to mangodi ki sabzi to the traditional
                                Indian desserts like moong dal halwa. Fresh dill should be added only at the end of
                                cooking, much like fresh coriander leaves.</p>

                            <h4>Immediate Dividends</h4>

                            <ul className="unordered-list mb-0">
                                <li>Wash the dal in 3-4 changes of water and soak in room temperature water for 10 mins
                                    while you finish the rest of preparation.</li>
                                <li>Drain and pressure cook with salt, turmeric and water for 2 whistles.</li>
                                <li>Remove the cooker from heat and open only after all the steam has escaped on its
                                    own.</li>
                                <li>While the dal is cooking, heat ghee in a pan. Add hing and cumin seeds.</li>
                                <li>When the seeds start to crackle, add ginger, and green chillies. Sauté for a minute.
                                </li>
                                <li>Add tomatoes and a little salt. Mix well. Cook for about 5 mins with occasional
                                    stirring.</li>
                            </ul>

                            {/* <!-- Post Tags --> */}
                            <div className="post-tags mt-30">
                                <ul>
                                    <li><a href="#">HealthFood</a></li>
                                    <li><a href="#">Sport</a></li>
                                    <li><a href="#">Game</a></li>
                                </ul>
                            </div>

                            

                            {/* <!-- Related Post Area --> */}
                            <div className="related-post-area mt-5">
                                {/* <!-- Section Title --> */}
                                <div className="section-heading style-2">
                                    <h4> المزيد من المقالات</h4>
                                    <div className="line"></div>
                                </div>

                                <div className="row">

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="col-12 col-md-6">
                                        <div className="single-post-area mb-50 bg-white">
                                            {/* <!-- Post Thumbnail --> */}
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/11.jpg" alt="" />

                                               
                                            </div>

                                            {/* <!-- Post Content --> */}
                                            <div className="post-content p-3">
                                                <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                                <a href="single-post.html" className="post-title">Warner Bros. Developing
                                                    ‘The accountant’ Sequel</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i>
                                                        22</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 16</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                                        15</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="col-12 col-md-6">
                                        <div className="single-post-area mb-50 bg-white">
                                            {/* <!-- Post Thumbnail --> */}
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/12.jpg" alt="" />

                                                
                                            </div>

                                            {/* <!-- Post Content --> */}
                                            <div className="post-content p-3">
                                                <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                                <a href="single-post.html" className="post-title">Searching for the 'angel'
                                                    who on Westminste</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i>
                                                        28</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                                        22</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           

                        </div>
                    </div>
                </div>

                {/* <!-- Sidebar Widget --> */}
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="sidebar-area">

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget share-post-widget mb-50 bg-white">
                            <p>شارك المقال</p>
                            <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
                            <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
                            <a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
                            <a href="#" className="google"><i className="fa fa-youtube-play" aria-hidden="true"></i> Youtube</a>

                        </div>

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget p-0 author-widget bg-white">
                            <div className="p-4">
                                <img className="author-avatar" src="img/bg-img/30.jpg" alt="" />
                                <a href="#" className="author-name">Chris Hemsworth</a>
                                <div className="author-social-info">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>

                            
                        </div>
                                          {/* <!-- ***** ad Widget ***** --> */}
<div className="single-widget add-widget mb-50 bg-white shadow">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ##### Post Details Area End ##### --> */}


{/* <!-- ##### Footer Area Start ##### --> */}
    <Footer />
    {/* <!-- ##### Footer Area End ##### --> */}


    {/* js import section start */}

      <Script src="/js/jquery/jquery-2.2.4.min.js" />
      <Script src="/js/bootstrap/popper.min.js" />
      <Script src="/js/bootstrap/bootstrap.min.js" />
      <Script src="/js/plugins/plugins.js" />
      <Script src="/js/active.js" />

    {/* js import section end */}
    </body>
    </>
  )
}