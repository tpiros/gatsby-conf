import React from "react"

function ColourSelect({ changeColour, getColourName }) {
  const colours = [
    {
      name: "yellow",
      hex: "ffff00",
    },
    {
      name: "teal",
      hex: "008080",
    },
    {
      name: "indigo",
      hex: "4b0082",
    },
    {
      name: "blue",
      hex: "0000ff",
    },
    {
      name: "red",
      hex: "ff0000",
    },
    {
      name: "original",
      hex: "d79025",
    },
  ]
  function applyColour(e, colour) {
    e.preventDefault()
    changeColour(`e_replace_color:${colour}:10:d79025`)
  }

  function getColour(e, colour) {
    e.preventDefault()
    return getColourName(colour.name)
  }
  return (
    <>
      <p>Product available in other colours:</p>
      <ul>
        {colours.map(colour => {
          return (
            <li
              role="presentation"
              key={colour.hex}
              value={colour.hex}
              onClick={e => {
                applyColour(e, colour.hex)
                getColour(e, colour)
              }}
              onKeyDown={e => {
                applyColour(e, colour.hex)
                getColour(e, colour)
              }}
            >
              <span
                className="cursor-pointer inline-block px-6 py-2 rounded-full m-1 text-black-800"
                style={{ backgroundColor: "#" + colour.hex }}
              >
                &nbsp;
              </span>{" "}
              {colour.name}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ColourSelect
