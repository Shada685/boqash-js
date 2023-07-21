import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="container mx-auto max-w-md text-center">
        <img className="mx-auto" src="/img/bg-img/404.jpg"  />
        <h1 className="text-4xl text-center font-bold text-zinc-700 my-4">
          404 - لم نجد الصفحة التي تود الوصول اليها
        </h1>
        
        {/*TODO: List similar pages here */}
        {/*TODO: Create Search bar component here */}
        <div className="border border-b-gray-50 my-4"></div>
        {/* Add navigation to important pages */}
      
          <Link
            className="hover:underline bg-[#9b239b] hover:bg-[#e62ce6] text-white py-2 px-4 rounded mx-auto"
            href="/"
          >
  العودة للرئيسية
          </Link>
      
      </div>
    </div>
  )
}