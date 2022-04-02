function changeSection(elemFrom) {

    document.querySelector('.display-sec').classList.remove('display-sec');

    if (elemFrom == 'generate-home') {

        console.log(elemFrom);
        document.getElementById('generate').classList.add('display-sec');
        

    } else if  (elemFrom == 'learn-home') {
        
        console.log(elemFrom);
        document.getElementById("more").classList.add('display-sec');
    }
}
