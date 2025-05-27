import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import img from '../images/p1.png';

const products = [
  {
    id: 1,
    title: "SUN-20K G04 Three Phase | 2 MPPT Inverter",
    price: "LKR 612,345",
    features: [
      "2 MPP tracker, Max. efficiency up to 98.5%",
      "Zero export application, VSG application",
      "String intelligent monitoring (optional)",
    ],
    image: "../images/p1.png",
  },
  {
    id: 2,
    title: "SUN-20K G04 Three Phase | 2 MPPT Inverter",
    price: "LKR 612,345",
    features: [
      "2 MPP tracker, Max. efficiency up to 98.5%",
      "Zero export application, VSG application",
      "String intelligent monitoring (optional)",
    ],
    image: "/path/to/your/image.png",
  },
  {
    id: 3,
    title: "SUN-20K G04 Three Phase | 2 MPPT Inverter",
    price: "LKR 612,345",
    features: [
      "2 MPP tracker, Max. efficiency up to 98.5%",
      "Zero export application, VSG application",
      "String intelligent monitoring (optional)",
    ],
    image: "/path/to/your/image.png",
  },
  {
    id: 4,
    title: "SUN-20K G04 Three Phase | 2 MPPT Inverter",
    price: "LKR 612,345",
    features: [
      "2 MPP tracker, Max. efficiency up to 98.5%",
      "Zero export application, VSG application",
      "String intelligent monitoring (optional)",
    ],
    image: "/path/to/your/image.png",
  },
  {
    id: 5,
    title: "SUN-20K G04 Three Phase | 2 MPPT Inverter",
    price: "LKR 612,345",
    features: [
      "2 MPP tracker, Max. efficiency up to 98.5%",
      "Zero export application, VSG application",
      "String intelligent monitoring (optional)",
    ],
    image: "/path/to/your/image.png",
  },
  {
    id: 6,
    title: "SUN-20K G04 Three Phase | 2 MPPT Inverter",
    price: "LKR 612,345",
    features: [
      "2 MPP tracker, Max. efficiency up to 98.5%",
      "Zero export application, VSG application",
      "String intelligent monitoring (optional)",
    ],
    image: "/path/to/your/image.png",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) return <div className="p-8 text-center">Product not found</div>;

  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img src={img} alt={product.title} className="w-full h-96 object-contain p-6" />
          <div className="p-8">
            <p className="text-green-500 font-semibold">Solar Inverters</p>
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-xl text-blue-700 font-semibold my-4">{product.price}</p>
            <ul className="space-y-2 mt-4">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-500 mt-1">➔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
