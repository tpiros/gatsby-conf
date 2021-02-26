import React from "react"

function Footer({ metaData }) {
  return (
    <footer className="flex p-2 bg-black text-white text-sm border-t-2 border-red-600 justify-center">
      © {metaData.title}, brought to you by {metaData.author} -{" "}
      {metaData.copyrightDate}
    </footer>
  )
}

export default Footer
