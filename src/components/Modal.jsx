import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/50">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="translate duration-300 h-full translate-y-0 opacity-100">
          <div className="h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center p-6 rounded-t justify-between relative border-b-[1px]">
              <button
                onClick={onClose}
                className="p-1 border-0 hover:opacity-70 transition absolute right-9"
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-bold">Inquiry Form</div>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Phone (Optional)"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end p-6">
              <button
                onClick={onClose}
                className="bg-red-600 px-4 py-2 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
