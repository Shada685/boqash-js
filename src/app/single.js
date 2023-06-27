import Head from 'next/head'
import Script from 'next/script'
import './style.css'
import React from 'react'

export default function SinglePage() {
  return (
    <>
     <Head>
   <Script src="js/jquery/jquery-2.2.4.min.js" />
    {/* <!-- Popper js --> */}
    <Script src="js/bootstrap/popper.min.js" />
    {/* <!-- Bootstrap js --> */}
    <Script src="js/bootstrap/bootstrap.min.js" />
    {/* <!-- All Plugins js --> */}
    <Script src="js/plugins/plugins.js" />
    {/* <!-- Active js --> */}
    <Script src="js/active.js" />
  
    </Head>
    <body>
      <div>
        <p>how there</p>
      </div>
        <p>test</p>
    </body>
    </>
  )
}

