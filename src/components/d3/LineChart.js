import * as React from 'react'
import * as d3 from 'd3'

export const LineChart = () => {
  const [data, setData] = React.useState([25, 30, 45, 60, 20, 65, 75])
  const svgRef = React.useRef(null)

  React.useEffect(() => {
    const svg = d3.select(svgRef.current)
    const myLine = d3.line()
      .x((value, index) => index * 50)
      .y(value => 150 - value)
      .curve(d3.curveCardinal)

      svg
        .selectAll("path")
        .data([data])
        .join("path")
        .attr("d", value => myLine(value))
        .attr("fill", "none")
        .attr("stroke", "blue")
  }, [data])

  return (
    <>
      <svg ref={svgRef}>
        {/* <path d="M0, 150 100, 100 150, 120" stroke="blue" fill="red"/> */}
      </svg>
      <br />
      <button onClick={() => setData(data.map(data => data + 5))}>update data</button>
      <button onClick={() => setData(data.filter(value => value < 28))}>filter data</button>
    </>
  )
}