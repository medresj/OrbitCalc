
const select = document.getElementById('optionSelect');
const customWrapper1 = document.getElementById('customFieldWrapper1');
const customWrapper2 = document.getElementById('customFieldWrapper2');
const customNumber1 = document.getElementById('customNumber1');
const customNumber2 = document.getElementById('customNumber2');

select.addEventListener('change', () => {
    if (select.value === 'custom') {
        customWrapper1.classList.add('visible');
        customWrapper2.classList.add('visible');
        customNumber1.focus();
    } else {
        customWrapper1.classList.remove('visible');
        customWrapper2.classList.remove('visible');
        customNumber1.value = '';
        customNumber2.value = '';
    }
});
