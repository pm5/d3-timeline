
D3.js Timeline Layout
=====================

Usage
-----

```
d3.layout.timeline = require('d3-timeline')

var events = [
  { 'Start Date': '2013/12/15', 'Text': '' },
  { 'Start Date': '2014/01/03', 'Text': '' },
  { 'Start Date': '2014/02/01', 'Text': '' },
  { 'Start Date': '2014/02/27', 'Text': '' },
]

var timeScale = d3.time.scale().domain([new Date('2013/12/01'), new Date('2014/06/01')])
var timeAxis = d3.axis.scale(timeScale)
var timeline = d3.layout.timeline()
  .scale(timeScale)
  .datetime(function (d) { return d['Start Date'] })

var nodes = timeline.nodes(events)
```
