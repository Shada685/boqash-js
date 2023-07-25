 
import { BASE_URL ,NEWSREVALIDATE,headers} from "../api/config";
import Image from "next/image";
 
 
 
const Pagination=({news,path})=>{

    let current=news.meta.pagination.page,pageCount=news.meta.pagination.pageCount,differnce =pageCount-current,
  
    navs=[]
    ;  
    if (pageCount==1){
        return;
    }

   let low=  Math.max(current-2,1)
   let high=  Math.min(current+3,pageCount)
   
    for(let i=low; i<=high;i++){
        if (i===current){

            navs.push(<li className="page-item"><span className="page-link " style={{backgroundColor:"#fff"}}>{current}</span>
            </li> )
            continue
        }
        navs.push(<li className="page-item"><a className="page-link"  href={path+"?pg="+i}>{i}</a></li>)
        }
  
//   for(let i=1; i<=differnce || i>=3;i++){
//     let count=i+current;
//     navs.push(<li className="page-item"><a className="page-link" href={path+"?pg="+count}>{i+current}</a></li>)
//     }
    return(
        <nav class="mt-50">
        <ul className="pagination justify-content-center">
         
            {current-1<1 || current>pageCount?"":<li className="page-item"><a className="page-link" href={path+"?pg="+Number(current-1)}><i className="fa fa-angle-right"></i></a>
            </li>}
            {/* <li className="page-item"><span className="page-link " style={{backgroundColor:"#fff"}}>{current}</span>
            </li> */}
            {navs.map(n=>n)}
            {current<pageCount? <li className="page-item"><a className="page-link" href={path+"?pg="+Number(current+1)}><i className="fa fa-angle-left"></i></a>
            </li>:""}
        </ul>
    </nav>
   
    )
}

export default async function Page({params,searchParams}) {
 
   const {pg}=searchParams;
    const catData =  getCat(params);
    const newsData =  getNews(params,pg);
    const breakingNewsData=await getBreakingNews(params);
    const [cat,news]=await Promise.all([catData,newsData])
    const ads=await getADS()

  
  return (
    <>

    {/* <!-- ##### Breadcrumb Area Start ##### --> */}
    <div className="vizew-breadcrumb">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i className="fa fa-book" aria-hidden="true"></i>
                                    الرئيسية</a></li>
                         
                            <li className="breadcrumb-item active" aria-current="page">{cat.data[0]?.attributes.title}</li>
                        </ol>
                    </nav>
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
                            <h4><i className="fa fa-record" aria-hidden="true"></i> {cat.data[0]?.attributes.title}</h4>
                            <h4><i className="fa fa-record" aria-hidden="true"></i> </h4>
                        </div>
                        {/* <!-- View Options --> */}
                        
                    </div>


                    <div className="row">
                    {news? "":<p>لايوجد اخبار</p>}
                    
                        {  news?.data.map((ob) => ( <div key={ob.id} className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                     <Image src={`${BASE_URL+ob.attributes.featuredImage.data.attributes.formats.thumbnail.url}`} width={400} height={200} alt={ob.attributes.title} />

                                    
                                </div>

                                {/* <!-- Post Content --> */}
                        <div className="post-content p-3"> 
                          
                          <a  href={ob.attributes.mainCategory.data.attributes.path+"/"+encodeURIComponent(ob.attributes.slug)} className="post-title">
                           {ob.attributes.title}
                          </a>
                          <div className="post-meta d-flex">
                          { new Date(ob.attributes.publishedAt).toISOString().split("T")[0]}
                          <p>{ob.attributes.shortContent}</p>
                          </div>
                        </div>
                            </div>
                        </div>))  }
                      
                       


                 

{/* sigle post list end  */}

                        
                    </div>

                    {/* <!-- Pagination --> */}
                     {news? ( <Pagination news={news} path={cat.data[0]?.attributes.path} />):""}
                </div>
{/* <nav class="mt-50">
                        <ul className="pagination justify-content-center">
                         
                            <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left"></i></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </nav> */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="sidebar-area">
                    <div className="single-widget latest-video-widget mb-50 bg-image shadow">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading style-2 mb-30">
                      <h4>مقتطفات {cat.data[0]?.attributes.title}</h4>
                      
                      <div className="line"></div>
                    </div>
                    {breakingNewsData.data.map((ob) => (<div key={ob.id} className="single-blog-post d-flex">
                       
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
                        {/* <!-- ***** follower Widget ***** --> */}
                  <div className="single-widget followers-widget mb-50 bg-white shadow">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                      <span className="counter">198</span>
                      <span>اعجاب</span>
                    </a>
                    <a href="#" className="twitter">
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

                    
 {/* <!-- ***** ad Widget ***** --> */}

               <div className="single-widget add-widget mb-50 bg-white shadow">
                    <a href="#">
                    <Image  src={BASE_URL+ads.data.attributes.category.data.attributes.url} width={ads.data.attributes.category.data.attributes.width} height={ads.data.attributes.category.data.attributes.height} alt={ads.data.attributes.category.data.attributes.alt} />
                    </a>
                  </div>

                     

                        {/* <!-- ***** newsletter Widget ***** --> */}
                  <div className="single-widget newsletter-widget mb-50 bg-white shadow">
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
                        <button type="submit" className="btn vizew-btn w-100">
                          اشترك
                        </button>
                      </form>
                    </div>
                  </div>

                        

                    </div>
                </div>
            </div>
        </div>
    </div>
    
 
    </>
  )
}
 async function getBreakingNews(params) {
    const res = await fetch(
      `${BASE_URL}/api/short-news?populate=*&pagination[limit]=20&sort[0]=createdAt%3Adesc&filters[zone][path][$eq]=${params.cat}`,
      { headers, next: { revalidate: CATREVALIDATE } }
    );
  
    return res.json();
  }
async function getNews(params,pg) {

   let page=1;
   if(!isNaN(pg)){
    page=pg;
   }
    
    const res = await fetch(`${BASE_URL}/api/news?populate=*&filters[mainCategory][path][$eq]=${params.cat}&pagination[page]=${page}&pagination[pageSize]=24`,{ headers, next: { revalidate: CATREVALIDATE } })
    const news = await res.json()
   
    return news
  }
  async function getCat(params) {
    const res = await fetch(`${BASE_URL}/api/zones?filters[path][$eq]=${params.cat}`,{ headers})
    const cat = await res.json()
   
    return cat
  }

  export const dynamicParams = false;
export async function generateStaticParams() {
    const categories = await fetch(`${BASE_URL}/api/zones`,{ headers}).then((res) => res.json())
   
    return categories.data.map((post) => ({
      cat: post.attributes.path,
    }))

  }
 
  async function getADS(){
    const res = await fetch(
      `${BASE_URL}/api/home-ad?populate=*`,
      { headers, next: { revalidate: NEWSREVALIDATE } }
    );
  return res.json();
  };