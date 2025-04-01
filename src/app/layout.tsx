import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/app/globals.css';
import { Header } from '@/components/ui/header';
import { ThemeProvider } from '@/components/ui/theme-provider';

const pt_sans = localFont({
    src: './fonts/pt_sans/PTSans-Regular.ttf',
    variable: '--font-pt-sans',
    weight: '100 700'
});

export const metadata: Metadata = {
    title: 'IBVI',
    description: 'Avaliações Imobiliárias Precisas'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='pt-BR'>
            <body className={`${pt_sans.variable} bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    <div className='relative flex min-h-screen flex-col'>
                        <Header />
                        <main className='flex-1'>{children}</main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
