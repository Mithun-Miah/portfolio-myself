// WORKING PROGRESS numder counter code start
var count1 = 0;
var project1 = setInterval(project1,500);

function project1(){
    count1++;
    let counter1 = document.getElementById("counter1").innerHTML=count1;
    if(count1==12)
    {
        clearInterval(project1);
    }
}
var count2 = 0;
var project = setInterval(project,500);

function project(){
    count2++;
    //let counter1 = document.getElementById("counter1").innerHTML=count2;
    let counter2 = document.getElementById("counter2").innerHTML=count2;
    let counter3 = document.getElementById("counter3").innerHTML=count2;
    let counter4 = document.getElementById("counter4").innerHTML=count2;
    if(count2==10)
    {
        clearInterval(project);
    }
}


// WORKING PROGRESS numder counter code end

// progress bar code start here
const skillsSection = document.getElementById('skills-section');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        // console.log(value);
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll', function(){
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = this.window.innerHeight / 2;

    if(sectionPos < screenPos){
        // console.log('show progress');
        showProgress();
    }else{
        // console.log('hide progress');
        hideProgress();
    }
})
// progress bar code end here