/**
 * 비구조할당(구조분해)
 */

const student = {
    name: '김일',
    age: 21,
    address: "부산 동래구",
};

const studentName = student.name;
const studentAge = student.age;
const { studentName2, studentAge2 } = student;
const { name, age } = student;
console.log(studentName);
console.log(studentAge);
console.log(studentName2);      // undefined
console.log(studentAge2);       // undefined
console.log(name);
console.log(age);

function printStudentInfo1({name, age}) {
    console.log(name);
    console.log(age);
}
printStudentInfo1(student);

function printStudentInfo2({name, address}) {
    console.log(name);
    console.log(address);
}
printStudentInfo2(student);

function printStudentInfo3({name, address: addr, age}) {
    console.log(name);
    console.log(addr);
    console.log(age);
}
printStudentInfo3(student);

/** 객체 구조분해할 때 주의할 점 */
// 객체의 속성명이 같으면 이름을 바꿔줘야 함
const s1 = {
    name: "김일",
    age: 21,
}
const s2 = {
    name: "김이",
    age: 22,
}
// const {name, age} = s1;
// const {name, age} = s2;      // 오류 발생

const {name: n1, age: a1} = s1;
const {name: n2, age: a2} = s2;

// 배열 비구조할당
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

const useState = (data) => {
    const dataState = {
        data: data,
        setData: (d) => {
            console.log(d, "데이터 set")
        },
    }
    return [ dataState.data, dataState.setData ];
};

const [userData, setUserData] = useState({username: "test", password: "1234"});
console.log(userData);
setUserData({username: "test2", password: "5678"});