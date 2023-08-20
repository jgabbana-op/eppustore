import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

export default function Navbar() {
  return (
    <nav>
      <div className="specialborder fixed z-20 h-20 w-full bg-background">
        <div className="relative m-auto w-11/12 max-w-screen-xl text-eppus-yellow-font">
          {/* Desktop */}
          <div className="hidden text-eppus-yellow-font lg:block">
            <div className="relative flex w-full items-center justify-between">
              <div className="flex flex-row space-x-10">
                <div className="relative h-20 w-20">
                  <Link href="/">
                    <Image
                      src="/eppuslogo.png"
                      priority={true}
                      alt="logo"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: 'contain'
                      }}
                    />
                  </Link>
                </div>
                <a
                  href="https://wolt.com/en/fin/helsinki/restaurant/eppus-cheesesteaks-kamppi"
                  target="_blank"
                >
                  <div className="flex flex-row uppercase">
                    <div className="relative h-20 w-20">
                      <Image
                        src="/foodtruck.png"
                        priority={true}
                        alt="logo"
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <div className="m-auto ml-1">Order</div>
                  </div>
                </a>
              </div>
              <div className="flex flex-row items-center space-x-8 uppercase">
                <Link href="/menu">Menu</Link>
                <Link href="/hotspots">Piping hotspots</Link>
                <Link href="/catalogue">The catalogue</Link>
                <Link href="/contact">Contact</Link>
                <CartIcon className="invisible" />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="relative m-auto flex flex-row items-center justify-center text-eppus-yellow-font lg:hidden">
            <div className="absolute left-0 top-2/4 -translate-y-2/4">
              <MobileMenu
                menu={[
                  { title: 'Menu', path: '/menu' },
                  { title: 'Piping hotspots', path: '/hotspots' },
                  { title: 'The catalogue', path: '/catalogue' },
                  { title: 'Contact', path: '/contact' }
                ]}
              />
            </div>
            <div className="relative h-20 w-20">
              <Link href="/">
                <Image
                  src="/eppuslogo.png"
                  priority={true}
                  alt="logo"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-2/4 -translate-y-2/4">
            <Suspense fallback={<CartIcon className="h-6" />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="visible h-20"></div>
    </nav>
  );
}
