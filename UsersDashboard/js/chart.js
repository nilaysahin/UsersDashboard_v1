window.onload = function() {

  var options = {
    exportEnabled: true,
    animationEnabled: true,
    title:{
      text: "User Graph in European Countries and Turkey"
    },
    legend:{
      horizontalAlign: "right",
      verticalAlign: "center"
    },
    data: [{
      type: "pie",
      showInLegend: true,
      toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
      indexLabel: "{name}",
      legendText: "{name} (#percent%)",
      indexLabelPlacement: "inside",
      dataPoints: [
        { y: 185, name: "Europe" },
        { y: 7, name: "Turkey" }
      ]
    }]
  };
  $("#pieChartContainer").CanvasJSChart(options);

  var options1 = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
          text: "User Graph by Country"
      },
      data: [{
          type: "doughnut",
          innerRadius: "40%",
          showInLegend: true,
          legendText: "{label}",
          indexLabel: "{label}: #percent%",
          dataPoints: [
              { y: 8, label: "Australia" },
              { y: 7, label: "Austria" },
              { y: 4, label: "Belgium" },
              { y: 8, label: "Brazil" },
              { y: 3, label: "Canada" },
              { y: 3, label: "Chile" },
              { y: 7, label: "China" },
              { y: 7, label: "Colombia" },
              { y: 6, label: "Costa Rica" },
              { y: 12, label: "France" },
              { y: 4, label: "Germany" },
              { y: 7, label: "India" },
              { y: 3, label: "Indonesia" },
              { y: 9, label: "Ireland" },
              { y: 7, label: "Italy" },
              { y: 8, label: "Mexico" },
              { y: 6, label: "Netherlands" },
              { y: 5, label: "New Zealand" },
              { y: 6, label: "Nigeria" },
              { y: 7, label: "Norway" },
              { y: 3, label: "Pakistan" },
              { y: 7, label: "Peru" },
              { y: 9, label: "Poland" },
              { y: 10, label: "Russian Federation" },
              { y: 7, label: "South Korea" },
              { y: 9, label: "Spain" },
              { y: 3, label: "Sweden" },
              { y: 7, label: "Turkey" },
              { y: 5, label: "United Kingdom" },
              { y: 5, label: "United States" },
              { y: 8, label: "Vietnam" }
                  
          ]
      }]
  };
  $("#donutChartContainer").CanvasJSChart(options1);

  var xValues = ["Australia","Austria", "Belgium", "Brazil", "Canada","Chile","China","Colombia",
  "Costa Rica","France","Germany","India","Indonesia","Ireland","Italy","Mexico","Netherlands","New Zealand",
  "Nigeria","Norway","Pakistan","Peru","Poland","Russian Federation","South Korea","Spain","Sweden","Turkey",
  "United Kingdom","United States","Vietnam"];
  var yValues = [8, 7, 4, 8, 3,3,7,7,6,12,4,7,3,9,7,8,6,5,6,7,3,7,9,10,7,9,37,5,5,8];
  var barColors = ["red", "green","blue","orange","brown","red", "green","blue","orange","brown",
  "red", "green","blue","orange","brown","red", "green","blue","orange","brown","red", "green","blue","orange","brown",
  "red", "green","blue","orange","brown","red"];

  new Chart("barChartContainer", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "User Bar Graph by Country"
      }
    }
  });

}

