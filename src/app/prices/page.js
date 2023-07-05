import Head from "next/head";
import Script from "next/script";
import Footer from "../components/footer";
import '../../../public/style.css'
import '../../../public/css/style-grocery-price.css'
import '../../../public/css/style-currency.css'

export default function Prices() {
  return (
    <>
<Head>
    <title>الاسعار</title>

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
                            <h4><i className="fa fa-money" aria-hidden="true"></i> اسعار العملات</h4>
                        </div>
                        {/* <!-- View Options --> */}
                        
                    </div>


<div class="table-responsive">
<table class="table table-hover text-nowrap">
  <thead className="p-2">
    <tr>
      <th scope="col" rowspan="2" className="p-3"></th>
      <th scope="col" colspan="2" className="text-center p-4">صنعاء</th>
      <th scope="col" colspan="2" className="text-center p-4">عدن</th>
      
      
    </tr>
  </thead>
  <tbody >
    <tr >
      <th className="p-4">التاريخ</th>
      <td className="p-4">دولار امريكي</td>
      <td className="p-4">ريال سعودي</td>
      <td className="p-4">دولار امريكي</td>
      <td className="p-4">ريال سعودي</td>
     
    </tr>
    <tr>
      <th scope="row" className="p-4">7/5/2023</th>
      <td className="p-4">
        <span class="text-danger" >
          <span>530</span>
        </span>
      </td>
      <td className="p-4">
        <span class="text-success">
          <span>140</span>
        </span>
      </td>
      <td className="p-4">
        <span class="text-success">
          <span>1100</span>
        </span>
      </td>
      <td className="p-4">
        <span class="text-success">
          <span>320</span>
        </span>
      </td>
      
    </tr>
    <tr>
      <th scope="row" className="p-4">8/5/2023</th>
      <td className="p-4">
        <span class="text-danger" >
          <span>530</span>
        </span>
      </td>
      <td className="p-4">
        <span class="text-success">
          <span>140</span>
        </span>
      </td>
      <td className="p-4">
        <span class="text-success">
          <span>1100</span>
        </span>
      </td>
      <td className="p-4">
        <span class="text-success">
          <span>320</span>
        </span>
      </td>
      
    </tr>
  </tbody>
</table>
</div>
                      


                        
                   

                    {/* <!-- Pagination --> */}
                    
                </div>

                

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="sidebar-area">

                        

                    

                        {/* <!-- ***** ad Widget ***** --> */}
                        <div className="single-widget add-widget mb-50">
                            <a href="#"><img src="img/bg-img/add.png" alt=""/></a>
                        </div>

                     

                       

                        

                    </div>
                </div>
            </div>


            {/* اسعار الذهب */}
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    {/* <!-- Archive Catagory & View Options --> */}
                    <div className="archive-catagory-view mb-50 d-flex align-items-center justify-content-between">
                        {/* <!-- Catagory --> */}
                        <div className="archive-catagory">
                            <h4> اسعار الذهب</h4>
                        </div>
                        {/* <!-- View Options --> */}
                        
                    </div>


<div class="table-responsive">
<table class="table table-hover text-nowrap">
  <thead className="p-2">
    <tr>
      <th  rowspan="2" className="p-4"></th>
      <th scope="col" colspan="3" className="text-center p-4">صنعاء</th>
      <th scope="col" colspan="3" className="text-center p-4">عدن</th>
      
      
    </tr>
  </thead>
  <tbody >
    <tr >
      <th className="p-3">التاريخ</th>
      <td className="p-3">عيار 18</td>
      <td className="p-3">عيار 21 </td>
      <td className="p-3">عيار 24</td>
      <td className="p-3">عيار 18</td>
     <td className="p-3">عيار 21</td>
      <td className="p-3">عيار 24</td>
    </tr>
    <tr>
      <th scope="row" className="p-3">7/5/2023</th>
      <td className="p-3">
        <span class="text-danger" >
          <span>530</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>140</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>1100</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>320</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>1100</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>320</span>
        </span>
      </td>
      
    </tr>
    <tr>
      <th scope="row" className="p-3">8/5/2023</th>
      <td className="p-3">
        <span class="text-danger" >
          <span>530</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>140</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>1100</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>320</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>1100</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text-success">
          <span>320</span>
        </span>
      </td>
    </tr>
  </tbody>
</table>
</div>
                      


                        
                   

                    {/* <!-- Pagination --> */}
                    
                </div>

                

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="sidebar-area">

                        

                    

                        

                     

                       

                        

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

