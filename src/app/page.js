 


import Image from "next/image";
 
import { NEWSREVALIDATE,BASE_URL,headers} from "./api/config";
 

async function FeaturedPinnedPostedList({ promise }) {
  const data = await promise;
  
    
  return (
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
        {data.data.map((ob,i) => (
          <div
            key={ob.id}
            className={"tab-pane fade "+(i==0? "active show" :"")}
            id={"post-" + ob.id}
            role="tabpanel"
            aria-labelledby={"post-"+ob.id+"-tab"}
          >
            <div
              className="single-feature-post video-post bg-img"
              style={{
                backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url})`,
              }}
            >
              {/* <!-- Post Content --> */}
              <div className="post-content">
                <a href={ob.attributes.mainCategory.data.attributes.path+"/"} className="post-cata">
                  {ob.attributes.mainCategory.data.attributes.title}
                </a>

                <a href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                  {ob.attributes.title}
                </a>
                <p>{ob.attributes.shortContent} </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
     <div className="col-12 col-md-5 col-lg-4">
                <ul className="nav vizew-nav-tab" role="tablist">
    {data.data.map((ob,i) => (
     
                  <li key={ob.id} className="nav-item">
                  
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
        {/* <!-- ##### Header Area End ##### --> */}

        {/* <!-- ##### price section Start ##### --> */}
        <section className="hero--area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- Section Heading --> */}
                <div className="section-heading">
                  <h4>الاسعار</h4>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              {/* currency price */}
              <div className="col-12 col-md-6 col-lg-6">
                <div className="body-n">
                  <div className="container-n">
                    <div className="weather-side">
                      <div className="weather-gradient"></div>
                      <div className="date-container">
                        <h2 className="date-dayname">Tuesday</h2>
                        <span className="date-day">15 Jan 2019</span>
                        <i className="location-icon" data-feather="map-pin"></i>
                        <span className="location">Paris, FR</span>
                      </div>
                      <div className="weather-container">
                        <i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">29°C</h1>
                        <h3 className="weather-desc">Sunny</h3>
                      </div>
                    </div>
                    <div className="info-side">
                      <div className="today-info-container">
                        <div className="today-info">
                          <div className="precipitation">
                            {" "}
                            <span className="title">PRECIPITATION</span>
                            <span className="value">0 %</span>
                            <div className="clear"></div>
                          </div>
                          <div className="humidity">
                            {" "}
                            <span className="title">HUMIDITY</span>
                            <span className="value">34 %</span>
                            <div className="clear"></div>
                          </div>
                          <div className="wind">
                            {" "}
                            <span className="title">WIND</span>
                            <span className="value">0 km/h</span>
                            <div className="clear"></div>
                          </div>
                        </div>
                      </div>
                      <div className="week-container">
                        <ul className="week-list">
                          <li className="active">
                            <i className="day-icon" data-feather="sun"></i>
                            <span className="day-name">Tue</span>
                            <span className="day-temp">29°C</span>
                          </li>
                          <li>
                            <i className="day-icon" data-feather="cloud"></i>
                            <span className="day-name">Wed</span>
                            <span className="day-temp">21°C</span>
                          </li>
                          <li>
                            <i
                              className="day-icon"
                              data-feather="cloud-snow"
                            ></i>
                            <span className="day-name">Thu</span>
                            <span className="day-temp">08°C</span>
                          </li>
                          <li>
                            <i
                              className="day-icon"
                              data-feather="cloud-rain"
                            ></i>
                            <span className="day-name">Fry</span>
                            <span className="day-temp">19°C</span>
                          </li>
                          <div className="clear"></div>
                        </ul>
                      </div>
                      <div className="location-container">
                        <button className="location-button">
                          {" "}
                          <i data-feather="map-pin"></i>
                          <span>Change location</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="body-n">
                  <div className="container-n">
                    <div className="weather-side">
                      <div className="weather-gradient"></div>
                      <div className="date-container">
                        <h2 className="date-dayname">Tuesday</h2>
                        <span className="date-day">15 Jan 2019</span>
                        <i className="location-icon" data-feather="map-pin"></i>
                        <span className="location">Paris, FR</span>
                      </div>
                      <div className="weather-container">
                        <i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">29°C</h1>
                        <h3 className="weather-desc">Sunny</h3>
                      </div>
                    </div>
                    <div className="info-side">
                      <div className="today-info-container">
                        <div className="today-info">
                          <div className="precipitation">
                            {" "}
                            <span className="title">PRECIPITATION</span>
                            <span className="value">0 %</span>
                            <div className="clear"></div>
                          </div>
                          <div className="humidity">
                            {" "}
                            <span className="title">HUMIDITY</span>
                            <span className="value">34 %</span>
                            <div className="clear"></div>
                          </div>
                          <div className="wind">
                            {" "}
                            <span className="title">WIND</span>
                            <span className="value">0 km/h</span>
                            <div className="clear"></div>
                          </div>
                        </div>
                      </div>
                      <div className="week-container">
                        <ul className="week-list">
                          <li className="active">
                            <i className="day-icon" data-feather="sun"></i>
                            <span className="day-name">Tue</span>
                            <span className="day-temp">29°C</span>
                          </li>
                          <li>
                            <i className="day-icon" data-feather="cloud"></i>
                            <span className="day-name">Wed</span>
                            <span className="day-temp">21°C</span>
                          </li>
                          <li>
                            <i
                              className="day-icon"
                              data-feather="cloud-snow"
                            ></i>
                            <span className="day-name">Thu</span>
                            <span className="day-temp">08°C</span>
                          </li>
                          <li>
                            <i
                              className="day-icon"
                              data-feather="cloud-rain"
                            ></i>
                            <span className="day-name">Fry</span>
                            <span className="day-temp">19°C</span>
                          </li>
                          <div className="clear"></div>
                        </ul>
                      </div>
                      <div className="location-container">
                        <button className="location-button">
                          {" "}
                          <i data-feather="map-pin"></i>
                          <span>Change location</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* currency price end*/}

              {/* اسعار المود الغذائية */}

              <div className="col-12 col-md-7 col-lg-8">
                <div className="body-m">
                  <div className="CartContainer">
                    <div className="Header">
                      <h3 className="Heading">Shopping Cart</h3>
                    </div>

                    <div className="Cart-Items">
                      <div className="image-box">
                        <img
                          src="/img/bg-img/apple.png"
                          style={{ height: "100px" }}
                        />
                      </div>
                      <div className="about">
                        <h1 className="title">Apple Juice</h1>
                      </div>

                      <div className="prices">
                        <div className="amount">$2.99</div>
                      </div>
                    </div>
                    <hr />
                    <div className="Cart-Items pad">
                      <div className="image-box">
                        <img
                          src="/img/bg-img/grapes.png"
                          style={{ height: "100px" }}
                        />
                      </div>
                      <div className="about">
                        <h2 className="title">Grapes Juice</h2>
                      </div>

                      <div className="prices">
                        <div className="amount">$3.19</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5 col-lg-4"></div>
            </div>
            {/* اسعار المود الغذائية */}
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
                  
                    {[...localNewsData.data.slice(2, 4)].map((ob) => (  <div  key={ob.id} className="col-12 col-md-6 col-lg-6"> <div   className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200}   />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content"> 
                          
                          <a  href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                      </div> </div>))}
                     
                   

            
                  </div>

                  <div className="row">
                    {/* <!-- Single Blog Post --> */}
                    {[...localNewsData.data.slice(4, 7)].map((ob) => (   <div  key={ob.id} className="col-12 col-md-6 col-lg-4"> <div   className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200} />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug}  className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                      </div> </div>))}
                 
                  </div>

                  <div className="row">
                    <div className="col-12">
                      {/* <!-- Section Heading --> */}
                      <div className="section-heading">
                      <a href={arabicNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/"}> <h4>الاخبار العربية</h4></a>
                        <div className="line"></div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      {/* <!-- Section Heading --> */}

                      {/* <!-- Sports Video Slides --> */}
                      <div className="sport-video-slides owl-carousel mb-50 ">
                      {[...arabicNewsData.data.slice(0, 2)].map((ob) => ( <div  key={ob.id} className="single-post-area">
                          {/* <!-- Post Thumbnail --> */}
                          <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200}     />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                        </div>))}
                        {/* <!-- Single Blog Post --> */}
                       
                       
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      {/* <!-- Business Video Slides --> */}
                      <div className="  mb-50 ">
                      {[...arabicNewsData.data.slice(2, 3)].map((ob) => (  
                        <div  key={ob.id} className="single-post-area">
                          {/* <!-- Post Thumbnail --> */}
                          <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200}     />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                        </div>
))}
                       
                      </div>
                    </div>
                  </div>

                  <div className="row mb-30">
                  {[...arabicNewsData.data.slice(3, 7)].map((ob) => ( <div  key={ob.id} className="col-12 col-lg-6 ">
                      <div className="single-blog-post style-3 d-flex mb-50 ">
                      <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={337} height={200}     />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content">
                          
                          <a href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                      </div>
                    </div>))}
                 
                   
 
                  </div>

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
                          
                          <a  href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                        </div>
                    </div>  ))}
                  
                  </div>
                  {[...globalNewsData.data.slice(3, 7)].map((ob) => ( <div  key={ob.id} className="single-post-area mb-30 ">
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
                           
                        <a  href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex align-items-center mb-2">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          </div>
                          <p className="mb-2">
                           {ob.attributes.shortContent}
                          </p>
                           
                        </div>
                      </div>
                    </div>
                  </div> ))}
                
                </div>
              </div>

              <div className="col-12 col-md-5 col-lg-4">
                <div className="sidebar-area">
                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget followers-widget mb-50 ">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                      <span className="counter">198</span>
                      <span>Fan</span>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                      <span className="counter">220</span>
                      <span>Followers</span>
                    </a>
                    <a href="#" className="google">
                      <i className="fa fa-google" aria-hidden="true"></i>
                      <span className="counter">140</span>
                      <span>Subscribe</span>
                    </a>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget latest-video-widget mb-50 ">
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
                  <div className="single-widget add-widget mb-50">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>

                  {/* <!-- ***** Sidebar Widget ***** --> */}
                  <div className="single-widget youtube-channel-widget mb-50">
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
                  <div className="single-widget newsletter-widget mb-50">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      <h4>النشرة البريدية</h4>
                      <div className="line"></div>
                    </div>
                    <p>
                      Subscribe our newsletter gor get notification about new
                      updates, information discount, etc.
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
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget mb-50">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      
                      <a href={russianNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/"}> <h4>الحرب الروسية</h4></a>
                     
                      <div className="line"></div>
                    </div>
                    {[...russianNewsData.data.slice(0, 7)].map((ob) => (  <div  key={ob.id} className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} alt={ob.attributes.title} width={100} height={70}     />
                        </div>

                      <div className="post-content">
                      <a   href={ob.attributes.mainCategory.data.attributes.path+"/"+ob.attributes.slug} className="post-title">
                           {ob.attributes.title}
                          </a>
                        <div className="post-meta d-flex justify-content-between">
                        { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                        </div>
                      </div>
                    </div> ))}
                   
                   

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        
    </>
  );
}


export async function getBreakingNews() {
  const res = await fetch(
    `${BASE_URL}/api/short-news?populate=*&pagination[limit]=28&sort[0]=createdAt%3Adesc`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}

export async function getPinnedNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=10&filters[pin][$eq]=true&sort[0]=publishedAt%3Adesc`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}

export async function getArabicNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=arabic-news`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
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
