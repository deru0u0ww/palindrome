'use strict';
const $ =(sel)=> document.querySelector(sel);
const MAX_LEN = 20;
const history = [];
const HISTORY_MAX = 5;
const $input = $('.form__input');
const $count = $('.form__count');
const $btn = $('.form__btn');
const $inputed = $('.result__input');
const $reversed = $('.result__reversed');
const $result = $('.result__judge');
const $alert = $('.form__alert');
const $ol = $('.history__list');


function updataCount(v) {
    let isOver = v > MAX_LEN;
    $count.textContent = `${v}/${MAX_LEN}`;
    $count.style.color = isOver ? '#FE0D0D' : '#aaa';
    $alert.classList.remove('is-show');
    $inputed.textContent = '';
    $reversed.textContent = '';
    $result.textContent = '-';
    $result.style.color = '#aaa';
}
function addHistory(inputed,palindrome,result) {
    const text = `あなたの入力：${inputed} 反転：${palindrome} 結果：${result}`;
    history.push(text);
    if(history.length > 5) {
        history.shift();
    }
    renderHistory();
}
function renderHistory() {
    $ol.innerHTML = '';
    history.forEach((item,i) => {
        const li = document.createElement('li');
        li.textContent = `${i+1}.${item}`;
        $ol.appendChild(li);
    });
}
function judge(v) {
    const len = v.length;
    const inputed = v;
    const palindrome = v.split('').reverse().join('');
    if(!inputed || len > MAX_LEN) {
        $alert.classList.add('is-show');
        return;
    }
    let result = '';
    $inputed.textContent = inputed;
    $reversed.textContent = palindrome;
    if(inputed === palindrome) {
        result = '回文です';
        $result.style.color = 'green';
    } else {
        result = '回文ではありません';
        $result.style.color = 'red';
    }
    $result.textContent = result;
    addHistory(inputed,palindrome,result);
}
$input.addEventListener('input',()=>{
    let len = $input.value.length;
    updataCount(len);

});
$btn.addEventListener('click',()=> {
    judge($input.value);
    $input.value = '';
    $count.textContent = `0/${MAX_LEN}`;
});