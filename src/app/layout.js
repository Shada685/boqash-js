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
      {children}
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
    </html>
  )
}
