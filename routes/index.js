var express = require('express');
var router = express.Router();

/* GET home page. */
// 主页-首页
router.get('/', function(req, res, next) {
  var whichNum = parseInt(req.query.number) || 1;
  var whichNumEnglish = "";
  var imgNums = 77;
  var cellHeightSize = [280,380,470];
  var currentCellName;
  var wantWords;
  switch (whichNum) {
      case 1:
          whichNumEnglish = "Women";
          imgNums = 77;
          currentCellName = ["首页","单个人","女性"];
          wantWords = ["一分钟学会拍照", "200个自拍不重样","女性美的展示，需要的不仅仅是徕卡和宾得，镜头前一个特别的姿势，展现别样生辉的你。"];
      break;
      case 2:
          whichNumEnglish = "Glamour";
          imgNums = 56;
          currentCellName = ["首页","单个人","少妇"];
          wantWords = ["你比别人都妩媚", "少妇也需要合适的造型","少妇本来就是傲娇的主人，集宠爱和妩媚与一身。怎样才能体现自己的与众不同，你需要的仅仅是个姿势。"];
      break;
      case 3:
          whichNumEnglish = "Men";
          imgNums = 46;
          currentCellName = ["首页","单个人","男性"];
          wantWords = ["钢铁侠也需要姿势", "男人有姿势才更强壮","男人对不对，就不说了对不对，是个男的还来看怎么拍照，几百年上个镜就不错了。"];
      break;
      case 4:
          whichNumEnglish = "Children";
          imgNums = 30;
          currentCellName = ["首页","单个人","小孩"];
          wantWords = ["小孩的照片必须可爱", "天然萌自然呆","小孩长大了，看到没有童年的照片，会以为自己不是亲生的..."];
      break;
      case 5:
          whichNumEnglish = "Weddings";
          imgNums = 26;
          currentCellName = ["首页","多个人","婚礼"];
          wantWords = ["真是恭喜你", "早生贵子","都结婚了还不会拍照片的姿势，你好意思和新郎一起上台？"];
      break;
      case 6:
          whichNumEnglish = "Couples";
          imgNums = 47;
          currentCellName = ["首页","多个人","夫妻"];
          wantWords = ["结婚结的真早", "顺便把前面小孩子拍照也看一下","都夫妻了，还不会拍照！等着对方和你离婚么？"];
      break;
      case 7:
          whichNumEnglish = "Groups";
          imgNums = 30;
          cellHeightSize = [240,300,400];
          currentCellName = ["首页","多个人","小组"];
          wantWords = ["人多力量大", "别人看的都是你的姿势","真不知道写什么了，文档编辑真痛苦。"];
      break;
      case 8:
          whichNumEnglish = "TipsAndTricks";
          imgNums = 53;
          cellHeightSize = [200,280,300];
          currentCellName = ["首页","技巧片"];
          wantWords = ["这个是技巧片", "拍照一半靠设备一半靠技巧","有好技巧，自拍200个不重样！"];
      break;
  }

  console.log(imgNums + "   " + typeof whichNum);
  res.render('index', {whichNum:whichNum, imgNums:imgNums, whichNumEnglish: whichNumEnglish, cellHeightSize:cellHeightSize, currentCellName: currentCellName, wantWords: wantWords});
});

module.exports = router;
