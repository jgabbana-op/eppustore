import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="specialborder fixed z-20 h-20 w-full bg-background">
        {/* Desktop */}
        <div className="m-auto hidden w-11/12 max-w-screen-xl text-eppus-yellow-font lg:block">
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
            <div className="flex flex-row space-x-8 uppercase ">
              <Link href="/menu">Menu</Link>
              <Link href="/hotspots">Piping hotspots</Link>
              <Link href="/catalogue">The catalogue</Link>
              <Link href="/contact">Contact</Link>
            </div>
            {/* <div className="flex w-1/3 justify-end">
              <Suspense fallback={<CartIcon className="h-6" />}>
                <Cart />
              </Suspense>
            </div> */}
          </div>
        </div>
        {/* Mobile */}
        <div className="relative flex w-full items-center justify-center lg:hidden">
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
          <div className="absolute right-8 top-2/4 -translate-y-2/4">
            {/* <button className="" onClick={toggleModal}>
              <svg viewBox="0 0 10 8" width="30">
                <path
                  d="M1 1h8M1 4h 8M1 7h8"
                  stroke="#fae7b0"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <Modal
              open={modalIsOpen}
              onClose={toggleModal}
              components={{
                Backdrop: () => {
                  return (
                    <div className="h-full w-full backdrop-blur-md" onClick={toggleModal}></div>
                  );
                }
              }}
            >
              <div className="absolute left-2/4 top-2/4 h-96 w-96 -translate-x-2/4 -translate-y-2/4 rounded bg-eppus-brown">
                <div className="relative h-full w-full p-12 text-eppus-yellow-font">
                  <div className="absolute right-4 top-4 text-eppus-red">
                    <button onClick={toggleModal}>X</button>
                  </div>
                  <div className="flex h-full flex-col items-center justify-around uppercase">
                    <Link href="/menu" className="text-2xl font-bold" onClick={toggleModal}>
                      Menu
                    </Link>
                    <Link href="/hotspots" className="text-2xl font-bold" onClick={toggleModal}>
                      Piping hotspots
                    </Link>
                    <Link href="/catalogue" className="text-2xl font-bold" onClick={toggleModal}>
                      The catalogue
                    </Link>
                    <Link href="/contact" className="text-2xl font-bold" onClick={toggleModal}>
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </Modal>
          </div> */}
          </div>
        </div>
      </div>
      <div className="visible h-20"></div>
    </nav>
  );
}

// export default async function Navbar() {
//   const menu = await getMenu('next-js-frontend-header-menu');

//   return (
//     <nav className="relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6">
//       <div className="block w-1/3 md:hidden">
//         <MobileMenu menu={menu} />
//       </div>
//       <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
//         <div className="md:mr-4">
//           <Link href="/" aria-label="Go back home">
//             <LogoIcon className="h-8 transition-transform hover:scale-110" />
//           </Link>
//         </div>
//         {menu.length ? (
//           <ul className="hidden md:flex md:items-center">
//             {menu.map((item: Menu) => (
//               <li key={item.title}>
//                 <Link
//                   href={item.path}
//                   className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
//                 >
//                   {item.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         ) : null}
//       </div>
//       {/* <div className="hidden w-1/3 md:block">
//         <Search />
//       </div> */}

//       <div className="flex w-1/3 justify-end">
//         <Suspense fallback={<CartIcon className="h-6" />}>
//           <Cart />
//         </Suspense>
//       </div>
//     </nav>
//   );
// }
