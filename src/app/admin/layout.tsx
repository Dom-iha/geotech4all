import Sidebar from '@/components/shared/sidebar';


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-[auto_1fr]'>
      <Sidebar />
      <div className='min-h-[calc(100vh-60.08px)] bg-alt'>
        {children}
      </div>
    </div>
  );
}
