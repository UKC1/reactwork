function ArrowFun() {
    const func1 = function(a, b) {
        return a + b;
    }
    console.log(`fun1 :  ${func1(3,4)}`);

    const func2 = (a,b) => {
        return a+b;
    }

    console.log(`func2 : ${func2(3,4)}`);

    const func3 = (a,b) => {return a+b} // 한줄로 할 때 return 생략가능
    // const func4 = (a,b) => {a+b} // return이 생략시 괄호도 빼도됨
    const func5 = (a,b) => a+b
    console.log(`func5 : ${func5(3,4)}`);
    
    const func6 = function(num) {
        return function(value) {
            return num + value;
        }
    }

    let func6Num = func6(6);
    let result = func6Num(7);
    console.log(`func6Num : ${func6Num}`);
    console.log(`result : ${result}`);

    let result2 = func6(6)(7);
    console.log(`result2 : ${result2}`);   

    const func7 = num => value => num + value;
    console.log(`func7 : ${func7(6)(7)}`);
}


export default  ArrowFun;