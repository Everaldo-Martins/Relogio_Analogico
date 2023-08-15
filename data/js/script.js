setInterval(() => {
    let d = new Date(), h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
    document.querySelector(".date").innerHTML = d.getDate(),
    document.querySelector(".hour").style.transform = `rotate(${30 * h + m / 2}deg)`,
    document.querySelector(".min").style.transform = `rotate(${6 * m}deg)`,
    document.querySelector(".sec").style.transform = `rotate(${6 * s}deg)`;
}, 1000);