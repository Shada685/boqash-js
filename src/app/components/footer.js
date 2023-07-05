import "../../../public/style.css";
import React from 'react'

export default function Footer() {
  return (
    
    <>
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
                  
                  <p className="copywrite-text text-center">
                    
                     &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    كل الحقوق محفوضة | powered  
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
    </>
  )
}


