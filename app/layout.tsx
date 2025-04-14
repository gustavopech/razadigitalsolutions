import './globals.css';
import { LocaleProvider } from '@/translation/LocaleContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          <Navbar />
          {children}
          <Footer/>
        </LocaleProvider>
      </body>
    </html>
  );
}
