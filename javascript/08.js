const student = {
    name: '김일',
    age: 21,
    address: '부산 동래구',
    phone: '010-0000-0000',
};

// 비구조 할당
const { name, address} = student;
console.log(name, address);

// REST 문법
const {age, phone, ...rest} = student;
console.log(age, phone, rest);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// spread
const newStudent = {
    ...student,
    gender: '남',
}

console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);



// 얕은 복사
const newNumbers2 = numbers;

// 깊은 복사
let names = [];

function addName(name) {
    // names.push(name);        // 이것도 가능
    names = [...names, name];
}

let obj = {
    data1: "data1",
    data2: "data2",
}

function addProps(props) {
    obj = {
        ...obj,
        ...props
    }
}
addProps({data3: "data3", data4: "data4"});
console.log(obj)