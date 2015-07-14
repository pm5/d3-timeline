;(function () {
  d3.layout.timeline = function () {
    var setting = {}

    function timeline (data) {
      return data.map(function (d) {
        return {
          "x": setting.scale(setting.datetime(d)),
          "content": setting.content(d)
        }
      })
    }

    timeline.nodes = timeline

    ;['datetime', 'scale', 'content'].forEach(function (n) {
      setting[n] = null
      timeline[n] = function () {
        if (arguments.length === 0) {
          return setting[n]
        }
        setting[n] = arguments[0]
        return timeline
      }
    })

    setting.datetime = function (d) {
      if (typeof d.datetime === 'string') {
        return new Date(d.datetime)
      } else if (typeof d.datetime === 'object') {
        return d.datetime
      }
      return null
    }

    setting.content = function (d) {
      if (d.content) {
        return d.content
      } else {
        return d
      }
    }

    return timeline
  }
})()
