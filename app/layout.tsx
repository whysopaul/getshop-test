import { Onest } from 'next/font/google';
import './global.css';

const onest = Onest({
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={onest.className}>
      <body>{children}</body>
    </html>
  );
}
