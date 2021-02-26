import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

function Header({ metaData }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <header>
      <Helmet>
        <title>{metaData.title}</title>
      </Helmet>
      <nav className="bg-black text-white">
        <div className="flex flex-wrap container justify-between mx-auto p-2">
          <Link to="/" className="flex items-center no-underline">
            <svg
              height="20"
              viewBox="0 -31 512.00026 512"
              width="20"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0" />
              <path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
              <path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
            </svg>
            <span className="ml-2 font-bold">{metaData.title}</span>
          </Link>
          <button
            className="block md:hidden border border-white flex items-center px-3 py-2"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect fill="none" height="22" width="22" y="-1" x="-1" />
              </g>
              <g>
                <title>Menu</title>
                <line
                  y2="3"
                  x2="18.7426"
                  y1="3"
                  x1="1.54282"
                  strokeWidth="3.5"
                  stroke="white"
                  fill="none"
                />
                <line
                  y2="10"
                  x2="18.7426"
                  y1="10"
                  x1="1.54282"
                  strokeWidth="3.5"
                  stroke="white"
                  fill="none"
                />
                <line
                  y2="17"
                  x2="18.7426"
                  y1="17"
                  x1="1.54282"
                  strokeWidth="3.5"
                  stroke="white"
                  fill="none"
                />
              </g>
            </svg>
          </button>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto ml-auto`}
          >
            <div className="text-lg font-bold mt-3 md:m-0">
              <Link
                to="/"
                activeClassName="text-white underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                Home
              </Link>
              <Link
                to="/products"
                partiallyActive
                activeClassName="text-white underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                Products
              </Link>
              <button className="snipcart-checkout inline-block align-middle">
                <span className="shopping-cart inline-block align-middle">
                  <svg
                    className="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
                    />
                  </svg>
                </span>
                <span className="snipcart-items-count inline-block align-middle p-1"></span>
                <span className="snipcart-total-price inline-block align-middle p-1"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

// Shopping cart icon by <https://www.freepik.com from https://www.flaticon.com/
