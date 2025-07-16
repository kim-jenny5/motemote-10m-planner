import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'MOTEMOTE 10m PLANNER',
	description: 'Digital clone of the viral MOTEMOTE 10 Minute planner'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='font-pretendard'>{children}</body>
		</html>
	);
}
