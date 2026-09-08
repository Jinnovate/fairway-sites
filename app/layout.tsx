import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Fairway — Websites with a fairer way to pay', description:'Sharp, useful websites for independent businesses. Fair fixed pricing or a transparent growth partnership.' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
