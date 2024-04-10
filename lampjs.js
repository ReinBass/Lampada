document.addEventListener("DOMContentLoaded", function() {
    const lampImg = document.querySelector('img');

    const lampOffUrl = "pic_bulboff.gif";
    const lampOnUrl = "pic_bulbon.gif";

    function interruptor() {
        if (lampImg.src.endsWith(lampOffUrl)) {
            lampImg.src = lampOnUrl;
        } else {
            lampImg.src = lampOffUrl;
        }
    }

    lampImg.addEventListener('click', interruptor);
});
