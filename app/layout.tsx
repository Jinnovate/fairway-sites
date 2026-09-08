import type { Metadata } from 'next';
import './globals.css';
import PaletteSwitcher from './components/PaletteSwitcher';
export const metadata: Metadata = { title:'Dream First — Websites + apps by Joel', description:'Clear, professional websites and apps for independent businesses, without the agency price.' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}<PaletteSwitcher /></body></html>}

