'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { ThemeToggle } from './theme-toggle';

const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'SOBRE', href: '/sobre' },
    { name: 'SERVIÇOS', href: '/servicos' },
    { name: 'CONTATO', href: '/contato' }
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur'>
            <nav className='container mx-auto flex h-16 items-center justify-between lg:px-8' aria-label='Global'>
                {/* Logo */}
                <div className='flex lg:flex-1'>
                    <Link href='/' className='-m-1.5 flex items-center gap-3 p-1.5'>
                        <span className='sr-only'>IBVI</span>
                        <img alt='Logo IBVI' src='/images/ibvi.png' className='h-10 w-auto' />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className='flex md:hidden'>
                    <button
                        type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground'
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon className='size-6' aria-hidden='true' />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex md:items-center md:gap-6'>
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className='text-sm font-medium hover:text-primary'>
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>
            </nav>

            {/* Mobile Menu Panel */}
            <Dialog as='div' className='md:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className='fixed inset-0 z-50' />
                <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                        <Link href='/' className='-m-1.5 p-1.5'>
                            <span className='sr-only'>IBVI</span>
                            <img className='h-8 w-auto' src='/images/ibvi.png' alt='IBVI Logo' />
                        </Link>
                        <button
                            type='button'
                            className='-m-2.5 rounded-md p-2.5 text-foreground'
                            onClick={() => setMobileMenuOpen(false)}>
                            <span className='sr-only'>Close menu</span>
                            <XMarkIcon className='size-6' aria-hidden='true' />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted'
                                        onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className='py-6'>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
