import { FaBox, FaRupeeSign, FaEdit } from "react-icons/fa";

const DeliverySection = () => {
  const features = [
    {
      icon: <FaBox className="w-8 h-8 mb-4 text-gray-700" />,
      title: "Free delivery",
      description: "And free returns. See checkout for delivery dates.",
    },
    {
      icon: <FaRupeeSign className="w-8 h-8 mb-4 text-gray-700" />,
      title: "Pay monthly at 0% APR",
      description: "Choose to check out with Apple Card Monthly Installments.",
    },
    {
      icon: <FaEdit className="w-8 h-8 mb-4 text-gray-700" />,
      title: "Personalize it",
      description: "Engrave your device with your name or a personal note.",
    },
  ];

  return (
    <div className="bg-blue-100 py-8 mt-8 md:mb-8 mx-3 sm:mx-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-2 sm:p-4 sm:w-1/3"
            >
              {feature.icon}
              <h3 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="hidden sm:block text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
