import React from "react"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          copyrightDate
        }
      }
    }
  `)
  return (
    <div className="min-h-screen flex flex-col">
      <Header metaData={data.site.siteMetadata} />
      <main className="flex-grow mx-auto w-auto md:px-8 p-8">{children}</main>
      <Footer metaData={data.site.siteMetadata} />
    </div>
  )
}

export default Layout
