import ProductContainer from "../_components/productContainer";
export default function Page() {
  const container = [
    { id: 1, productType: "TOYOTA", link: "/toyota" },
    { id: 2, productType: "HONDA", link: "/honda" },
    { id: 3, productType: "NISSAN", link: "/nisan" },
    { id: 4, productType: "SUZUKI", link: "/suzuki" },
    { id: 5, productType: "BYD", link: "/byd" },
    { id: 6, productType: "TESLA", link: "/tesla" },
    { id: 7, productType: "MAZDA", link: "/mazda" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 mt-6">
      {container.map((el, index) => {
        console.log(el);
        return (
          <ProductContainer
            key={el.id}
            productType={el.productType}
            link={el.link}
          />
        );
      })}
    </div>
  );
}
