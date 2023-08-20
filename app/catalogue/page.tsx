import { AddWithVariants } from 'components/add-with-variants';
import { PageWrapper } from 'components/page-wrapper';
import { getProducts } from 'lib/shopify';
import Image from 'next/image';

export default async function Catalogue() {
  const products = await getProducts({});

  if (products.length === 0)
    return (
      <div className="flex flex-1 flex-col justify-center space-y-4 text-center align-middle uppercase text-eppus-yellow-font">
        <h1>All products are currently sold out!</h1>
      </div>
    );

  return (
    <PageWrapper>
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
            <div className="mt-6 flex w-full flex-row items-end justify-between">
              <h1 className="text-3xl text-eppus-yellow">{product.title}</h1>
              <h3 className="">
                <span>{product.priceRange.maxVariantPrice.amount}</span>{' '}
                <span>{product.priceRange.maxVariantPrice.currencyCode}</span>
              </h3>
            </div>
            <AddWithVariants variants={product.variants} />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
