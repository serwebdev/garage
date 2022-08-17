// AirDatepicker========================================================
if (document.querySelector('.input-calendar')) {
  adp = new AirDatepicker('.input-calendar', {
    timepicker: true,
  });
}

if (document.querySelector('.input-calendar2')) {
  adp = new AirDatepicker('.input-calendar2', {
    timepicker: true,
  });
}

// Inputmask=============================================================
let inputsTel = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputsTel);
