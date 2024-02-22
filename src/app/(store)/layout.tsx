import { Sidebar, TopMenu } from "@/components";



export default function StoreLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen">

      <TopMenu />
      <Sidebar />
      

      <div className="px-0 mt-24">
        {/* /*sm:px-10 */}
        { children }

      </div>

     
    </main>
  );
}