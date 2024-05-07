import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import styles from '@/styles/page.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '600', '500'],
});

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} ${styles.body}`}>
        <div className={styles.layout}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
