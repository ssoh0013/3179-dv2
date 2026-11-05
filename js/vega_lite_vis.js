var opt = {
  "renderer": "svg",
  "actions": false,
  "patch": function (vgSpec) {
    delete vgSpec.title;
    return vgSpec;
  },
  "config": {
    "background": "transparent",
    "title": {
      "anchor": "middle",
      "orient": "top",
      "frame": "group",
      "offset": 16,
      "font": "Plus Jakarta Sans",
      "fontSize": 18,
      "fontWeight": 700,
      "color": "#000000",
      "subtitleFont": "Plus Jakarta Sans",
      "subtitleFontSize": 14,
      "subtitleColor": "#666666",
      "subtitlePadding": 6
    }
  }
};

/* ===== 00. AUSTRALIA AT A GLANCE ===== */
var vg_1 = "charts/aus_public_transport_choropleth.json";
vegaEmbed("#choropleth_map", vg_1, opt).then(function(result) {
}).catch(console.error);

var vg_2 = "charts/aus_travel_count_flow_map.json";
vegaEmbed("#flow_map", vg_2, opt).then(function(result) {
}).catch(console.error);

/* ===== 01. A DAY ON THE NETWORK ===== */
var vg_3 = "charts/syd_proportional_symbol_map.json";
vegaEmbed("#symbol_map", vg_3, opt).then(function(result) {
}).catch(console.error);

var vg_4 = "charts/mel_school_butterfly_chart.json";
vegaEmbed("#butterfly_chart", vg_4, opt).then(function(result) {
}).catch(console.error);

/* ===== 02. THE YEAR THE NETWORK STOPPED ===== */
var vg_5 = "charts/syd_dot_map.json";
vegaEmbed("#dot_map", vg_5, opt).then(function(result) {
}).catch(console.error);

var vg_6 = "charts/mel_trip_count_connected_dot_plot.json";
vegaEmbed("#dot_plot", vg_6, opt).then(function(result) {
}).catch(console.error);

/* ===== 03. WHO CAME BACK, AND HOW ===== */
var vg_7 = "charts/aus_recovery_bump_chart.json";
vegaEmbed("#bump_chart", vg_7, opt).then(function(result) {
}).catch(console.error);

var vg_8 = "charts/syd_by_rider_waffle_chart.json";
vegaEmbed("#waffle_chart", vg_8, opt).then(function(result) {
}).catch(console.error);

var vg_9 = "charts/syd_by_payment_type_stream_graph.json";
vegaEmbed("#stream_graph", vg_9, opt).then(function(result) {
}).catch(console.error);

/* ===== 04. THE RIDE ITSELF ===== */
var vg_10 = "charts/qld_satisafaction_radar_chart.json";
vegaEmbed("#radar_chart", vg_10, opt).then(function(result) {
}).catch(console.error);

var vg_11 = "charts/qld_ontime_radial_chart.json";
vegaEmbed("#radial_chart", vg_11, opt).then(function(result) {
}).catch(console.error);