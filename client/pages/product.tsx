import React from "react";
import Header from "../components/header";

export default function Product() {

  const [count, setCount] = React.useState(0);

  function increaseQuantity() {
    setCount(count + 1)
  }

  return (
    <div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Octopus Energy</span>
            <img className="h-8 w-auto" src="octopus-logo.svg" alt="Octopus Energy Logo" />
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <span>{count}
          </span>
          <img className="h-8 w-auto" src="basket.svg" alt="Basekt" />
        </div>
      </nav>
      <div className="flex justify-items-center">
        <div className="w-full max-w-lg rounded-lg shadow">
          <img className="p-8 rounded-3xl" src="philips-plumen.jpg" alt="Pilips Plumen" />
          <div className="px-8 pb-5">
            <h3 className="text-3xl tracking-tight text-white-900">Energy saving light bulb</h3>
            <span className="text-gray-400">25W // Packet of 4</span>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xl text-white-900">£12.99</span>
              <div className="h-10 w-24">
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button className="bg-plum text-gray-600 hover:text-gray-700 hover:bg-plum h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <div className="outline-none focus:outline-none text-center w-full bg-transparent font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" title="Current quantity">{count}</div>
                  <button className="bg-sohoLights text-gray-600 hover:text-gray-700 hover:bg-plum h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex pt-4 lg:pt-6">
              <button onClick={increaseQuantity} className="w-full bg-sohoLights text-white hover:bg-plum font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
