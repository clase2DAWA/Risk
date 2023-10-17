document.querySelectorAll('svg').forEach(function(item){
    item.addEventListener('click', function(event){console.log(event.target.id)});
    })