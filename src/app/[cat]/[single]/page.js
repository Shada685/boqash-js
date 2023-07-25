import Image from "next/image";
import { BASE_URL, CATREVALIDATE, headers } from "../../api/config";

export default async function Page({ params }) {
  const content = await getContent(params.single);
  const news = await getNews();
  if(content.data)  return (
    <>
      {/* <!-- ##### Breadcrumb Area Start ##### --> */}
      <div className="vizew-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">
                      <i className="fa fa-home" aria-hidden="true"></i>
                      الرئيسية
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a
                      href={"/"+
                        content.data[0]?.attributes.mainCategory.data.attributes
                          .path
                      }
                    >
                      {
                        content.data[0]?.attributes.mainCategory.data.attributes
                          .title
                      }
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {content.data[0]?.attributes.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Breadcrumb Area End ##### --> */}

      {/* <!-- ##### Pager Area Start ##### --> */}
      {/* <div className="vizew-pager-area">
        <div className="vizew-pager-prev">
            <p>PREVIOUS ARTICLE</p>

       
            <div className="single-feature-post video-post bg-img pager-article"
                style={{backgroundImage: "url(/img/bg-img/15.jpg);"}}>
            

                <div className="post-content">
                   
                    <a href="video-post.html" className="post-title">{content.data[0]?.attributes.title}</a>
                    <div className="post-meta d-flex">
                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 18</a>
                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 32</a>
                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 24</a>
                    </div>
                </div>
            
                <span className="video-duration">11.13</span>
            </div>
        </div>

        <div className="vizew-pager-next">
            <p>NEXT ARTICLE</p>

          
            <div className="single-feature-post video-post bg-img pager-article"
                style={{backgroundImage: "url(img/bg-img/14.jpg);"}}>
            
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
                \
                <span className="video-duration">06.59</span>
            </div>
        </div>
    </div> */}
      {/* <!-- ##### Pager Area End ##### --> */}

      {/* <!-- ##### Post Details Area Start ##### --> */}
      <section className="post-details-area mb-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="post-details-thumb mb-50">
                <Image
                  src={`${
                    BASE_URL +
                    content.data[0]?.attributes.featuredImage.data.attributes.url
                  }`}
                  width={content.data[0]?.attributes.featuredImage.data.attributes.width}
                  height={content.data[0]?.attributes.featuredImage.data.attributes.height}
                  alt= {content.data[0]?.attributes.title}
                />
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
                    <a
                      href={"/"+
                        content.data[0]?.attributes.mainCategory.data.attributes
                          .path
                      }
                      className="post-cata cata-sm cata-danger"
                    >
                      {
                        content.data[0]?.attributes.mainCategory.data.attributes
                          .title
                      }
                    </a>
                    <a href="single-post.html" className="post-title mb-2">
                      {content.data[0]?.attributes.title}
                    </a>

                    <div className="d-flex justify-content-between mb-30">
                      <div className="post-meta d-flex align-items-center">
                        {/* <a href="#" className="post-author">By Jane</a> */}
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        {/* <a href="#" className="post-date">
                          {" "}
                          {
                            new Date(content.data[0]?.attributes.publishedAt)
                              .toISOString()
                              .split("T")[0]
                          }
                        </a> */}
                      </div>
                      {/* <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div> */}
                    </div>
                  </div>
                  {content.data[0]?.attributes.content}
                  {/* <p>I love dals. All kinds of them but yellow moong dal is my go-to lentil when I am in need
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

                            <h4>Immediate Dividends</h4> */}

                  {/* <ul className="unordered-list mb-0">
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
                            </ul> */}

                  {/* <!-- Post Tags --> */}
                  {/* <div className="post-tags mt-30">
                                <ul>
                                    <li><a href="#">HealthFood</a></li>
                                    <li><a href="#">Sport</a></li>
                                    <li><a href="#">Game</a></li>
                                </ul>
                            </div> */}

                  {/* <!-- Related Post Area --> */}
                  <div className="related-post-area mt-5">
                    {/* <!-- Section Title --> */}
                    <div className="section-heading style-2">
                      <h4> المزيد من المقالات</h4>
                      <div className="line"></div>
                    </div>

                    <div className="row">
                      {news?.map((e) => (
                        <div key={e.id} className="col-12 col-md-6">
                          <div className="single-post-area mb-50 bg-white">
                            {/* <!-- Post Thumbnail --> */}
                            <div className="post-thumbnail">
                              <Image width={e.attributes.featuredImage.data.attributes.formats.small.width} height={e.attributes.featuredImage.data.attributes.formats.small.height} src={BASE_URL+ e.attributes.featuredImage.data.attributes.formats.small.url} alt={e.attributes.title} />
                            </div>

                            {/* <!-- Post Content --> */}
                            <div className="post-content p-3">
                              <a
                                href={
                                  "/" +
                                  e.attributes.mainCategory.data.attributes.path
                                }
                                className="post-cata cata-sm cata-success"
                              >
                                {
                                  e.attributes.mainCategory.data.attributes
                                    .title
                                }
                              </a>
                              <a
                                href={`/${e.attributes.mainCategory.data.attributes.path}/${encodeURIComponent(e.attributes.slug)}`}
                                className="post-title"
                              >
                                {e.attributes.title}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* <!-- Single Blog Post --> */}

                      {/* <!-- Single Blog Post --> */}
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
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
                    Facebook
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
                  </a>
                  <a href="#" className="instagram">
                    <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
                    Instagram
                  </a>
                  <a href="#" className="google">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>{" "}
                    Youtube
                  </a>
                </div>

                {/* <!-- ***** Single Widget ***** --> */}
                <div className="single-widget p-0 author-widget bg-white">
                  <div className="p-4">
                    <img
                      className="author-avatar"
                      src="img/bg-img/30.jpg"
                      alt=""
                    />
                    <a href="#" className="author-name">
                      Chris Hemsworth
                    </a>
                    <div className="author-social-info">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
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
    </>
  );
  else return(<div></div>)
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const news = await fetch(
    `${BASE_URL}/api/news?populate=*&pagination[pageSize]=100`,
    { headers, next: { revalidate: 10 } }
  ).then((res) => res.json());
  let data = [];
  for (let i = 1; i <= news.meta.pagination.pageCount; i++) {
    let res = await fetch(
      `${BASE_URL}/api/news?populate=*&pagination[pageSize]=100&pagination[page]=${i}`,
      { headers, next: { revalidate: 10 } }
    ).then((res) => res.json());
    data.push(...res.data);
  }

  return data?.map((n) => ({
    cat: n.attributes.mainCategory.data.attributes.path,
    single:encodeURIComponent(n.attributes.slug),
  }));
}
async function getContent(single) {
  const res = await fetch(
    `${BASE_URL}/api/news?populate=*&filters[slug][$eq]=${single}`,
    { headers }
  );
  const content = await res.json();

  return content;
}

function getRandomElements(arr) {
  const randomElements = [];

  // Loop three times to get three random elements
  for (let i = 0; i < 3; i++) {
    // Get a random index between 0 and the remaining length of the array
    const randomIndex = Math.floor(Math.random() * (arr.length - i));

    // Get the element at the random index
    const randomElement = arr[randomIndex];

    // Add the random element to the array of random elements
    randomElements.push(randomElement);

    // Remove the selected element from the array
    arr.splice(randomIndex, 1);
  }

  return randomElements;
}
 async function getNews() {
  const res = await fetch(`${BASE_URL}/api/news?populate=*`, { headers }).then(
    (res) => res.json()
  );
  const data = getRandomElements(res.data);
  return data;
}
