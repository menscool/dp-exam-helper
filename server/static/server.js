const form = document.forms[0];
const radioButtons = form.querySelectorAll('input[type="radio"');

radioButtons.forEach((el) => {
    el.addEventListener('change', () => {
        const filename = el.getAttribute('value');
        form.submit();
    })
})

console.clear();