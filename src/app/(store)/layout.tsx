import { Footer, Sidebar, TopMenu, WhatsAppSticky } from "@/components";


export default function StoreLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-0 mt-[92px]">
        {children}
      </div>
      <div className="fixed bottom-2 right-0 items-center z-50 md:flex hidden">
        <WhatsAppSticky name="Juani" href="https://wa.me/2284562439?text=" />
        <WhatsAppSticky name="Tomas" href="https://wa.me/2284537622?text="  />
      </div>
      <Footer />
    </main>
  );
}