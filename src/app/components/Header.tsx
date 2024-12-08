import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, Heart, Menu, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Header = () => {
  return (
    <div className={montserrat.className}>
      <nav className="w-full border-b-2 border-gray-300 p-4">
        {/* Header Content */}
        <div className="max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-3xl font-bold ml-4 md:ml-12">Bandage</h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 mr-12">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/productList" className="font-semibold flex items-center gap-1">
              Shop <ChevronDown />
            </Link>
            <Link href="/aboutUs" className="font-semibold">
              About
            </Link>
            <Link href="/contactUs" className="font-semibold">
              Contact
            </Link>
          </div>

          {/* Icons Section */}
          <div className="hidden md:flex gap-8 items-center justify-end">
            {/* Login/Register */}
            <div className="items-center flex gap-3 text-[#23A6F0]">
              <IoPersonOutline />
              <p className="mr-6 font-semibold">Login/Register</p>
            </div>

            {/* Shopping Cart */}
            <span className="rounded-full items-center flex text-[#23A6F0]">
              <ShoppingCart />
              <p className="text-sm">1</p>
            </span>

            {/* Wishlist */}
            <span className="rounded-full items-center flex text-[#23A6F0]">
              <Heart />
              <p className="text-sm">1</p>
            </span>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4">
            <ShoppingCart className="text-[#23A6F0]" />
            <Heart className="text-[#23A6F0]" />
            {/* Menu Icon */}
            <Sheet>
              <SheetTrigger>
                <Menu className="text-[#23A6F0]" />
              </SheetTrigger>
              <SheetContent side="bottom" className="p-4">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">Bandage</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-4">
                  <Link href="/" className="text-lg font-medium">
                    Home
                  </Link>
                  <Link href="/aboutUs" className="text-lg font-medium">
                    About
                  </Link>
                  <Link href="/contactUs" className="text-lg font-medium">
                    Contact
                  </Link>
                  <Link href="/productList" className="text-lg font-medium">
                    Shop
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
