try {
    //Bibliotecas
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    require('owl.carousel');
    require('jquery-validation'); 

    //Scripts
    //Menssagens de validação de formulários
    require('./main');
} catch (e) {
    console.log('Fail to load Js Libs:', e)
}