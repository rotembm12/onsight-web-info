let tmb = document.getElementsByClassName('thumbnail');
for(let tm of tmb){
    tm.addEventListener('click', function() {
        this.classList.contains('clicked-thumbnail') ? this.classList.remove('clicked-thumbnail') : 
            this.classList.add('clicked-thumbnail');
    })
}