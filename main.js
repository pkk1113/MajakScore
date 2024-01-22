const radio_location_hand = document.querySelector('#radio_location_hand');
const radio_location_field = document.querySelector('#radio_location_field');

const radios_combination = document.querySelector('.radios_combination');
const radios_field = document.querySelector('.radios_field');

radio_location_hand.addEventListener('click', e => {
    console.log('hand');
    radios_combination.classList.toggle('display_none');
    radios_field.classList.toggle('display_none');
});
radio_location_field.addEventListener('click', e => {
    console.log('field');
    radios_combination.classList.toggle('display_none');
    radios_field.classList.toggle('display_none');
});