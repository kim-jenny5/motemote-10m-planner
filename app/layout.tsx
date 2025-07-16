import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '10 Minutes Planner',
  description: 'Inspired by the viral MOTEMOTE 10 minutes planner',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className='font-pretendard'>{children}</body>
    </html>
  );
}
