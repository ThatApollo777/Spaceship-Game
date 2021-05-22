let spaceship;
const keyCodes = {
    'left' : 37,
    'up'   : 38,
    'right': 39,
    'down' : 40
}

$(document).ready(function () {
    spaceship = $('#spaceship');
    spaceship.css({
        'position': 'absolute',
        'top'     : 100,
        'left'    : 100
    });

    $(document).on('keydown', function (k) {
        if (k.keyCode == keyCodes.left) {
            spaceship.css({
                'left' : spaceship.position().left - 5
            });
        }
        if (k.keyCode == keyCodes.up) {
            spaceship.css({
                'top'  : spaceship.position().top  - 5
            });
        }
        if (k.keyCode == keyCodes.right) {
            spaceship.css({
                'left' : spaceship.position().left + 5
            });
        }
        if (k.keyCode == keyCodes.down) {
            spaceship.css({
                'top'  : spaceship.position().top  + 5
            });
        }
    });s
});