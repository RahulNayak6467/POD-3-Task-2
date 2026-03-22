// type Params = {
//   category: string;
//   id: string;
// };

import Image from "next/image";
import { notFound } from "next/navigation";

// async function ProductsDetail({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = await params;

//   return;
// }

// export default ProductsDetail;

// app/products/[id]/page.tsx

// import Image from "next/image";

// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// };

// async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = await params;

//   const res = await fetch(`https://dummyjson.com/products/${id}`);
//   const product: Product = await res.json();

//   return (
//     <div className="max-w-6xl mx-auto px-12 py-8">
//       {/* breadcrumb */}
//       <p className="font-mono text-xs text-gray-400 mb-8">
//         Home / Categories / <span className="text-black">{product.title}</span>
//       </p>

//       {/* main layout */}
//       <div className="grid grid-cols-2 gap-12 mb-16">
//         {/* left — images */}
//         <div className="flex flex-col gap-3">
//           <div className="bg-[#edeae4] rounded-2xl h-[420px] flex items-center justify-center">
//             <Image
//               src={product.thumbnail}
//               alt={product.title}
//               width={300}
//               height={300}
//               className="object-contain h-[360px]"
//             />
//           </div>

//           {/* thumbnails */}
//           <div className="flex gap-3">
//             {product.images.slice(0, 4).map((img, i) => (
//               <div
//                 key={i}
//                 className="w-[72px] h-[72px] bg-[#edeae4] rounded-xl border border-[#d8d5cf] flex items-center justify-center cursor-pointer hover:border-black transition-colors"
//               >
//                 <Image
//                   src={img}
//                   alt={`${product.title} ${i}`}
//                   width={60}
//                   height={60}
//                   className="object-contain h-[60px]"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* right — info */}
//         <div className="flex flex-col gap-4 pt-2">
//           <span className="font-mono text-xs text-gray-400 tracking-widest">
//             {product.category}
//           </span>

//           <h1 className="font-mono text-2xl font-bold leading-tight">
//             {product.title}
//           </h1>

//           {/* rating */}
//           <div className="flex items-center gap-3">
//             <span className="text-[#e63946] tracking-widest">
//               {"★".repeat(Math.round(product.rating))}
//               {"☆".repeat(5 - Math.round(product.rating))}
//             </span>
//             <span className="font-mono text-sm font-bold">
//               {product.rating}
//             </span>
//             <span className="text-xs text-gray-400">(120 reviews)</span>
//           </div>

//           {/* price */}
//           <div className="py-4 border-t border-b border-[#e5e1da]">
//             <span className="font-mono text-3xl font-bold">
//               ${product.price}
//             </span>
//           </div>

//           <p className="text-sm text-gray-500 leading-relaxed font-light">
//             {product.description}
//           </p>

//           {/* stock */}
//           <div className="flex items-center gap-2 text-sm">
//             <div className="w-2 h-2 rounded-full bg-green-500" />
//             <span className="text-gray-600">In stock</span>
//             <span className="font-mono text-xs text-gray-400">
//               {product.stock} units left
//             </span>
//           </div>

//           {/* add to cart */}
//           <button className="w-full bg-black text-white font-medium py-4 rounded-xl hover:bg-[#e63946] transition-colors text-sm">
//             Add to cart
//           </button>

//           {/* meta */}
//           <div className="grid grid-cols-2 gap-3 mt-2">
//             <div className="bg-[#edeae4] rounded-xl p-3">
//               <p className="font-mono text-[10px] text-gray-400 mb-1">BRAND</p>
//               <p className="text-sm font-medium">{product.brand}</p>
//             </div>
//             <div className="bg-[#edeae4] rounded-xl p-3">
//               <p className="font-mono text-[10px] text-gray-400 mb-1">
//                 CATEGORY
//               </p>
//               <p className="text-sm font-medium">{product.category}</p>
//             </div>
//             <div className="bg-[#edeae4] rounded-xl p-3">
//               <p className="font-mono text-[10px] text-gray-400 mb-1">RATING</p>
//               <p className="text-sm font-medium">{product.rating} / 5</p>
//             </div>
//             <div className="bg-[#edeae4] rounded-xl p-3">
//               <p className="font-mono text-[10px] text-gray-400 mb-1">STOCK</p>
//               <p className="text-sm font-medium">{product.stock} units</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;

