const chipsData=
[
    {
      Company: "Samsung Electronics",
      Revenue : "65.6"
    },
    {
      Company: "Intel",
      Revenue : "58.4"
    },
    {
      Company: "SK Hynix",
      Revenue : "36.2"
    },
    {
      Company: "Qualcomm",
      Revenue : "34.8"
    },
    {
      Company: "Micron Technology",
      Revenue : "27.6"
    },
    {
      Company: "Broadcom",
      Revenue : "23.8"
    },
    {
      Company: "Texas Instruments",
      Revenue : "18.8"
    }
  ]


  const margin = {top: 20, right: 30, bottom: 40, left: 100},
    width = 900 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// boilerplate for setting up the SVG
let svg = d3.select("#dataviz")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

            const xScale = d3.scaleLinear()
            .domain([0, 75]) //input data
            .range([0, width]) // visual display

            const yScale = d3.scaleBand()
            .domain(chipsData.map((d)=> d.Company))
            .range([height, 0])

            const colorScale = d3.scaleLinear()
            .domain([2000, 1500])
            .range()
        
        // use d3 to draw axes based on the scales
        svg.append("g").call(d3.axisLeft(yScale))
        
        svg.append("g")
            .attr("transform", 'translate(0 , ${height})')
            .call(d3.axisBottom(xScale))
        
        svg.selectAll("rect")
            .data(chipsData)
            .join("rect")
            .attr("x", xScale(0))
            .attr("y", (d) => {return yScale(d.Company)})
            .attr("width", (d) =>{return xScale(d.Revenue)})
            .attr("height", yScale.bandwidth()-2)
            .attr()
        //.attr("r", (datapoint)=> {return circle

