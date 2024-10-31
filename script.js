// 弹出 “Hello from JavaScript!” 的消息
let list = "空";

document.getElementById("test").innerText = `没签到名单: ${list}`;

function find() {
    list = "";
    const jielong = document.getElementById("jielong").value;
    const name = ["王羽佳","杨紫琪","陈恩熙","翁咪雅","周裕捷","陈欣瑶","林泽轩","高子航","叶梓宸","刘智博","颜璐","林瑾瑜","翁奕涵","施筠莹","高亦希","任艺菲","郑梓萱","薛以萱","张博涵","林名扬","林雅萱","薛睿谦","蔡雨淇","黄汉森","翁晨晞","陈羿鸣","念以安","林子涵","陈清思","丁薇颖","林鑫瑜","周峻宇","马兰花","林君潼","林欣予","蔡锦豪","陈磊鑫","周新宸","林洛希","林皓轩","林静怡","吴若希","杨鸿轩","陈靖宇","周诺一","张梦琪","陈启辰","游子涵","李芷妍","陈诺","高信","吴梓涵","施子诚","林嘉禾","林诗涵"];
    let num = 0;
    for(let i = 0; i < name.length; i++){
      if(!jielong.includes(name[i])){
        list = list + name[i] + " ";
        num = num + 1;
        if(num % 5 == 0)
            list += '\n';
      }
    }
    if(list.length == 0)
        list = "空";

    document.getElementById("test").innerText = `没签到名单: ${list}`;
    console.log(document.getElementById("test").value);
}
