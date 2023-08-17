import { AddToCart } from 'components/cart/add-to-cart';
import { createCart, getCart, getProducts } from 'lib/shopify';
import { cookies } from 'next/headers';
import Image from 'next/image';

export default async function Catalogue() {
  const products = await getProducts({});

  //cart init logic
  let cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.id;
    cookies().set('cartId', cartId);
  }
  //cart logic end

  if (products.length === 0)
    return (
      <div className="flex flex-1 flex-col justify-center space-y-4 text-center align-middle uppercase text-eppus-yellow-font">
        <h1>All products are currently sold out!</h1>
      </div>
    );

  return (
    <div className="flex w-full flex-col items-center justify-center py-20 text-center">
      {products.map((product) => (
        <div className="flex flex-col items-center justify-center p-4" key={product.id}>
          <Image
            src={product.featuredImage.url}
            width={500}
            height={500}
            priority={true}
            alt={product.title}
            className="bg-[#1d1a1a]"
          />
          <h1 className="mt-6">{product.title}</h1>
          <h3 className="mt-4">
            <span>{product.priceRange.maxVariantPrice.amount}</span>{' '}
            <span>{product.priceRange.maxVariantPrice.currencyCode}</span>
          </h3>
          <AddToCart availableForSale productId={product.id} />
        </div>
      ))}
    </div>
  );
}
