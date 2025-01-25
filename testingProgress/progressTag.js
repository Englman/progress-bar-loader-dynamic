document.addEventListener("DOMContentLoaded", () => {
    const mediaFiles = document.querySelectorAll("img");
    var theBarItself = document.getElementById("progressBar");
    var thePercents = document.getElementById("progressProcess");
    var progressText = document.getElementById("progressText");
    var dots = document.getElementById("dots");
    let i = 0;
    let dotCount = 0;

    function updateDots(){
        dotCount = (dotCount + 1) % 4;
        dots.textContent = ".".repeat(dotCount);
    }

    setInterval(updateDots, 500);
    
    mediaFiles.forEach((medEL) => {
        medEL.onload = () => {
            i++;
            console.log(i);
            const percent = ((i * 100) / mediaFiles.length);
            thePercents.innerHTML = percent;
            theBarItself.value = percent;

            if(i == mediaFiles.length){
                thePercents.innerHTML = 'Download complete!';
                progressText.innerHTML = "Downloaded!";
                theBarItself.value = 100;
                clearInterval(updateDots);
            }
        }

        const src = medEL.getAttribute('src');


        if(src && (src.endsWith('.jpeg') || src.endsWith(".jpg"))){
            medEL.setAttribute("src", src + "?" + Math.random());
        }
    })
})