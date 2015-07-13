
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
  .size(["2013/12/01", "2014/06/01"])

var nodes = timeline.nodes(events, function (d) { return d.datetime })
var links = timeline.links(nodes)
```

