import { useState } from 'react';
import '../index.css';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="w-full pt-5 text-white bg-primary overflow-hidden" dir="rtl">
                <div className="flex justify-between items-center px-4 sm:px-8">
                    {/* منوی اصلی */}
                    <div className="hidden sm:block">
                        <div className="flex text-white pr-10">
                            <a href="#" className="px-6 py-2 text-xl font-regular text-white">
                                خانه
                            </a>
                            <a href="#" className="px-6 py-2 text-xl font-regular text-white">
                                درباره ما
                            </a>
                            <a href="#" className="px-6 py-2 text-xl font-regular text-white">
                                تماس با ما
                            </a>
                            <a href="#" className="px-6 py-2 text-xl font-regular text-white">
                                اساتید
                            </a>
                            <a href="#" className="px-6 py-2 text-xl font-regular text-white">
                                ورزش‌ها
                            </a>
                        </div>
                    </div>

                    {/* دکمه موبایل */}
                    <div className="sm:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* منوی موبایل */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                    <div className="space-y-1 px-4 pb-3 pt-2 text-right text-white">
                        <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                            خانه
                        </a>
                        <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                            درباره ما
                        </a>
                        <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                            تماس با ما
                        </a>
                        <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                            اساتید
                        </a>
                        <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                            ورزش‌ها
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
