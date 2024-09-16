import { GlobalProvider } from '@/context/GlobalState';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mamma Mia!',
  description: 'Restaurant Moderne 5-Star',
  icons: {
    icon: '/logo/fav.png',
    shortcut: '/logo/fav.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
