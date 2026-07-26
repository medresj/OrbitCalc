
const select = document.getElementById('optionSelect');
const customWrapper = document.getElementById('customFieldWrapper');
const customNumber = document.getElementById('customNumber');
 
select.addEventListener('change', () => {
    if (select.value === 'custom') {
        customWrapper.classList.add('visible');
        customNumber.focus();
    } else {
        customWrapper.classList.remove('visible');
        customNumber.value = '';
    }
});
