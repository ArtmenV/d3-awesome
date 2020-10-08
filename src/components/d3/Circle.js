import * as React from 'react'
import * as d3 from 'd3'

export const Circle = () => {
  const [data, setData] = React.useState([15, 19, 23, 27, 33])
  const svgRef = React.useRef(null)

  React.useEffect(() => {
    const svg = d3.select(svgRef.current)
    svg.selectAll("circle")
      .data(data)
      .join(
        "circle"
        /** enter, update, exit => is optional parametr */
        // enter => enter.append("circle").attr("class", "new"),
        // update => update.attr("class", "updated"),
        // exit => exit.remove()
      )
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red")
  }, [data])

  return (
    <>
      <svg ref={svgRef} />
      <br />
      <button onClick={() => setData(data.map(data => data + 5))}>update data</button>
      <button onClick={() => setData(data.filter(value => value < 18))}>filter data</button>
    </>
  )
}