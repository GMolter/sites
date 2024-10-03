document.addEventListener('DOMContentLoaded', () => {
    const basket = document.getElementById('basket');
    const fallingObject = document.getElementById('falling-object');
    let basketPosition = 50; // Start in the middle
    let objectPosition = 0;
    let objectLeft = Math.random() * 100;

    function moveBasket(event) {
        if (event.key === 'ArrowLeft' && basketPosition > 0) {
            basketPosition -= 5;
        } else if (event.key === 'ArrowRight' && basketPosition < 100) {
            basketPosition += 5;
        }
        basket.style.left = basketPosition + '%';
    }

    function dropObject() {
        objectPosition += 2;
        fallingObject.style.top = objectPosition + 'px';
        fallingObject.style.left = objectLeft + '%';

        if (objectPosition > 380) {
            if (Math.abs(basketPosition - objectLeft) < 10) {
                alert('Caught!');
            }
            objectPosition = 0;
            objectLeft = Math.random() * 100;
        }

        requestAnimationFrame(dropObject);
    }

    document.addEventListener('keydown', moveBasket);
    dropObject();
});
