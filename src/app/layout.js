import './globals.css'
import { Inter } from 'next/font/google'
import Script from "next/script";
import { Suspense } from 'react';
import { NEWSREVALIDATE } from './api/config';
import { headers,BASE_URL } from './api/config';
import '../../public/style.css'
import { useMemo } from 'react';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })


 async function getBreakingNews() {
  const res = await fetch(
    `${BASE_URL}/api/short-news?populate=*&pagination[limit]=28&sort[0]=createdAt%3Adesc`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}
async function BreakingList({ promise }) {
  const res = await promise;
  let d =res?.data?.slice(0, 14)||[]
  let data = [...d];
  return (

    <ul>
      {data.map((ob) => (
        <li key={ob.id}>{ob.attributes.content}</li>
      ))}
    </ul>
  );
}



async function Header() {
  const breakingNews = await getBreakingNews();
  return(

    <header className="header-area">
          {/* <!-- Top Header Area --> */}
          <div className="top-header-area">
            <div className="container">
              <div className="row align-items-center" style={{backgroundColor:"lightgray",height:"70px", borderRadius:"20PX"}}>
                <div className="col-12 col-md-6">
                  {/* <!-- Breaking News Widget --> */}
                  <div className="breaking-news-area d-flex justify-content-center">
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
                      <Link href="https://www.facebook.com/BoqashEcon/">
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link href="http://twitter.com/BoqashO">
                        <i className="fa fa-twitter"></i>
                      </Link>
                     
                      <Link href="#">
                        <i className="fa fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-youtube-play"></i>
                      </Link>
                    </div>
                  
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          
         
          {/* <!-- Navbar Area --> */}
          <section className='section-padding-40'>
          <div className="vizew-main-menu" id="sticker">
            <div className="classy-nav-container breakpoint-off">
              <div className="container">
                {/* <!-- Menu --> */}
                <nav
                  className="classy-navbar justify-content-between"
                  id="vizewNav"
                >
                  {/* <!-- Nav brand --> */}
                  <Link href="/" className="nav-brand">
                    <img src="/img/core-img/logo2.png" alt="" />
                  </Link>

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
                    <div className="classynav" style={{backgroundColor:"#8F4872",  borderRadius:"20px" }} >
                      <ul>
                        <li className="active">
                          <Link href="/">الرئيسية</Link>
                        </li>
                        {/* <li>
                          <Link href="archive-list.html">الاخبار المحلية</Link>
                        </li> */}
                        
                        <li>
                          <Link href="">الاخبار</Link>
                          <ul className="dropdown">
                            <li>
                              <a href="/yemeni-news">- الاخبار المحلية</a>
                            </li>
                            <li>
                              <a href="/arabic-news">- الاخبار العربية</a>
                            </li>
                            <li>
                              <a href="/inernational-news">- الاخبار العالمية</a>
                            </li>
                            
                           
                           
                          </ul>
                        </li>
                        <li>
                          <Link href="">الاسعار</Link>
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
                          <a href="/articles">مقالات</a>
                        </li>
                        <li>
                          <a href="contact.html">مقتطفات</a>
                        </li>
                        <li>
                          <a href="/about-us">عن بقش</a>
                        </li>
                        <li>
                          <a href="/contact-us">للاعلان</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Nav End --> */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
          </section>
        </header>

        
  )
}

function Footer(){
  return(
<footer className="footer-area">
          <div className="container">
            <div className="row">
              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  {/* <!-- Logo --> */}
                  <Link href="/" className="foo-logo d-block mb-4">
                    <img src="img/core-img/logo.png" alt="" />
                  </Link>
                  <p style={{color:"white"}}> 
                   بقش هو مرصد اقتصادي إلكتروني يوفر للمستخدمين تحليلات اقتصادية ومالية دقيقة وموثوقة عن الأسواق والاقتصاديات المحلية والعالمية.
                  </p>
                  {/* <!-- Footer Newsletter Area --> */}
                  <div className="footer-social-area">
                    <Link href="https://www.facebook.com/BoqashEcon/" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    
                    <Link href="#" className="instagram">
                      <i className="fa fa-instagram"></i>
                    </Link>
                    <Link href="http://twitter.com/BoqashO" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link href="#" className="youtube">
                      <i className="fa fa-youtube-play"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  <h6 className="widget-title">اخبار ومقالات</h6>
                  <ul >
                    <li className=" ">
                      <a href="/yemeni-news">الاخبار المحلية</a>
                      </li>
                    <li className="">
                      <a href="/arabic-news">الاخبار العربية</a>
                      </li>
                    <li className="">
                      <a href="/inernational-news">الاخبار العالمية</a>
                      </li>
                    <li className=""><a href="/russian-news">الحرب الروسية</a></li>
                    <li className=""><a href="/articles">مقالات</a></li>
                    <li> <a href="">مقتطفات</a></li>
                    

                  </ul>
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  <h6 className="widget-title">عن بقش</h6>
<ul >
                    <li className="">
                      <a href="/about-us"> من نحن</a>
                      </li>
                    
                    <li className="">
                      <a href="/contact-us">للاعلان </a>
                      </li>
                    <li className=""><a href="/privacy-policy"> سياسة الخصوصية</a></li>
                    
                  
                    

                  </ul>
                  
                </div>
              </div>

              {/* <!-- Footer Widget Area --> */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget mb-70">
                  <h6 className="widget-title">الاسعار</h6>
                  {/* <!-- Contact Address --> */}
                  <ul >
                    <li className="">
                      <a href=""> اسعار العملات</a>
                      </li>
                    <li className="">
                      <a href="">اسعار المواد الغذائية</a>
                      </li>
                    <li className="">
                      <a href="">اسعار الذهب</a>
                      </li>
                    <li className=""><a href="">اسعار النفط</a></li>
                    
                    

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
                    {/* <script>
                      document.write(new Date().getFullYear());
                    </script>{" "} */}
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
  )
}

export const metadata = {
  title: 'موقع بقش',
  description: 'مرصد بقش الاقتصادي',
  

}


export default async function RootLayout({ children }) {
  // const breakingNews = await getBreakingNews();
  return (
    <html lang="ar">
   
      <body className={inter.className}>
        {/* <!-- ##### Header Area Start ##### --> */}
        {/* <!-- ##### Header Area Start ##### --> */}
        <Script src="/js/jquery/jquery-2.2.4.min.js" />
      <Script src="/js/bootstrap/popper.min.js" />
      <Script src="/js/bootstrap/bootstrap.min.js" />
      <Script src="/js/plugins/plugins.js" />
      <Script src="/js/active.js" />
          <Script src="/js/jquery/tabbed-table.js"/>
        <Header />
        {/* <!-- ##### Header Area End ##### --> */}
      {children}
      {/* <!-- ##### Footer Area Start ##### --> */}
        <Footer />
        {/* <!-- ##### Footer Area End ##### --> */}
    {/* <!-- ##### Footer Area End ##### --> */}






      </body>
    </html>
  )
}
