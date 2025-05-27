import React from 'react';
import { Link } from 'react-router-dom';
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

const Portfolio = () => {
  return (
    
    <div className="my-4 py-4" id='portfolio'>
    <div className="min-h-screen bg-gray-50 p-8">
        <h2 className="my-2 text-center text-3xl text-green-600 uppercase font-bold">PRODUCT LIST</h2>
               <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-grey-200 mb-8'></div>
                 </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link to={`/Portfolio/${product.id}`} key={product.id}>
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img
              src={img}
              alt={product.title}
              className="w-full h-60 object-contain p-4"
            />
            <div className="p-6">
              <p className="text-green-500 font-semibold mb-2">Solar Inverters</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.price}</h2>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">{product.title}</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500 mt-1">➔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>    </Link>
          
        ))}
      </div>
    </div>
    </div>

  );
};

export default Portfolio;

// const Portfolio = () => {
//     return (
//         <>
//             <div className="my-4 py-4" id='portfolio'>
//                 <h2 className="my-2 text-center text-3xl text-green-700 uppercase font-bold">PRODUCT LIST</h2>
//                 <div className='flex justify-center'>
//                     <div className='w-24 border-b-4 border-grey-200 mb-8'></div>
//                 </div>

//                 <div className="px-4" data-aos="fade-down" data-aos-delay="600">
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
//                                 <div className="m-2 text-justify text-sm">
//                                 <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
//                                     <h2 className="font-semibold my-4 text-2xl text-center">Web Development</h2>
//                                     <p className="text-md font-medium">
//                                         We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
//                             <div className="m-2 text-justify text-sm">
//                                 <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">School Management Portal</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     Our all encompassing School Management Portal is the only solution needed for any institution.
//                                     The School Management Portal (SMP) is a tool that can help educational institutions of all kinds manage their administrative tasks, automate processes, and streamline communication between teachers, students, parents, and administrators. 
//                                     The software can be used to manage all aspects of school operations, including student enrollment, attendance, grades, schedules, and more.
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Schedule Demo
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
                                
//                                 {/* <ul className="border-t border-gray-300 py-8 space-y-6">
//                                     <li className="flex items-center space-x-2 px-8">
//                                         <span className="bg-blue-600 rounded-full p-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
//                                                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
//                                             </svg>
//                                         </span>
//                                         <span className="text-gray-600 capitalize">Free Setup Guidance</span>
//                                     </li>
//                                 </ul> */}
//                             </div>
//                         </div>

//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
//                             <div className="m-2 text-justify text-sm">
//                             <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Payroll Management System</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     The Payroll Management System automates the process of employee payments for businesses and organizations of different sizes. It helps to ensure that your employees get paid accurately and on time, while also reducing the time and effort required to manage payroll manually, with this system in place, you enjoy benefits such as: 
//                                     increased accuracy in employee payments. It can also integrate into an existing management system through well-structured APIs.
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Schedule Demo
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
//                             <div className="m-2 text-justify text-sm">
//                                 <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Event Management System</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     Our event management system helps to manage different types of events, whether weddings, burials or any kind of event. With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable.
//                                     With use cases already recorded for quite a number of events, we can assure you of a stress-less event mangement platform.
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Schedule Demo
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>                    
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Portfolio;