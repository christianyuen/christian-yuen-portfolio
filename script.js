const app = {};

const icons = document.querySelectorAll('.skill'); 

function mouseoverIcon() {
    console.log('you just moused over an icon')
}

function iconListener(icon){

    icon.addEventListener('mouseover', function(event) {
        
        icons.displayName = () => {
            document.querySelector('.iconName').style.opacity='100%';
        }

        icons.displayName();
    });
    
}


icons.forEach(iconListener);