interface ProductDetailsProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  tags: string[];
  brand: string;
  images: string[];
  thumbnail: string;
  category: string;
  stock: number;
}

async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    notFound();
  }
  const data = (await response.json()) as ProductDetailsProps;
  const {
    title,
    description,
    price,
    rating,
    tags,
    brand,

    images,
    thumbnail,
    category,
    stock,
  } = data;

  return (
    <section className="mt-50 h-[657px]">
      <div className="w-[1200px] mx-auto flex gap-4">
        <div className="w-full">
          <Image
            className=" w-[1000px] bg-bg-section border-border-medium object-contain border rounded-2xl "
            src={thumbnail}
            alt={title}
            width={1000}
            height={1000}
          />
          <div className="flex gap-4">
            {images.map((img) => (
              <div className="h-20 w-full" key={id}>
                <Image
                  src={img}
                  className="h-20 bg-bg-section mt-2 rounded-2xl"
                  alt={title}
                  fill
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-3">
            <span className="text-sm text-text-muted font-bold ">
              {category}
            </span>
            <h1 className="text-3xl font-bold text-text-primary">{title}</h1>
            <div className="flex gap-2 items-center mt-2">
              {tags.map((tag) => (
                <span
                  className="text-xs py-1 font-medium text-text-primary bg-bg-section rounded-2xl text-center w-fit px-4 "
                  key={crypto.randomUUID()}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2 items-center mt-2">
              <div className="flex gap-1">
                <span className="text-accent text-lg">★</span>
                <span className="text-accent text-lg">★</span>
                <span className="text-accent text-lg">★</span>
                <span className="text-accent text-lg">★</span>
                <span className="text-accent text-lg">★</span>
              </div>
              <span className=" text-text-primary font-bold text-lg">
                {rating}
              </span>
            </div>

            <div className="text-text-primary text-3xl mt-2 font-extrabold mb-2 ">
              ${price}
            </div>
          </div>

          <div className="text-md text-text-secondary font-medium mt-2 mb-4">
            {description}
          </div>

          <p className="ml-2 mb-2 font-bold">
            In stock{" "}
            <span className="text-text-muted text-sm ">
              {stock} units left
            </span>{" "}
          </p>
          <button className=" p-4 text-center bg-bg-navbar text-text-inverse text-sm w-full rounded-2xl cursor-pointer hover:opacity-80">
            Add to Cart
          </button>
          {/* <div className="grid grid-cols-2 gap-4 mt-6">
            {tags.map((el) => (
              <div key={id}>
                <p className="text-text-primary font-bold text-md font-mono p-4 bg-bg-section rounded-2xl">
                  {el}
                </p>
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-2 mt-4 gap-4 ">
            <div className="py-2 px-4 rounded-2xl bg-bg-section ">
              <p className="text-text-muted uppercase font-bold text-xs">
                Brand
              </p>
              <h3 className="text-text-primary font-bold text-sm mt-2">
                {brand}
              </h3>
            </div>
            <div className="py-2 px-4 rounded-2xl bg-bg-section ">
              <p className="text-text-muted uppercase font-bold text-xs">
                category
              </p>
              <h3 className="text-text-primary font-bold text-sm mt-2">
                {category}
              </h3>
            </div>
            <div className="py-2 px-4 rounded-2xl bg-bg-section ">
              <p className="text-text-muted uppercase font-bold text-xs">
                Rating
              </p>
              <h3 className="text-text-primary font-bold text-sm mt-2">
                {rating} / 5
              </h3>
            </div>
            <div className="py-2 px-4 rounded-2xl bg-bg-section">
              <p className="text-text-muted uppercase font-bold text-xs">
                stock
              </p>
              <h3 className="text-text-primary font-bold text-sm mt-2">
                {stock} units
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
