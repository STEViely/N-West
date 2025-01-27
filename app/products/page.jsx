import ProductContainer from "../_components/productContainer";

export default function Page() {
  const container = [
    { id: 1, productType: "TOYOTA", link: "/toyota", logo: "toyota.png" },
    { id: 2, productType: "HONDA", link: "/honda", logo: "honda.png" },
    { id: 3, productType: "NISSAN", link: "/nissan", logo: "nissan.png" },
    { id: 4, productType: "SUZUKI", link: "/suzuki", logo: "suzuki.png" },
    { id: 5, productType: "BYD", link: "/byd", logo: "byd.png" },
    { id: 6, productType: "TESLA", link: "/tesla", logo: "tesla.png" },
    { id: 7, productType: "MAZDA", link: "/mazda", logo: "mazda.png" },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 mt-6">
      {container.map((el) => (
        <ProductContainer
          key={el.id}
          productType={el.productType}
          link={el.link}
          logo={el.logo}
        />
      ))}
    </div>
  );
}
