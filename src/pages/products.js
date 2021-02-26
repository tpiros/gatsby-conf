import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const ProductsPage = ({ data }) => {
  const products = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className="product-list">
        {products.map(({ node }) => {
          return (
            <Link
              key={node.fields.slug}
              to={node.fields.slug}
              className="block rounded-lg shadow hover:shadow-2xl"
            >
              <div className="relative pb-full">
                <img
                  src={node.frontmatter.productImage.fixed.src}
                  alt="Product"
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <div className="font-bold text-2xl">
                  {node.frontmatter.name}
                </div>
                <div className="font-semibold text-l">
                  £{node.frontmatter.price}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
export default ProductsPage

export const pageQuery = graphql`
  query products {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            name
            price
            productImage {
              fixed(
                transformations: "f_auto,q_auto,w_300,h_210,c_fill,g_auto"
              ) {
                src
              }
            }
          }
        }
      }
    }
  }
`
