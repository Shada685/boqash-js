import './globals.css'
import { Inter } from 'next/font/google'
import Script from "next/script";
import { Suspense } from 'react';
import { NEWSREVALIDATE } from './api/config';
import { headers,BASE_URL } from './api/config';
import '../../public/style.css'
import '../../public/css/style-grocery-price.css'
import '../../public/css/style-currency.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'موقع بقش',
  description: 'مرصد بقش الاقتصادي',
  

}

export async function getBreakingNews() {
  const res = await fetch(
    `${BASE_URL}/api/short-news?populate=*&pagination[limit]=28&sort[0]=createdAt%3Adesc`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}
async function BreakingList({ promise }) {
  const res = await promise;
  let data = [...res.data.slice(0, 14)];
  return (

    <ul>
      {data.map((ob) => (
        <li key={ob.id}>{ob.attributes.content}</li>
      ))}
    </ul>
  );
}
export default async function RootLayout({ children }) {
  const breakingNews = await getBreakingNews();
  return (
    <html lang="ar">
   
      <body className={inter.className}>
        {/* <!-- ##### Header Area Start ##### --> */}
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
                      <Suspense fallback={<div>......</div>}>
                        <BreakingList promise={breakingNews} />
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
      {children}
      {/* <!-- ##### Footer Area Start ##### --> */}
        <footer className="footer-area">
          <div className="container">
            <div className="row">
              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  {/* <!-- Logo --> */}
                  <a href="/" className="foo-logo d-block mb-4">
                    <img src="img/core-img/logo2.png" alt="" />
                  </a>
                  <p>
                   بقش هو مرصد اقتصادي إلكتروني يوفر للمستخدمين تحليلات اقتصادية ومالية دقيقة وموثوقة عن الأسواق والاقتصاديات المحلية والعالمية.
                  </p>
                  {/* <!-- Footer Newsletter Area --> */}
                  <div className="footer-social-area">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                    
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="youtube">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  <h6 className="widget-title">اخبار ومقالات</h6>
                  <ul >
                    <li className="mb-2">
                      <a href="">الاخبار المحلية</a>
                      </li>
                    <li className="mb-2">
                      <a href="">الاخبار العربية</a>
                      </li>
                    <li className="mb-2">
                      <a href="">الاخبار العالمية</a>
                      </li>
                    <li className="mb-2"><a href="">الحرب الروسية</a></li>
                    <li className="mb-2"><a href="">مقالات</a></li>
                    <li> <a href="">مقتطفات</a></li>
                    

                  </ul>
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  <h6 className="widget-title">عن بقش</h6>
<ul >
                    <li className="mb-2">
                      <a href=""> من نحن</a>
                      </li>
                    <li className="mb-2">
                      <a href=""> تواصل معنا</a>
                      </li>
                    <li className="mb-2">
                      <a href="">للاعلان </a>
                      </li>
                    <li className="mb-2"><a href=""> سياسة الخصوصية</a></li>
                    
                  
                    

                  </ul>
                  
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  <h6 className="widget-title">الاسعار</h6>
                  {/* <!-- Contact Address --> */}
                  <ul >
                    <li className="mb-2">
                      <a href=""> اسعار العملات</a>
                      </li>
                    <li className="mb-2">
                      <a href="">اسعار المواد الغذائية</a>
                      </li>
                    <li className="mb-2">
                      <a href="">اسعار الذهب</a>
                      </li>
                    <li className="mb-2"><a href="">اسعار النفط</a></li>
                    
                    

                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Copywrite Area --> */}
          <div className="copywrite-area">
            <div className="container ">
              <div className="row align-items-center">
                {/* <!-- Copywrite Text --> */}
                <div className="col-12 col-sm-12">
                  
                  <p className="copywrite-text text-center ">
                    
                     &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    كل الحقوق محفوظة | powered  
                     by{" "}
                    <a href="https://dracowareye.com" target="_blank">
                      DracoWare
                    </a>
                    
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- ##### Footer Area End ##### --> */}
    {/* <!-- ##### Footer Area End ##### --> */}



<Script src="/js/jquery/jquery-2.2.4.min.js" />
      <Script src="/js/bootstrap/popper.min.js" />
      <Script src="/js/bootstrap/bootstrap.min.js" />
      <Script src="/js/plugins/plugins.js" />
      <Script src="/js/active.js" />


      </body>
    </html>
  )
}
