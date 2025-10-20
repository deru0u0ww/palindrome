'use strict';
const $ =(sel)=> document.querySelector(sel);
const $input = $('.form__input');
const $count = $('.form__count');
const $btn = $('.form__btn');

const MAX_LEN = 20;

function updataCount(v) {
    $count.textContent = `${v}/${MAX_LEN}`;
    $count.style.color = v > 20 ? '#FE0D0D' : '#aaa';
}
$input.addEventListener('input',()=>{
    let len = $input.value.length;
    updataCount(len);
});