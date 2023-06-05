window.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#menu').classList.toggle('is-activ')
    })
})

document.addEventListener('DOMContentLoaded', function (){
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path

    document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-activ')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-activ')
    
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tab__btn-activ')
        })
        this.classList.add('tab__btn-activ')
        }) 
    })
})    
