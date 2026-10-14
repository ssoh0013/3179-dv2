var opt = {
  "renderer": "svg",
  "config": {
    "background": "transparent",
    "title": {
      "anchor": "middle",
      "orient": "top",
      "frame": "group",
      "offset": 16,
      "font": "Special Gothic Expanded One",
      "fontSize": 18,
      "fontWeight": 700,
      "color": "#000000",
      "subtitleFont": "Special Gothic Expanded One",
      "subtitleFontSize": 10,
      "subtitleColor": "#666666",
      "subtitlePadding": 6
    }
  }
};
var vg_1 = "charts/syd_changing_riders_bump_chart.json";
vegaEmbed("#bump_chart", vg_1, opt).then(function(result) {
}).catch(console.error);

var vg_2 = "charts/syd_by_rider_waffle_chart.json";
vegaEmbed("#waffle_chart", vg_2, opt).then(function(result) {
}).catch(console.error);

var vg_3 = "charts/melb_daytype_butterfly_chart.json";
vegaEmbed("#butterfly_chart", vg_3, opt).then(function(result) {
}).catch(console.error);

var vg_4 = "charts/qld_satisafaction_radar_chart.json";
vegaEmbed("#radar_chart", vg_4, opt).then(function(result) {
}).catch(console.error);

var vg_5 = "charts/qld_ontime_radial_chart.json";
vegaEmbed("#radial_chart", vg_5, opt).then(function(result) {
}).catch(console.error);