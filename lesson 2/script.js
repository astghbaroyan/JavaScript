// number
let x = 4;
let y = -5;
let z = 4.5;
let a = 0;
let b = Infinity;
let c = -Infinity;
let d = NaN;
console.log("4:",typeof x);
console.log("-5:",typeof y);
console.log("4.5:",typeof z);
console.log("Երկու number-ների գումար՝",typeof (x+y));
console.log("Երկու number-ների բազմապատկում՝",typeof (y*z));
console.log("Երկու number-ների բաժանում՝",typeof (x/y));
console.log("Բաժանում 0-ի վրա՝",typeof (x/a));
console.log("+Անսահմանություն`",typeof b)
console.log("-Անսահմանություն`",typeof c)
console.log("NaN:",typeof NaN);
console.log("Բաժանում NaN-ի վրա՝",typeof (x/d));
console.log("Բազմապատկում NaN-ով`",typeof (x*d));
console.log("+Անսահմանության և NaN-ի գումար`",typeof(b+d));

//string
let e = "Astghik";
console.log("Astghik:",typeof e);
let f = 'Baroyan';
console.log('Baroyan:',typeof f);
let g = `Armenia`;
console.log(`Armenia:`,typeof g);
console.log("number-ի և string-ի գումար`",typeof(x+e));

//boolean
let h = true;
console.log('true:',typeof h);
let i = false;
console.log('false:',typeof i);
console.log("boolean-ի և number-ի գումար՝",typeof (x+i));
console.log("boolean-ի և string-ի բազմապատկում՝",typeof (e*h));

//undifined
let j = undefined;
console.log('undefined:',typeof j);
console.log("undefined-ի և number-ի գումար՝",typeof (x+j));
console.log("boolean-ի և undefined-ի բազմապատկում՝",typeof (h+j));
console.log("undefined-ի և string-ի բաժանում՝",typeof (e/j));
let k;
console.log("k:",typeof k);

//null
console.log("null",typeof null); 

//symbol,object,arrey
console.log("symbol:",typeof Symbol);
console.log("object:",typeof Object);
console.log("arrey:",typeof Array);

//Անդրադարձ կատարել
console.log("null === undefined:",null === undefined);//false
console.log("null  == undefined:",null  == undefined);//true








