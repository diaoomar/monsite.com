const Theme = document.querySelector('.btn')
let montheme = 0;

Theme.addEventListener('click', () =>{
    if(montheme === 0){
        document.documentElement.style.setProperty('--claire', '#262626');
        document.documentElement.style.setProperty('--sombre', '#f1f1f1');
        montheme++;
    }else{
        document.documentElement.style.setProperty('--claire', '#f1f1f1');
        document.documentElement.style.setProperty('--sombre', '#262626');
        montheme--;
    }
});
  