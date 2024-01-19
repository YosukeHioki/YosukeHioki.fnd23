'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// テスト用関数

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("OK! Test PASSED.");
    } else {
        console.error("Test FAILED. Try again!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}


//1.計算式をディスプレイに表示する

const result = document.getElementById("result");
result.value = "";


//2.[AC]ボタンの処理
function clearResult() {
    return result.value = "";
}

// test(clearResult(), "");//OK


//3.[0～9,÷,×,+,-]ボタンの処理
function insert(any) {
    return result.value += any;
}

// test(insert("3"), "3");//OK
// test(insert("*"), "3*");//OK
// test(insert("8"), "3*8");//OK


//4.[=]ボタンの処理
function calculateResult() {
    if (result.value === "") {//ディスプレイが空の時"undefined"が出るバグ修正
        return result.value = "";
    } else {
        return result.value = eval(result.value);
    }
}
// test(calculateResult(), 24);//OK,ここで初めて計算され、結果が数値型になる


//5.[C]ボタンの処理
function clearOneValue() {
    if (result !== "") {
        return result.value = result.value.slice(0, -1);
    }
}

// test(clearOneValue(), "2");OK


//6.ワニ放出
const areaOfGator = document.getElementById("area-of-gator")
function releaseAGator() {
    if (result.value.indexOf("02") !== -1) {
        window.alert("ワニの登場です！");
        areaOfGator.style.fontSize = "40px";
        areaOfGator.innerText = "🐊";
    }
}

const equal = document.getElementById("release-gator");
equal.addEventListener("click", releaseAGator);


//7.ワニ捕獲
function captureAGator() {
    if (areaOfGator.innerText === "🐊") {
        window.alert("ワニが帰っていきます！")
        areaOfGator.style.fontSize = "15px";
        areaOfGator.innerText = "待機中..."
    }
}


capture.addEventListener("click", captureAGator);


//■分かったこと
//・計算機の基本的な機能であれば関数自体は4つでできる
//・関数にreturn(返り値)がなくても計算機としては機能する
//・[C]ボタンでの一文字削除は.slice()以外にもやり方がある
