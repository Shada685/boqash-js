import '../../public/css/style-grocery-price.css'
// import '../../public/css/style-currency.css'
import '../../public/css/style-price.css'
import Image from "next/image";
import Link from 'next/link'
import { NEWSREVALIDATE,BASE_URL,headers} from "./api/config";





async function FeaturedPinnedPostedList({ promise ,ad}) {
  const data = await promise;
  
    
  return (
    <>
   
    <section className="hero--area section-padding-80" >
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <!-- Section Heading --> */}
          <div className="section-heading " style={{fontFamily: 'Inter-Black', fontSize: 30 }}>
            <h4 style={{fontStyle:"bold"}}>ابرز الاخبار </h4>
            <div className="line"></div>
          </div> 
        </div>
      </div>
      <div className="row ">
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
                backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.url})`,
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

                <li key={ob.id}  className="nav-item">
                 
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
                      <div className="single-blog-post style-2 d-flex align-items-center ">
                        <div className="post-thumbnail">
                        <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.url}`} width={400}  height={200} alt={ob.attributes.title} />

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
                        <div className="post-meta d-flex">
                        <hr width="100px" color='White'/>
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
  <Image  src={BASE_URL+ad.data.attributes.url} width={ad.data.attributes.width} height={ad.data.attributes.height} alt={ad.data.attributes.alt} />
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
 
  
 
 const ads=await getADS()


 

   
  return (
    
 <>
      

      
        {/* <!-- ##### Header Area End ##### --> */}

        {/* <!-- ##### Hero Area Start ##### --> */}
         <FeaturedPinnedPostedList promise={pinnedNewsData } ad={ads.data.attributes.first} />
        {/* <!-- ##### Hero Area End ##### --> */}
        {/* <!-- ##### Header Area End ##### --> */}
        
        <section className="vizew-post-area mb-50 ">
          <div className="container">
            
             <div className="row">
             <div className="col-12 col-md-12 col-lg-12 ">
             <div className="section-heading " style={{fontFamily: 'Inter-Black', fontSize: 30 }}>
            <h4 style={{fontStyle:"bold"}}>الاسعار </h4>
            <div className="line"></div>
          </div> 
                  </div>
                  </div>
                  <div className="row">
                  
          <div className='col-12 col-md-4 col-lg-4'>
                        <div className="row">
             <div className="col-12 col-md-12 col-lg-12 ">
            
                    <h4>اسعار الصرف صنعاء</h4>
                    <div className="line"></div>
                 
                  </div>
                  </div>
      
             
                     
  <div class="table-responsive" style={{backgroundColor: "" ,border: '0.5px solid black',borderRadius:"10px 10px 10px 10px"}} >
  <table class="table table-bordered mb-0"  style={{backgroundColor: "",border: '1px solid black',borderRadius:"10px 10px 10px 10px"}} >
  
  <thead class="" style={{backgroundColor: "#8F4872"}}>
    <tr class="table-active">
    <th scope="col"> </th>
      <th scope="col" style={{color:"white"}}> نوع العمله</th>
      <th scope="col" style={{color:"white"}}>بيع </th>
      <th scope="col" style={{color:"white"}}>شراء</th>
      
    </tr>
  </thead>
  <tbody >
   
    <tr>
    <th scope="row" className="p-3"> </th>
      <th scope="row" className="p-3">دولار امريكي </th>
      <td className="p-3">
        <span class="text" style={{color:"black"}} >
          <span>{pDollarSanaa.data&&pDollarSanaa.data[0].attributes.sell}</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text" style={{color:"black"}}>
          <span>{pDollarSanaa.data&&pDollarSanaa.data[0].attributes.buy}</span>
        </span>
      </td>
      
    </tr>
    
    <tr>
    <th scope="row" className="p-3"> </th>
      <th scope="row" className="p-3">ريال سعودي</th>
      <td className="p-3">
        <span class="text" style={{color:"black"}} >
          <span>{pSaudiSanaa.data&&pSaudiSanaa.data[0].attributes.sell}</span>
        </span>
      </td>
      <td className="p-3">
        <span class="text" style={{color:"black"}}>
          <span>{pSaudiSanaa.data&&pSaudiSanaa.data[0].attributes.buy}</span>
        </span>
      </td>
    </tr>
   
  </tbody>
</table>
</div>
</div>
<div className='col-12 col-md-4 col-lg-4'>
                          

                    <div className="row">
             <div className="col-12 col-md-12 col-lg-12 ">
             
                    <h4>اسعار الصرف عدن</h4>
                    <div className="line"></div>
                  
                  </div>
                  </div>
      
                          
                        
                          <div class="table-responsive" style={{backgroundColor: "" ,border: '0.5px solid black',borderRadius:"10px 10px 10px 10px"}} >
                          <table class="table table-bordered mb-0"  style={{backgroundColor: "",border: '1px solid black',borderRadius:"10px 10px 10px 10px"}} >
                          
                          <thead class="" style={{backgroundColor: "#8F4872"}}>
                            <tr class="table-active">
                            <th scope="col"> </th>
                              <th scope="col" style={{color:"white"}}> نوع العمله</th>
                              <th scope="col" style={{color:"white"}}>بيع </th>
                              <th scope="col" style={{color:"white"}}>شراء</th>
                              
                            </tr>
                          </thead>
                          <tbody >
                           
                            <tr>
                            <th scope="row" className="p-3"> </th>
                              <th scope="row" className="p-3">دولار امريكي </th>
                              <td className="p-3">
                                <span class="text" style={{color:"black"} }>
                                  <span>{pDollarAden.data&&pDollarAden.data[0].attributes.sell}</span>
                                </span>
                              </td>
                              <td className="p-3">
                                <span class="text" style={{color:"black"}}>
                                  <span>{pDollarAden.data&&pDollarAden.data[0].attributes.buy}</span>
                                </span>
                              </td>
                              
                            </tr>
                            
                            <tr>
                            <th scope="row" className="p-3"> </th>
                              <th scope="row" className="p-3">ريال سعودي</th>
                              <td className="p-3">
                                <span class="text" style={{color:"black"}}>
                                  <span>{pSaudiAden.data&&pSaudiAden.data[0].attributes.sell}</span>
                                </span>
                              </td>
                              <td className="p-3">
                                <span class="text" style={{color:"black"}}>
                                  <span>{pSaudiAden.data&&pSaudiAden.data[0].attributes.buy}</span>
                                </span>
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                        </div>
                        </div>  





                        <div className='col-12 col-md-4 col-lg-4'>
                          
                        <div className="row">
             <div className="col-12 col-md-12 col-lg-12 ">
      
                    <h4>اسعار المواد الغذائية</h4>
                    <div className="line"></div>
                 
                  </div>
                  </div>
                         
      
                          
                        
                          <div class="table-responsive" style={{backgroundColor: "" ,border: '0.5px solid black',borderRadius:"10px 10px 10px 10px"}} >
                          <table class="table table-bordered mb-0"  style={{backgroundColor: "",border: '1px solid black',borderRadius:"10px 10px 10px 10px"}} >
                          
                          <thead class="" style={{backgroundColor: "#8F4872"}}>
                            <tr class="table-active">
                            <th scope="col"> </th>
                              <th scope="col" style={{color:"white"}}> نوع العمله</th>
                              <th scope="col" style={{color:"white"}}>بيع </th>
                              <th scope="col" style={{color:"white"}}>شراء</th>
                              
                            </tr>
                          </thead>
                          <tbody >
                           
                            <tr>
                            <th scope="row" className="p-3"> </th>
                              <th scope="row" className="p-3">دولار امريكي </th>
                              <td className="p-3">
                                <span class="text" style={{color:"black"} }>
                                  <span>{pDollarAden.data&&pDollarAden.data[0].attributes.sell}</span>
                                </span>
                              </td>
                              <td className="p-3">
                                <span class="text" style={{color:"black"}}>
                                  <span>{pDollarAden.data&&pDollarAden.data[0].attributes.buy}</span>
                                </span>
                              </td>
                              
                            </tr>
                            
                            <tr>
                            <th scope="row" className="p-3"> </th>
                              <th scope="row" className="p-3">ريال سعودي</th>
                              <td className="p-3">
                                <span class="text" style={{color:"black"}}>
                                  <span>{pSaudiAden.data&&pSaudiAden.data[0].attributes.sell}</span>
                                </span>
                              </td>
                              <td className="p-3">
                                <span class="text" style={{color:"black"}}>
                                  <span>{pSaudiAden.data&&pSaudiAden.data[0].attributes.buy}</span>
                                </span>
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                        </div>
                        </div>       
              
              </div>
            </div>  
          </section>




          <section className="vizew-post-area mb-50 ">
          <div className="container">
            
             <div className="row">
             <div className="col-12 col-md-12 col-lg-12 ">
             
                  </div>
                  </div>
                  <div className="row">
                  
          <div className='col-12 col-md-4 col-lg-4'>
                        <div className="row">
             <div className="col-12 col-md-12 col-lg-12 ">
             
                    <h4>اسعار الذهب</h4>
                    <div className="line"></div>
               
                  </div>
                  </div>     
                  <div className="single-widget add-widget mb-50  shadow " style={{backgroundColor:"#8F4872"}}>
                    <a href="#">
                      <Image  src={BASE_URL+ads.data.attributes.second.data.attributes.url} width={ads.data.attributes.second.data.attributes.width} height={ads.data.attributes.second.data.attributes.height} alt={ads.data.attributes.second.data.attributes.alt} />
                    </a>  
                </div>
           </div>
           <div className='col-12 col-md-4 col-lg-4'>
                        <div className="row">
             <div className="col-12 col-md-12 col-lg-12 ">
            
                    <h4>اسعار النفط</h4>
                    <div className="line"></div>
                 
                  </div>
                  </div>     
                  <div className="single-widget add-widget mb-50  shadow "  style={{backgroundColor:"#8F4872"}}>
                    <a href="#">
                      <Image  src={BASE_URL+ads.data.attributes.second.data.attributes.url} width={ads.data.attributes.second.data.attributes.width} height={ads.data.attributes.second.data.attributes.height} alt={ads.data.attributes.second.data.attributes.alt} />
                    </a>  
                </div>
           </div>
           <div className='col-12 col-md-4 col-lg-4'>
                        <div className="row">
             <div className="col-12 col-md-12 col-lg-12 ">
             
                    <h4>اسعار مواد البناء</h4>
                    <div className="line"></div>
                
                  </div>
                  </div>     
                  <div className="single-widget add-widget mb-50  shadow "  style={{backgroundColor:"#8F4872"}}>
                    <a href="#">
                      <Image  src={BASE_URL+ads.data.attributes.second.data.attributes.url} width={ads.data.attributes.second.data.attributes.width} height={ads.data.attributes.second.data.attributes.height} alt={ads.data.attributes.second.data.attributes.alt} />
                    </a>  
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
                    {localNewsData.data&&[...localNewsData.data.slice(0, 3)].map((ob) => (
                      <div key={ob.id} className="single-feature-post video-post bg-img"
                      style={{ backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.url})` }}
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
                  
                    {localNewsData.data&&[...localNewsData.data.slice(3, 7)].map((ob) => (  <div  key={ob.id} className="col-12 col-md-6 col-lg-6"> <div   className="single-post-area mb-80 bg-white shadow">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.url}`} alt={ob.attributes.title} width={400} height={200}   />
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
                    {localNewsData.data&&[...localNewsData.data.slice(5, 8)].map((ob) => (   <div  key={ob.id} className="col-12 col-md-6 col-lg-4"> <div   className="single-post-area mb-80 ">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.url}`} alt={ob.attributes.title} width={400} height={200} />
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
                      <div className="section-heading style-2">
                      <a href={localNewsData.data?arabicNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/":"#"}> <h4>الاخبار العربية</h4></a>
                        <div className="line"></div>
                      </div>
                    </div>

                    <div className="col-12">
                      {/* <!-- Section Heading --> */}

                      {/* <!-- Sports Video Slides --> */}
                      <div className="featured-post-slides owl-carousel mb-30 ">
                  {arabicNewsData.data&&[...arabicNewsData.data.slice(0, 3)].map((ob) => ( <div
                     key={ob.id}  className="single-feature-post video-post bg-img"
                     style={{ backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.url})` }}
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
                    </div>
                
                   
                      {/* <!-- Business Video Slides --> */}
                     
                      {arabicNewsData.data&&[...arabicNewsData.data.slice(2, 4)].map((ob) => (  
                        <div  key={ob.id}  className="col-12 col-md-6 col-lg-6"> <div className="single-post-area bg-white shadow">
                          {/* <!-- Post Thumbnail --> */}
                          <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.url}`} alt={ob.attributes.title} width={400} height={200}     />
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
                          </div>     ))}
                       
                     
                    
                   
                </div>
                <div className='row'>
                
                       
                  {arabicNewsData.data&&[...arabicNewsData.data.slice(4, 7)].map((ob) => ( <div  key={ob.id} className=" ">
                      <div className="single-blog-post style-3 d-flex mb-50 bg-white shadow">
                      <div className="post-thumbnail">
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.url}`} alt={ob.attributes.title} width={400} height={200}     />
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
                   {/* herzontal ad */}
                   <div className="container mt-2 mb-5">
                     <a>
                   <Image  src={BASE_URL+ads.data.attributes.third.data.attributes.url} width={ads.data.attributes.third.data.attributes.width} height={ads.data.attributes.third.data.attributes.height} alt={ads.data.attributes.third.data.attributes.alt} />
                     </a>

                   </div>
                    {/* herzontal ad */}

 
                 

                  {/* <!-- Section Heading --> */}
                  <div className="section-heading style-2">
                   
                    <a href={globalNewsData.data?globalNewsData.data[0]?.attributes.mainCategory.data.attributes.path+"/":"#"}> <h4>الاخبار العالمية</h4></a>
                    <div className="line"></div>
                  </div>
                 
                  {/* <!-- Featured Post Slides --> */}
                  <div className="featured-post-slides owl-carousel mb-30 ">
                  {globalNewsData.data&&[...globalNewsData.data.slice(0, 3)].map((ob) => ( <div
                     key={ob.id}  className="single-feature-post video-post bg-img"
                     style={{ backgroundImage: `url(${BASE_URL+ob.attributes.featuredImage.data.attributes.url})` }}
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
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.url}`} alt={ob.attributes.title} width={400} height={200}     />
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
                    <Image  src={BASE_URL+ads.data.attributes.forth.data.attributes.url} width={ads.data.attributes.forth.data.attributes.width} height={ads.data.attributes.forth.data.attributes.height} alt={ads.data.attributes.forth.data.attributes.alt} />
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
                    <Image  src={BASE_URL+ads.data.attributes.fifth.data.attributes.url} width={ads.data.attributes.fifth.data.attributes.width} height={ads.data.attributes.fifth.data.attributes.height} alt={ads.data.attributes.fifth.data.attributes.alt} />
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
                      <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.url}`} alt={ob.attributes.title} width={110} height={80}     />
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
                          <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.url}`} alt={ob.attributes.title} width={100} height={70}     />
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
                  {/* herzontal ad */}
                  <div className="container mt-2 mb-5">
                     <a>
                   <Image  src={BASE_URL+ads.data.attributes.third.data.attributes.url} width={ads.data.attributes.third.data.attributes.width} height={ads.data.attributes.third.data.attributes.height} alt={ads.data.attributes.third.data.attributes.alt} />
                     </a>

                   </div>
                    {/* herzontal ad */}
                </div>
              </div>
            </div>
          </div>
        </section>
       
        
    </>
  );
}





async function getBreakingNews() {
  const res = await fetch(
    `${BASE_URL}/api/short-news?populate=*&pagination[limit]=28&sort[0]=createdAt%3Adesc`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}

 async function getPinnedNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=10&filters[pin][$eq]=true&filters[mainCategory][path][$ne]=articles&sort[0]=publishedAt%3Adesc`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}

 async function getArabicNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=arabic-news`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}

 async function getLocalNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=yemeni-news`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}

 async function getGlobalNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=inernational-news`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}
 async function getRussianNews() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=russian-news`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );

  return res.json();
}

 async function getِArticales() {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=publishedAt%3Adesc&filters[mainCategory][path][$eq]=articles`,
    { headers, next: { revalidate: NEWSREVALIDATE } }

   
  );
  return res.json();
}

   async function getSaudiSanaa() {
    const res = await fetch(
      `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=ريال%20سعودي`,
      { headers, next: { revalidate: NEWSREVALIDATE } }
    );
  return res.json();
};
   async function getSaudiAden() {
    const res = await fetch(
      `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=ريال%20سعودي`,
      { headers, next: { revalidate: NEWSREVALIDATE } }
    );
  return res.json();
};
   async function getDollarAden() {
    const res = await fetch(
      `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=دولار%20امريكي`,
      { headers, next: { revalidate: NEWSREVALIDATE } }
    );
  return res.json();
};
   async function getDollarSanaa() {
    const res = await fetch(
      `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=دولار%20امريكي`,
      { headers, next: { revalidate: NEWSREVALIDATE } }
    );
  return res.json();
};
 async function getDieslSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=ديزل`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
 async function getDieslAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=ديزل`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};

 async function getPatrolSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=بترول`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
 async function getPatrolAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=بترول`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
 async function getGasSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=غاز`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
 async function getGasAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=غاز`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
 async function getCoinSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=جنية`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
 async function getCoinAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=جنية`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
 async function get24KSanaa() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=صنعاء&filters[currencyName][$eq]=عيار%2024`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
 async function get24KAden() {
  const res = await fetch(
    `${BASE_URL}/api/currency-prices?populate=*&pagination[limit]=1&sort[0]=date%3Adesc&filters[city][$eq]=عدن&filters[currencyName][$eq]=عيار%2024`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};

 async function getADS(){
  const res = await fetch(
    `${BASE_URL}/api/home-ad?populate=*`,
    { headers, next: { revalidate: NEWSREVALIDATE } }
  );
return res.json();
};
