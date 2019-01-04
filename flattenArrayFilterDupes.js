const filterArrayDupes=a=>a.filter((e,i,a)=>undefined!==e&&i===a.indexOf(e));
const flattenArrayFilterDupes=(a,b=Number.MAX_VALUE)=>filteredArrayDupes(a.flat(b));


/*


const randomArray=(M=>{
	const r=M.random,
	f=(a=[])=>{const n=r()*10|0;return n<8?(a[n]=n,f(a)):a},
	g=f.nested=(i=1,a=[])=>{let m=a;if(i!==0){const x=f();m=g(--i,[x,m.concat(x[0]) ].concat(m[0]))};return m};
	return f
})(Math);
//console.dir(randomArray())
const testArray=randomArray.nested(4);
//console.dir(testArray);

console.log('testArray%O\ntestArray.flat(6)%O\nflattenArrayFilterDupes(testArray)%O',testArray,testArray.flat(6),flattenArrayFilterDupes(testArray));



*/
