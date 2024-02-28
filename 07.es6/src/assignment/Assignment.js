function Assign() {
    /*
    (구조) 분해 할당
    배열 분해 할당
    객체 분해 할당
    */

    // 배열 분해 할당
    // ES5에서 
    const points = [20, 30, 40];
    const x1 = points[0];
    const y1 = points[1];
    const z1 = points[2];

    // ES6에서
    const [x2, y2, z2] = points;
    console.log(`x2 = ${x2}, y2 = ${y2}, z2 = ${z2}`);


    // 두번째 값 무시
    const [x3, ,z3] = points;
    console.log(`x3 = ${x3}, z3 = ${z3}`);

    // 첫번째 값만 넣기(컴마가 없어도 되고 여러개 넣어도 된다)
    const [x4,,,,,,,,] = points; // [x4]
    console.log(`x4 = ${x4}`);

    // 배열보다 더 많은 변수가 있을 때 undefined
    const [x5, , , n5] = points;
    console.log(`x5 = ${x5}, n5 = ${n5}`);

    /* 객체 분해 할당 */
    const car = {
        model : 'k7',
        color : 'black',
        year : 2024
    }

    // es5에서 분해할당
    const model2 = car.model;
    const color2 = car.color;
    const year2 = car.year;

    // ES6 분해할당
    const {model, color, year} = car;
    console.log(`model = ${model}, color = ${color}, year = ${year}`);
    
    const {model: m3, year : y3, color : c3} = car;
    console.log(`model = ${m3}, color = ${c3}, year = ${y3}`);
    
    // {model, year} = car;
    const func1 = ({model, year}) => {
        console.log(`func1 : model = ${model}, year = ${year}`);
    }
    func1(car);


}

export default Assign;