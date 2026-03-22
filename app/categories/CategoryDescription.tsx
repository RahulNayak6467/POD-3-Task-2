import ProductCardSkeleton from "../Components/Loader";
import { useCategory } from "../Context/CategoryContext";

function CategoryDescription() {
  const { data, isLoading, category } = useCategory();

  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  const getData =
    category === "all"
      ? data?.products
      : data?.products.filter((el) => el.category === category);
  return (
    <section className=" bg-bg-section ">
      <div className="pt-10 pb-10 pl-20 flex  justify-around items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl text-text-primary">Shop the latest trends</h1>
          <p>Browse products across all categories</p>
        </div>
        <div className="flex flex-col  mt-8 items-center">
          <span className="text-5xl font-bold ">{getData?.length}</span>
          <span>Products available</span>
        </div>
      </div>
    </section>
  );
}

export default CategoryDescription;
