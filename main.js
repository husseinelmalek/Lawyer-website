var levelText=document.querySelector(".level .level-text h1");
var levelContent=document.querySelector(".level .level-content p");
var shape=document.querySelector(".shape");

var one=true;
setInterval(function(){
    if(one){
    levelText.innerHTML="";
    levelContent.innerHTML="";
    levelText.innerHTML="مكتب محاماة دولي بمعايير أداء عالمية";
    levelContent.innerHTML="تعد المجموعة التجارية والبحرية أكبر مكتب محاماة دولي في مصر، وهذا يرجع لحجم القضايا الكبير التي تسلمها المكتب، والعملاء الدوليين والمحليين الذين تعاملوا معنا، بالإضافة إلى حجم وقوة العلاقات العامة وبروتوكولات التعاون المرتبطة بالمكتب. وقد اتخد المكتب مقره الرئيسي في قلب مدينة القاهرة ليكون منارة لتحقيق الأهداف القانونية لكافة عملائنا الكرام. تواصل الآن مع أفضل شركة محاماة رائدة في مصر.";
  shape.classList.remove("shapeD");
    shape.classList.add("shapeC");
   
    

}else{

        levelText.innerHTML="";
        levelContent.innerHTML="";
        levelText.innerHTML="استشارات قانونية بمعايير عالمية المستوى";
        levelContent.innerHTML="بخبرة قانونية واسعة، نقدم استشارات قانونية لجميع العملاء من أيدي نخبة من أكفأ المحامين المتمرسين وأفضل الشركاء  بمستوى جديد من الحلول القانونية المتكاملة. اطلب الآن استشارة قانونية فورية وتواصل مع أفضل مستشار قانوني واحصل على الدعم القانوني لحل قضاياك وتحقيق أهدافك.";
       shape.classList.remove("shapeC");
        shape.classList.add("shapeD");
    }
    one=!one;
    
   

},3000);

// slider

var slider=document.querySelector(".slider");
var sliderImg=document.querySelector(".slider img");
var right=document.querySelector(".right");
var left=document.querySelector(".left");
var count=1;
right.addEventListener("click",function(){
  if(count < 3){
    sliderImg.setAttribute("src","images/"+ ++count +".png");
  }else{

    count=1;
    sliderImg.setAttribute("src","images/"+ count +".png");
  }
  
});
left.addEventListener("click",function(){
  if(count > 1){
    sliderImg.setAttribute("src","images/"+ --count +".png");
  }else{

    count=3;
    sliderImg.setAttribute("src","images/"+ count +".png");
  }
  
});

