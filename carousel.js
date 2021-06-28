let i = 0;
let images =[];
let time = 5000;


images[0] = 'staffimages/1.jpg'
images[1] = 'staffimages/2.jpg'
images[2] = 'staffimages/3.jpg'
images[3] = 'staffimages/4.jpg'
images[4] = 'staffimages/5.jpg'
images[5] = 'staffimages/6.jpg'




function changeImg(){
    document.staff_slide.src = images[i];
    if(i < images.length-1){
        i++;
    } else{
        i = 0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg;