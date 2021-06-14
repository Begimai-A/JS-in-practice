let add = document.querySelector('#increment'),
    remove = document.querySelector('#decrement'),
    int = document.getElementById('number'),
    integer = 0;

add.addEventListener('click', function () {
    integer += 1;
    int.innerHTML = integer;
});

remove.addEventListener('click', function () {

    integer -= 1;
    int.innerHTML = integer;

});