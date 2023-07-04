const BASE_URL: string = "http://localhost:1337",

  BEARER_TOKEN: string = "5682b7252772bad46d0a3a19b3883c8f377a9a39eb5ef29b18cd441c23349118d6902a96232bf8a90f4c696bba3a5905caa704cee65d822bb6ec47fceb562456346657773017e6a64f1df0706d040148cc4c665fc961d2314ff13269ee742f829f43e9b43694d2dbb41cca3812cf3dd15c5c3006adcf6e1b14bde92ca624f9c6"

  , headers = {
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
  , newsRevalidate = 20;


export async function getBreakingNews(): Promise<any> {
 
  
  const res = await fetch(`${BASE_URL}/api/short-news?populate=*&pagination[limit]=28&sort[0]=createdAt%3Adesc`, { headers, next: { revalidate: newsRevalidate } });

  return res.json();
}


export async function getPinnedNews(): Promise<any> {
 
  
  const res = await fetch(`${BASE_URL}/api/news?populate=*&pagination[limit]=10&filters[pin][$eq]=true&sort[0]=[0]=publishedAt%3Adesc`, { headers, next: { revalidate: newsRevalidate } });

  return res.json();
}


export async function getArabicNews(): Promise<any> {
 
  
  const res = await fetch(`${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=[0]=publishedAt%3Adesc&filters[zone][$eq]=عربي`, { headers, next: { revalidate: newsRevalidate } });

  return res.json();
}


export async function getLocalNews(): Promise<any> {
 
  
  const res = await fetch(`${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=[0]=publishedAt%3Adesc&filters[zone][$eq]=محلي`, { headers, next: { revalidate: newsRevalidate } });

  return res.json();
}

export async function getGlobalNews(): Promise<any> {
 
  
  const res = await fetch(`${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=[0]=publishedAt%3Adesc&filters[zone][$eq]=عالمي`, { headers, next: { revalidate: newsRevalidate } });

  return res.json();
}
export async function getRussianNews(): Promise<any> {
 
  
  const res = await fetch(`${BASE_URL}/api/news?populate=*&pagination[limit]=7&filters[pin][$ne]=true&sort[0]=[0]=publishedAt%3Adesc&filters[zone][$eq]=الحرب%20الروسية`, { headers, next: { revalidate: newsRevalidate } });

  return res.json();
}

export async function getِArticales(): Promise<any> {
 
  
  const res = await fetch(`${BASE_URL}/api/articales?populate=*&pagination[limit]=7&sort[0]=[0]=publishedAt%3Adesc`, { headers, next: { revalidate: newsRevalidate } });

  return res.json();
}

