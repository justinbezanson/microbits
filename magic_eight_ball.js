input.onGesture(Gesture.Shake, function () {
    let random = Math.floor((Math.random() * 11) + 1);

    switch(random) {
        case 1:
            basic.showString('One');
            break;
        case 2:
            basic.showString('Two');
            break;
        case 3:
            basic.showString('Three');
            break;
        case 4:
            basic.showString('Four');
            break;
        case 5:
            basic.showString('Five');
            break;
        case 6:
            basic.showString('Six');
            break;
        case 7:
            basic.showString('Seven');
            break;
        case 8:
            basic.showString('Eight');
            break;
        case 9:
            basic.showString('Nine');
            break;
        case 10:
            basic.showString('Ten');
            break;
        case 11:
            basic.showString('Eleven');
            break;
    }
});
