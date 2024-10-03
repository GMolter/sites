document.addEventListener('DOMContentLoaded', () => {
    const moles = document.querySelectorAll('.mole');
    const scoreBoard = document.getElementById('score');
    let score = 0;

    function randomMole() {
        const index = Math.floor(Math.random() * moles.length);
        return moles[index];
    }

    function showMole() {
        const mole = randomMole();
        mole.style.display = 'block';
        setTimeout(() => {
            mole.style.display = 'none';
        }, 800);
    }

    function startGame() {
        setInterval(showMole, 1000);
    }

    moles.forEach(mole => {
        mole.addEventListener('click', () => {
            if (mole.style.display === 'block') {
                score++;
                scoreBoard.textContent = `Score: ${score}`;
                mole.style.display = 'none';
            }
        });
    });

    startGame();
});
