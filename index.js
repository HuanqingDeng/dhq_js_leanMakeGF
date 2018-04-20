// 小明表白的故事
// 小明 talk in js
// js 具有强大的表现力
// js 是一个弱类型语义 java静态的强类型语言
// js 变量类型 字符串 数字 对象{}，array,function 
// sympbol
// bool值,false null为空,undefined
// 六大基本类型
var xiaoming ={
    name:'小明',
    age:21,
    hasGf:false,
    job:null,
    city:undefined,
    // 方法 行为
    sendFlower:function(target){
        // 1 买花
        var flower=new Flower('满天星');
        if(typeof target.receiveFlower=='function')
            target.receiveFlower(flower,this.name);
        else 
            console.log('不谈恋爱')
    }
}
// 空对象字面量
var xueba={

}
// 具有详述性，最简单创造的对象
var xiaomei ={
    name:'小梅',
    room:102,
    hometown:'九江',
    receiveFlower:function(flower,name){
        console.log('收到'+name+'的'+flower.type);
    },
    // 监听好心情
    /**
     * 功能： 提供心情监听
     * 参数：fn 是一个类型函数
     * 一段时间后，心情好了，将fn执行
     */
    listenGoodMood:function(fn){
        setTimeout(function() {
            fn();
        }, 5000);
        // typeof fn==='function';
        // fn();
    }
}
// 类大写， 对象小写
var Flower=function(type){
    this.type=type || '玫瑰';
}


var xiaoxue={
    name:'小雪',
    receiveFlower:function(flower,name){
        xiaomei.listenGoodMood(function(){
            xiaomei.receiveFlower(flower,name)
        })
        // if(name=='小明'){
        //     console.log('我们在一起吧');
        // }
        // else{
            // xiaomei.receiveFlower(flower,name)
        // }
        // 实现了同样的收花方法，  接口interface
        // 小雪和小梅是实现了相同的方法，实现了相同的接口
        // 实现了相同的接口，就可以互换对象
    }
}
xiaoming.sendFlower(xiaoxue);