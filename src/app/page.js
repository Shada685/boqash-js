
import '../../public/css/style-grocery-price.css'
// import '../../public/css/style-currency.css'
import '../../public/css/style-price.css'
import Image from "next/image";
import Link from 'next/link'

 
import { NEWSREVALIDATE,BASE_URL,headers} from "./api/config";
 

async function FeaturedPinnedPostedList({ promise }) {
  const data = await promise;
  
    
  return (
    <>
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
        {data.data&&data.data.map((ob,i) => (
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
                backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.large.url})`,
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
    {data.data&&data.data.map((ob,i) => (
     
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
                        <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.large.url}`} width={400}  height={200} alt={ob.attributes.title} />
                        
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

    {/* herzontal ad */}
<div className="container mt-2 mb-5">
  <a>
    <img src="img/bg-img/h-ad.png" alt=""/>
  </a>

</div>
{/* herzontal ad */}
</>
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
    russianNewsData,articaleData] = await Promise.all([breakingNews, pinnedNews,arabicNews,
      localNews,
      globalNews,
      russianNews,articale])

 const pSaudiSanaa =  await getSaudiSanaa()
 const pSaudiAden =   await getSaudiAden()
 const pDollarAden =  await getDollarAden()
 const pDollarSanaa = await getDollarSanaa()
 const pDieslSanaa =  await getDieslSanaa()
 const pDieslAden =   await getDieslAden()
 const pPatrolSanaa = await getPatrolSanaa()
 const pPatrolAden =  await getPatrolAden()
 const pGasSanaa =    await getGasSanaa()
 const pGasAden =     await getGasAden()
 const pCoinSanaa =   await getCoinSanaa()
 const pCoinAden =    await getCoinAden()
 const p24KSanaa =    await get24KSanaa()
 const p24KAden =     await get24KAden()

   
  return (
    <>
      

      
        {/* <!-- ##### Header Area End ##### --> */}

        {/* <!-- ##### Hero Area Start ##### --> */}
         <FeaturedPinnedPostedList promise={pinnedNewsData} />
        {/* <!-- ##### Hero Area End ##### --> */}
        {/* <!-- ##### Header Area End ##### --> */}

        <section className="vizew-post-area mb-50 ">
          <div className="container">
             <div className="row">
            <div className="col-12 col-md-8 col-lg-8 ">
              <div className="section-heading style-2">
                    <h4>الاسعار</h4>
                    <div className="line"></div>
                  </div>
              

{/* ///////////////////////// */}
<div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                      <div className="single-post-area mb-80 ">
{/* //////////////////////// */}
<div className="body-z">
    <div className="card">
        <div className="content">
        <div className="row">
            <div className="col-12 ">
                <p className='text-center bold-m'>صنعاء</p>                
            </div>
            </div>
            <div className="text-center">
                <p className='bold-m'>العملات</p>
                
            </div>
         
              <div className="row">
                <div className="col-6 text-center mb-2">ريال سعودي</div>
                <div className="col-6 text-center">دولار</div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > بيع </div>
                    <div className="col-6">شراء</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > بيع </div>
                    <div className="col-6">شراء</div>
                  </div>
                  
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > {pSaudiSanaa.data&&pSaudiSanaa.data[0].attributes.sell} </div>
                    <div className="col-6">{pSaudiSanaa.data&&pSaudiSanaa.data[0].attributes.buy} </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                  <div className="col-6" > {pDollarSanaa.data&&pDollarSanaa.data[0].attributes.sell} </div>
                    <div className="col-6">{pDollarSanaa.data&&pDollarSanaa.data[0].attributes.buy} </div>
                  </div>
                  
                </div>
              
              
            </div>
            <div className="m-2">
                <p className='bold-m'>الذهب</p>
                
            </div>
              <div className="row">
                <div className="col-6 text-center mb-2">عيار 21</div>
                <div className="col-6 text-center">جنية ذهب</div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > بيع </div>
                    <div className="col-6">شراء</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > بيع </div>
                    <div className="col-6">شراء</div>
                  </div>
                  
                </div>
                <div className="col-6">
                  <div className="row">
                  <div className="col-6" > {p24KSanaa.data&&p24KSanaa.data[0].attributes.sell} </div>
                    <div className="col-6">{p24KSanaa.data&&p24KSanaa.data[0].attributes.buy} </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                  <div className="col-6" > {pCoinSanaa.data&&pCoinSanaa.data[0].attributes.sell} </div>
                    <div className="col-6">{pCoinSanaa.data&&pCoinSanaa.data[0].attributes.buy} </div>
                  </div>
                  
                </div>
              
            </div>
           
            <div className="m-2">
                <p className="bold-m">مشتقات نفطية</p>
                
            </div>
           
              <div className="row">
                <div className="col-4 text-center">بترول</div>
                <div className="col-4 text-center">ديزل</div>
                <div className="col-4 text-center">غاز</div>
                <div className="col-4 text-center">{pPatrolSanaa.data&&pPatrolSanaa.data[0].attributes.buy}</div>
                <div className="col-4 text-center">{pDieslSanaa.data&&pDieslSanaa.data[0].attributes.buy}</div>
                <div className="col-4 text-center">{pGasSanaa.data&&pGasSanaa.data[0].attributes.buy}</div>
                 
                
              </div>
              
           
        </div>
    </div>
</div>
{/* ///////////////////////// */}
                      </div>
              </div>
             <div className="col-12 col-md-6 col-lg-6">
                      <div className="single-post-area mb-80 ">
{/* //////////////////// */}

<div className="body-z">
    <div className="cardAden">
        <div className="content">
        <div className="row">
            <div className="col-12 ">
                <p className='text-center bold-m'>عدن</p>                
            </div>
            </div>
            <div className="text-center">
                <p className='bold-m'>العملات</p>
                
            </div>
         
              <div className="row">
                <div className="col-6 text-center mb-2">ريال سعودي</div>
                <div className="col-6 text-center">دولار</div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > بيع </div>
                    <div className="col-6">شراء</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > بيع </div>
                    <div className="col-6">شراء</div>
                  </div>
                  
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > {pSaudiAden.data&&pSaudiAden.data[0].attributes.sell} </div>
                    <div className="col-6">{pSaudiAden.data&&pSaudiAden.data[0].attributes.buy} </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                  <div className="col-6" > {pDollarAden.data&&pDollarAden.data[0].attributes.sell} </div>
                    <div className="col-6">{pDollarAden.data&&pDollarAden.data[0].attributes.buy} </div>
                  </div>
                  
                </div>
              
              
            </div>
            <div className="m-2">
                <p className='bold-m'>الذهب</p>
                
            </div>
              <div className="row">
                <div className="col-6 text-center mb-2">عيار 21</div>
                <div className="col-6 text-center">جنية ذهب</div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > بيع </div>
                    <div className="col-6">شراء</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6" > بيع </div>
                    <div className="col-6">شراء</div>
                  </div>
                  
                </div>
                <div className="col-6">
                  <div className="row">
                  <div className="col-6" > {p24KAden.data&&p24KAden.data[0].attributes.sell} </div>
                    <div className="col-6">{p24KAden.data&&p24KAden.data[0].attributes.buy} </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                  <div className="col-6" > {pCoinAden.data&&pCoinAden.data[0].attributes.sell} </div>
                    <div className="col-6">{pCoinAden.data&&pCoinAden.data[0].attributes.buy} </div>
                  </div>
                  
                </div>
              
            </div>
           
            <div className="m-2">
                <p className="bold-m">مشتقات نفطية</p>
                
            </div>
           
              <div className="row">
                <div className="col-4 text-center">بترول</div>
                <div className="col-4 text-center">ديزل</div>
                <div className="col-4 text-center">غاز</div>
                <div className="col-4 text-center">{pPatrolAden.data&&pPatrolAden.data[0].attributes.buy}</div>
                <div className="col-4 text-center">{pDieslAden.data&&pDieslAden.data[0].attributes.buy}</div>
                <div className="col-4 text-center">{pGasAden.data&&pGasAden.data[0].attributes.buy}</div>
                 
                
              </div>
           
        </div>
    </div>
</div>
{/* /////////////////////// */}
                      </div>
             </div>
              </div>

{/* /////////////////////// */}

             
              

            </div>
            <div className="col-12 col-md-5 col-lg-4">
                <div className="sidebar-area">
                  
                  {/* //////////////////// */}

<div className="bodyss mb-50">
<div className="CartContainer">
		<div className="Header">
			<h3 className="Heading">اسعار المواد الغذائية</h3>
		</div>

		<div className="Cart-Items">
			<div className="image-box">
				<img src="img/bg-img/apple.png" style={{ height:"100px" }} />
			</div>
			<div className="about">
				<h1 className="title">عصير</h1>

			</div>

			<div className="prices">
				<div className="amount">400</div>

			</div>
		</div>
		<hr />
		<div className="Cart-Items pad">
			<div className="image-box">
				<img src="img/bg-img/grapes.png" style={{ height:"100px" }} />
			</div>
			<div className="about">
				<h2 className="title">ببسي</h2>
				

			</div>

			<div className="prices">
				<div className="amount">300</div>

			</div>
		</div>
		<hr />

	</div>
</div>
{/* ///////////////////// */}


{/* /////////////////// */}
{/* <!-- ***** ad Widget ***** --> */}
                  <div className="single-widget add-widget mb-50 bg-white shadow ">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>
{/* //////////////////// */}


                </div>
                </div>
            </div>
            
            </div>
          
        </section>

        {/* <!-- ##### Vizew Post Area Start ##### --> */}
        <section className="vizew-post-area mb-50 ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-8 ">
                <div className="all-posts-area">
                  {/* <!-- Section Heading --> */}
                  <div className="section-heading style-2">
                  <a href={localNewsData.data?localNewsData.data[0].attributes.mainCategory.data.attributes.path+"/":"#"}> <h4>الاخبار المحلية</h4></a>
                    <div className="line"></div>
                  </div>

                  {/* <!-- Featured Post Slides --> */}
                  <div className="featured-post-slides owl-carousel mb-30 ">
                    {/* <!-- Single Feature Post --> */}
                    {localNewsData.data&&[...localNewsData.data.slice(0, 2)].map((ob) => (
                      <div key={ob.id}
                      className="single-feature-post video-post bg-img"
                      style={{ backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.medium.url})` }}
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
                  
                    {localNewsData.data&&[...localNewsData.data.slice(2, 4)].map((ob) => (  <div  key={ob.id} className="col-12 col-md-6 col-lg-6 "> <div   className="single-post-area mb-80 bg-white shadow">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.large.url}`} alt={ob.attributes.title} width={400} height={200}   />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content p-3"> 
                          
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
                    {localNewsData.data&&[...localNewsData.data.slice(4, 7)].map((ob) => (   <div  key={ob.id} className="col-12 col-md-6 col-lg-4"> <div   className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.large.url}`} alt={ob.attributes.title} width={400} height={200} />
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
                      <a href={localNewsData.data?arabicNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/":"#"}> <h4>الاخبار العربية</h4></a>
                        <div className="line"></div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      {/* <!-- Section Heading --> */}

                      {/* <!-- Sports Video Slides --> */}
                      <div className="sport-video-slides owl-carousel mb-50 ">
                      {arabicNewsData.data&&[...arabicNewsData.data.slice(0, 2)].map((ob) => ( <div  key={ob.id} className="single-post-area bg-white shadow">
                          {/* <!-- Post Thumbnail --> */}
                          <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.medium.url}`} alt={ob.attributes.title} width={400} height={200}     />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content p-3">
                          
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
                      {arabicNewsData.data&&[...arabicNewsData.data.slice(2, 3)].map((ob) => (  
                        <div  key={ob.id} className="single-post-area bg-white shadow">
                          {/* <!-- Post Thumbnail --> */}
                          <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.medium.url}`} alt={ob.attributes.title} width={400} height={200}     />
                        </div>

                        {/* <!-- Post Content --> */}
                        <div className="post-content p-3">
                          
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
                  {arabicNewsData.data&&[...arabicNewsData.data.slice(3, 7)].map((ob) => ( <div  key={ob.id} className="col-12 col-lg-6 ">
                      <div className="single-blog-post style-3 d-flex mb-50 bg-white shadow">
                      <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.medium.url}`} alt={ob.attributes.title} width={400} height={200}     />
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
                 
                   {/* herzontal ad */}
<div className="container mt-2 mb-5">
  <a>
    <img src="img/bg-img/h-ad.png" alt=""/>
  </a>

</div>
{/* herzontal ad */}
 
                  </div>

                  {/* <!-- Section Heading --> */}
                  <div className="section-heading style-2">
                   
                    <a href={globalNewsData.data?globalNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/":"#"}> <h4>الاخبار العالمية</h4></a>
                    <div className="line"></div>
                  </div>
                 
                  {/* <!-- Featured Post Slides --> */}
                  <div className="featured-post-slides owl-carousel mb-30 ">
                  {globalNewsData.data&&[...globalNewsData.data.slice(0, 3)].map((ob) => ( <div
                     key={ob.id}  className="single-feature-post video-post bg-img"
                     style={{ backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.medium.url})` }}
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
                  {globalNewsData.data&&[...globalNewsData.data.slice(3, 7)].map((ob) => ( <div  key={ob.id} className="single-post-area mb-30 bg-white shadow">
                    <div className="row align-items-center ">
                      <div className="col-12 col-lg-6 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.medium.url}`} alt={ob.attributes.title} width={400} height={200}     />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 ">
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

{/* /////////////////// */}
{/* <!-- ***** ad Widget ***** --> */}
                  <div className="single-widget add-widget mb-50 bg-white shadow">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>
{/* //////////////////// */}

                  {/* <!-- ***** follower Widget ***** --> */}
                  <div className="single-widget followers-widget mb-50 bg-white shadow">
                    <a href="https://www.facebook.com/BoqashEcon/" className="facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                      <span className="counter text-center">198</span>
                      <span>اعجاب</span>
                    </a>
                    <a href="http://twitter.com/BoqashO" className="twitter">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                      <span className="counter">220</span>
                      <span>متابع</span>
                    </a>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                      <span className="counter text-center">140</span>
                      <span>متابع</span>
                    </a>
                    <a href="#" className="google">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                      <span className="counter text-center">140</span>
                      <span>مشترك</span>
                    </a>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget latest-video-widget mb-50 bg-white shadow">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      <h4>مقتطفات</h4>
                      
                      <div className="line"></div>
                    </div>
                    {breakingNewsData.data&&[...breakingNewsData.data.slice(14, 28)].map((ob) => (<div key={ob.id} className="single-blog-post d-flex">
                       
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

                  {/* <!-- ***** ad Widget ***** --> */}
                  <div className="single-widget add-widget mb-50 bg-white shadow">
                    <a href="#">
                      <img src="img/bg-img/add.png" alt="" />
                    </a>
                  </div>

                
                  <div className="single-widget youtube-channel-widget mb-50 bg-white shadow">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                   
                      <a href="articles/"> <h4>مقالات</h4></a>
                      
                      <div className="line"></div>
                    </div>
                    {articaleData.data&&[...articaleData.data.slice(0, 7)].map((ob) => ( 
                      <div key={ob.id} className="single-youtube-channel d-flex align-items-center">
                      <div className="youtube-channel-thumbnail">
                      <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.medium.url}`} alt={ob.attributes.title} width={110} height={80}     />
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

                  {/* <!-- ***** newslettter Widget ***** --> */}
                  <div className="single-widget newsletter-widget mb-50 bg-white">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      <h4>النشرة البريدية</h4>
                      <div className="line"></div>
                    </div>
                    <p>
                      اشترك معنا واحصل على المزيد من الاخبار اولا باول
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
                        <Link
            className="flex items-center hover:underline bg-[#9b239b] hover:bg-[#e62ce6] text-white py-2 px-4 rounded  w-full mx-auto"
            href="/"
          >
اشترك          </Link>
                      </form>
                    </div>
                  </div>

                  {/* <!-- ***** Single Widget ***** --> */}
                  <div className="single-widget mb-50 bg-white shadow">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      
                      <a href={russianNewsData.data?russianNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/":"#"}> <h4>الحرب الروسية</h4></a>
                     
                      <div className="line"></div>
                    </div>
                    {russianNewsData.data&&[...russianNewsData.data.slice(0, 7)].map((ob) => (  <div  key={ob.id} className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.medium.url}`} alt={ob.attributes.title} width={100} height={70}     />
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
    `${BASE_URL}/api/news?populate=*&pagination[limit]=10&filters[pin][$eq]=true&filters[mainCategory][path][$ne]=articles&sort[0]=publishedAt%3Adesc`,
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
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=articles`,
    { headers, next: { revalidate: NEWSREVALIDATE } }

   
  );
  return res.json();
}

  export async function getSaudiSanaa() {
    const res = await fetch(
      `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=ريال%20سعودي`,
      { headers, next: { revalidate: NEWSREVALIDATE } }
    );
  return res.json();
};
  export async function getSaudiAden() {
    const res = await fetch(
      `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=ريال%20سعودي`,
      { headers, next: { revalidate: NEWSREVALIDATE } }
    );
  return res.json();
};
  export async function getDollarAden() {
    const res = await fetch(
      `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=دولار%20امريكي`,
      { headers, next: { revalidate: NEWSREVALIDATE } }
    );
  return res.json();
};
  export async function getDollarSanaa() {
    const res = await fetch(
      `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=دولار%20امريكي`,
      { headers, next: { revalidate: NEWSREVALIDATE } }
    );
  return res.json();
};
export async function getDieslSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=ديزل`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
export async function getDieslAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=ديزل`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};

export async function getPatrolSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=بترول`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
export async function getPatrolAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=بترول`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
export async function getGasSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=غاز`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
export async function getGasAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=غاز`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
export async function getCoinSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=جنية`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
export async function getCoinAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=جنية`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
export async function get24KSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=عيار%2024`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
export async function get24KAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=عيار%2024`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};