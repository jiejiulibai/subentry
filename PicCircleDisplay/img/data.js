var data = [];
var dataStr = '1、超能陆战队<br>\
<br>\
·我长成这样是为了让人看起来更想拥抱。<br>\
·如果你生气了，就欺负我好了，反正我那么喜欢你。<br>\
·相信我，就算有一天，我们不小心走散，我也会回来找你的。<br>\
·为了你，我什么都会去做。只是有时候我笨手笨脚的，能不能不要怪我呢。<br>\
·我们有时并不想成为英雄，只是生活有时候超出我们的想象。<br>\
<br>\
<br>\
2、栀子花开<br>\
<br>\
·青春就是再近的距离，也要跑着去。<br>\
·青春是明知道错了，偏要任性到底！<br>\
·青春是纵然梦想很远，踮起脚尖就能更近一些。<br>\
·青春是偏要选择在愚人节告白，就算被拒绝也能笑着说愚人节快乐。<br>\
·青春是有话就不好好说，偏要悄悄说。<br>\
·青春就是爱情友情梦想和热血。因为青春，所以来得及。<br>\
<br>\
<br>\
3、小时代4<br>\
<br>\
·时间一点一滴地过去，流逝告别。我们慢慢地走向一个被上帝作记号的地点。<br>\
·旋转着的，五彩缤纷的物质世界。等价交换的，最残酷的也最公平的寒冷人间。<br>\
·我用十年青春，赴你最后之约!<br>\
·有些人 交错后就转身， 只留下背影从此不再过问。<br>\
·被冰封的心，无止境的休眠，我在等待为我破冰的人。<br>\
·此刻的别离，我们沉默不语。不经世的我们，约好下一个路口等。<br>\
<br>\
<br>\
4、中国合伙人<br>\
<br>\
·不要跟丈母娘打麻将，不要跟想法比你多的女人上床，不要跟最好的朋友合伙开公司。<br>\
·梦想是什么，梦想就是一种让你感到坚持就是幸福的东西。<br>\
·当才华撑不起野心的时候，只能安静读书。<br>\
·最大的骗子其实是我们自己，因为我们总是想改变别人，而拒绝改变自己。<br>\
·你知道吗 听一个人说话，不要听他说了什么，而是要听他没说什么。<br>\
<br>\
<br>\
5、分手大师<br>\
<br>\
·独行太久心会变坚硬，只有爱会让它松动。<br>\
·痛苦的将就不如痛快的分手。<br>\
·在通往成功的道路上，坚持不等于缺心眼。<br>\
·牵手的甜蜜是短暂的,分手的痛苦是永恒的,这就是人类的宿命。<br>\
·上帝很忙，他只教会人们如何谈恋爱，却忘记了教人们如何分手！<br>\
·人生的道路就如同内裤，每一条都是自己选的。<br>\
<br>\
<br>\
6、后会无期<br>\
<br>\
·我们听过无数的道理，却仍旧过不好这一生。<br>\
·喜欢就会放肆，但爱就是克制。<br>\
·每一次告别，最好用力一点。多说一句，可能是最后一句。多看一眼，可能是最后一眼。<br>\
·有时候，你想证明给一万个人看，到后来，你发现只得到了一个明白的人，那就够了。<br>\
·带不走的留不下，留不下的莫牵挂。<br>\
·她们都是你漫漫长路上，只配错过的好姑娘。<br>\
<br>\
<br>\
7、何以笙箫默<br>\
<br>\
·如果世界上曾经有那个人出现过，其他人都会变成将就。而我不愿意将就。<br>\
·你跑的那么慢，我当初是怎么让你追上的？<br>\
·其实等待并不可怕，可怕的是不知道何时是个尽头。<br>\
·向来缘浅，奈何情深;已然情深，何惧缘浅。<br>\
·世界上最痛苦的事，不是无能为力，而是当一切都触手可及，我却不愿伸出手去。<br>\
<br>\
<br>\
8、匆匆那年<br>\
<br>\
·那时候，我们以为喜欢就是永远。后来才发现，我们只有曾经，没有永远。<br>\
·我喜欢你 是我的 不是我的 我都喜欢<br>\
·在开始时毫无所谓，在结束时痛彻心扉。<br>\
·你可以打我，你可以骂我，但你千万不要说我没有努力过。<br>\
·我想从这里开始重新来过，和之前不一样的重新来过。<br>\
·既然已匆匆，不如早怀念。<br>\
';
var d=dataStr.split('<br><br><br>');
for (var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    data.push({
        img:c[0].replace('、',' ')+'.jpg',
        caption:c[0].split('、')[1],
        desc:c[1]
    });
    // console.log(data[i].caption);
}
// <br>\
// <br>\
// 16、神偷奶爸<br>\
// <br>\
// ·你装过头了 其实内在是一颗破碎的心。<br>\
// ·蹩脚的谎话 我甚至都不喜欢她<br>\
// ·Are you reallyabcgonna save the world? 你真的要拯救世界吗? Yes. Yes, I am. 是的是的 没错<br>\
// ·You just officially hadabcthe worst date ever. 你圆满完成了史上最糟糕约会<br>\
// <br>\
// <br>\
// 17、驯龙高手<br>\
// <br>\
// ·我知道这希望渺茫，但是你不能总是保护他。<br>\
// ·哦，上帝不喜欢我。有些人会弄丢刀子，杯子。不，不应该是我啊！我弄丢了一条龙！<br>\
// ·我父亲让我用头去撞石头，我照做了。我觉得这很疯狂，但是我没问他为什么。<br>\
// ·不，你想错了，他在乎的不是你的外表，他看重的是你的灵魂。<br>\
// <br>\
// <br>\
// 18、奔跑吧！兄弟<br>\
// <br>\
// ·邓超：We are 伐木累<br>\
// ·王宝强：What are you弄啥哩？<br>\
// ·Angelababy：Boom ShakaLaka<br>\
// ·王宝强：郑恺你怎么又死在女人手里了？<br>\
// ·陈赫：你是猪吗？<br>\
// ·李晨：我们来打一架吧！<br>\
// <br>\
// <br>\
// 19、老男孩猛龙过江<br>\
// <br>\
// ·成长似乎就是不断发现，那些让自己魂牵梦绕的东西，原来都是一场场幻想，然后一次次从梦里醒过来，而现实从来连一点商量的余地都没有。<br>\
// ·如果你的梦想还没有实现,说明你的渴望还不够强烈!<br>\
// ·丢掉什么不重要，关键是找回来什么。<br>\
// ·生活就像镜子 你笑它就笑 你哭它就哭。<br>\
// ·分手还能做朋友,你问我爱你有多深。<br>\
// <br>\
// <br>\
// 20、当幸福来敲门<br>\
// <br>\
// ·当人们做不到一些事情的时候，他们就会对你说你也同样不能。<br>\
// ·如果你有梦想的话，就要去捍卫它。<br>\
// ·当你最认为困难的时候，其实就是你最接近成功的时候。<br>\
// ·以后连朋友都不做了？ ---没法儿做，太相爱的人怎么做朋友<br>\
// ·机会总是留给有准备的人，但那往往是努力的人剩下来的。<br>\