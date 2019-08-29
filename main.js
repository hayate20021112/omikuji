window.onload = function() {
    const imgSrc = new Array('img/omikuji_daikichi.png','img/omikuji_kichi.png','img/omikuji_chuukichi.png','img/omikuji_syoukichi.png','img/omikuji_suekichi.png','img/omikuji_kyou.png','img/omikuji_daikyou.png',);
    const resetSrc = 'img/syougatsu2_omijikuji2.png';


    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const omikujiImg = document.getElementById('omikuji-img');

    startBtn.onclick = function() {
        const random = Math.floor (Math.random() * imgSrc.length);
        omikujiImg.src = imgSrc[random];

        if(random == 0){
            alert('いい一日になりそうだ!');
        } else if(random ==6) {
            alert('今日はついてないかもね。');
        }
    }

    resetBtn.onclick =function() {
        omikujiImg.src = resetSrc;
    }

}
