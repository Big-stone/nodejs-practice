

/**
 * 定义函数默认参数
 * 参数设置默认格式为arg = val
 * 如有默认参数时可以不传实参
 * 如果传递了实参,则以实参为准
 */

 function fn (a = 10, b = 1 ) {

 	console.log( a, b );
 }

fn();//10 1

 // fn( 20 ); //20 1