// CHARTIST.JS / 円グラフ
var pieData = {
  labels: ['Webデザイナー', 'Webデベロッパー', 'サーバエンジニア', '営業職'],
  series: [14, 9, 8, 6]
};

var pieOptions = {
  width: '100%',
  height: '440px'
};

new Chartist.Pie('.pieChart', pieData, pieOptions);




// CHARTIST.JS / 棒グラフ
var barData = {
  labels: ['2018年', '2019年', '2020年'],
  series: [[10, 16, 29]]
};

var barOptions = {
  //Y軸の意味
  axisY: {
    //グラフを描画するボックスの左端からデータ項目を表示するスペース
    offset: 50,
    //グラフ罫線の間隔(px)
    scaleMinSpace: 50,
    //メモリの項目（今回は人）
    labelInterpolationFnc: function(value) {
      return value + '人'
    }
  },
  width: '100%',
  height: '400px'
};

new Chartist.Bar('.barChart', barData, barOptions);
