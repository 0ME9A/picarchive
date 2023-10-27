import { metadata_template } from './metadata';
// import { Ubuntu } from 'next/font/google';
import DownloadMessage from './src/_components/LayoutsComp/DownloadMessage';
import PhotosForWeb from './src/_components/LayoutsComp/PhotosForWeb';
import RTKLayout from './src/_components/LayoutsComp/rtkLayout';
import Nav from './src/_components/LayoutsComp/Nav';
import './globals.css';

export const metadata = metadata_template;

// const ubuntu = Ubuntu({
//   weight: ["300", "400", "500", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={` w-full h-full bg-lighter dark:bg-darker text-black dark:text-white`}>
        <RTKLayout>
          <PhotosForWeb />
          <header className='relative z-20'>
            <Nav />
          </header>
          <main>
            {children}
            <DownloadMessage />
          </main>
        </RTKLayout>
      </body>
    </html>
  )
}
