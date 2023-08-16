import { getProducts } from 'lib/shopify';

export default async function Catalogue() {
  const products = await getProducts({});
  console.log(products);

  return (
    <div className="flex flex-1 flex-col justify-center space-y-4 text-center align-middle uppercase text-eppus-yellow-font">
      <p>For inquiries please contact:</p>
      <p>Eppuscheesesteaks@gmail.com</p>
    </div>
  );
}
