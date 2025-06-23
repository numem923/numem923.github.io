let desc = document.getElementById('desc');



desc.addEventListener('touchstart', (e) => {


e.target.style.boxSshadow= '0px 0px 0px black';
e.target.style.transform=' scale(0.9)';


location.href = './numem_v1.0.3.apk';




});

desc.addEventListener('touchend', (e) => {


e.target.style.boxSshadow= '3px 3px 3px black';
e.target.style.transform=' scale(1)';
    



});