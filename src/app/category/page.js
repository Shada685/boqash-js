import Head from "next/head";
import Script from "next/script";



export default function Page() {
  return (
    <>

      {/* <div className="preloader d-flex align-items-center justify-content-center">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div> */}

  

    {/* <!-- ##### Breadcrumb Area Start ##### --> */}
    <div className="vizew-breadcrumb">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i className="fa fa-الرئيسية" aria-hidden="true"></i>
                                    الرئيسية</a></li>
                            <li className="breadcrumb-item"><a href="#">Feature</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Archive by Category SPORTS</li>
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
                            <h4><i className="fa fa-trophy" aria-hidden="true"></i> Sports</h4>
                        </div>
                        {/* <!-- View Options --> */}
                        
                    </div>

                    <div className="row">
<div className="featured-post-slides owl-carousel mb-30">
                            {/* <!-- Single Feature Post --> */}
                            <div className="single-feature-post video-post bg-img"
                               style={{ backgroundImage: "url(/img/bg-img/14.jpg)" }}>
                                

                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <a href="#" className="post-cata">Sports</a>
                                    <a href="single-post.html" className="post-title">Reunification of migrant toddlers,
                                        parents should be completed Thursday</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 25</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 25</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- Single Feature Post --> */}
                            
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/12.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">May fights on after Johnson savages
                                        Brexit approach</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 22</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 16</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 15</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/39.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 28</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/40.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Theresa May battles Brexitee backlash
                                        amid disquiet</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/41.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Theresa May battles Brexitee backlash
                                        amid disquiet</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 22</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 16</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 15</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/42.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Searching for the 'angel' who held me
                                        on Westminster Bridge</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 28</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/43.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Full article Prince Charles's 'urgent'
                                        global research</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/44.jpg" alt=""/>

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Paramedics 'drilled into boat death
                                        woman'</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 22</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 16</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 15</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/45.jpg" alt=""/>

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Do This One Simple Action for an
                                        Absolutely</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 28</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/46.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/47.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Theresa May battles Brexiteer backlash
                                        amid disquiet</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 22</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 16</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 15</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/48.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Searching for the 'angel' who held me
                                        on Westminste Bridge</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 28</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-6">
                            <div className="single-post-area mb-50 bg-white shadow">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/49.jpg" alt="" />

                                        </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content p-3">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Love Island star's boyfriend found
                                        dead after her funeral</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>
{/* post single list */}
 {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center bg-white shadow">
                            <div className="col-12 col-md-6 ">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt="" />

                                        </div>
                            </div>
                            <div className="col-12 col-md-6 ">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center bg-white shadow">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                        </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" className="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center bg-white shadow">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/24.jpg" alt=""/>

                                        </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title mb-2">Theresa May warned Brexit
                                        strategy 'risks putting Jeremy Corbyn</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center bg-white shadow">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/21.jpg" alt=""/>

                                        </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title mb-2">May fights on after Johnson
                                        savages Brexit approach</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center bg-white shadow">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/22.jpg" alt=""/>

                                        </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title mb-2">Thailand cave rescue: Boys 'doing
                                        well' after spending night</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Post Area --> */}
                    <div className="single-post-area style-2">
                        <div className="row align-items-center bg-white shadow">
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/23.jpg" alt=""/>

                                        </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <!-- Post Content --> */}
                                <div className="post-content mt-0">
                                    <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" className="post-title mb-2">Theresa May battles Brexiteer
                                        backlash amid disquiet</a>
                                    <div className="post-meta d-flex align-items-center mb-2">
                                        <a href="#" className="post-author">By Jane</a>
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <a href="#" className="post-date">Sep 08, 2018</a>
                                    </div>
                                    <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id
                                        tristique sit amet, rutrum non ligula.</p>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

{/* sigle post list end  */}

                        
                    </div>

                    {/* <!-- Pagination --> */}
                    <nav className="mt-50">
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left"></i></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="sidebar-area">

                        {/* <!-- ***** Single Widget ***** --> */}
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

                    

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget add-widget mb-50 bg-white shadow">
                            <a href="#"><img src="img/bg-img/add.png" alt=""/></a>
                        </div>

                     

                        {/* <!-- ***** Single Widget ***** --> */}
                        <div className="single-widget newsletter-widget mb-50 bg-white  shadow">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading style-2 mb-30">
                                <h4>النشرة البريدية</h4>
                                <div className="line"></div>
                            </div>
                            <p>اشترك معنا واحصل على المزيد من الاخبار اولا باول

</p>
                            {/* <!-- Newsletter Form --> */}
                            <div className="newsletter-form bg-white shadow ">
                                <form action="#" method="post">
                                    <input type="email" name="nl-email" className="form-control mb-15" id="emailnl"
                                        placeholder="Enter your email" />
                                    <button type="submit" className="btn vizew-btn w-100">اشتراك</button>
                                </form>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ##### Archive Grid Posts Area End ##### --> */}






    </>
  )
}