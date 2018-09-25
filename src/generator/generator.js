function generate(amount) {
  console.info("Running generator")
  let nodes = []

  for (let i=0; i<amount; i++) {
    nodes.push(
      {
        pos: [ 0, 0 ],
        doors: [
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ],
          [ Math.round(Math.random()), Math.round(Math.random()) ]
        ]
      }
    )
  }

  return nodes
}

export { generate }
