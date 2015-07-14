
D3.js Timeline Layout
=====================

Usage
-----

```
d3.layout.timeline = require('d3-timeline')

var events = [
  { datetime: "2013/12/15", story: "" },
  { datetime: "2014/01/03", story: "" },
  { datetime: "2014/02/01", story: "" },
  { datetime: "2014/02/27", story: "" },
]

var timeline = d3.layout.timeline()
  .scale(d3.time.scale().domain(["2013/12/01", "2014/06/01"]))
  .size([500, 100])
var nodes = timeline.nodes(events, function (d) { return d.datetime })
var timeAxis = d3.axis.scale(timeline.scale())
```

