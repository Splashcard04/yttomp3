const convert = document.getElementById(`convert`)
const resultsp = document.getElementById(`results`)
const lengthp = document.getElementById(`length`)
const titlep = document.getElementById(`title`)
const sizep = document.getElementById(`size`)
const download = document.getElementById(`download`)


convert.addEventListener(`click`, () => {

    let input = document.getElementById('link').value;

    let id = input.split('v=')[1];
    if (!id) return alert("Invalid Youtube URL");

    const settings = {
        async: true,
        crossDomain: true,
        url: `https://youtube-mp3-download-highest-quality1.p.rapidapi.com/ytmp3/ytmp3/custom/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${id}&quality=320`,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dfdb50fe75mshd82d4e6ffb1bc58p1b354ejsn283aabb10caf',
            'X-RapidAPI-Host': 'youtube-mp3-download-highest-quality1.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);

        let minutes = Math.floor(response.length / 60);
        let extraSeconds = response.length % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds< 10 ? "0" + extraSeconds : extraSeconds;

        resultsp.innerHTML = `Results:`

        titlep.innerHTML = `${response.title}`;
        lengthp.innerHTML = `${minutes}m, ${extraSeconds}s`;
        sizep.innerHTML = `${response.size}`;

        download.href = response.link;
        download.innerHTML = `<button id='dwnl' style='
        background-color: blue;
        color: white;
        border: none;
        padding: 1%;
        font-size: x-large;
        border-radius: 10px; 
        display: block; 
        margin-left: auto;
        margin-right: auto;
        cursor:pointer;
        margin-top: 2%;'
        ><i class="fa-solid fa-circle-down"></i> Download</button>`;
    });
})