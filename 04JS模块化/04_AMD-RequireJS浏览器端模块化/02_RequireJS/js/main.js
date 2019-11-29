// 引入模块
(function () {
    requirejs.config({
        baseUrl: 'js/', // 基本路径
        paths: { // 配置路径，基本模块的位置
            dataService: './modules/dataService',
            alerter: './modules/alerter',
            jquery: './libs/jquery-3.3.1',
            angular: './libs/angular'
        },
        shim: { // 不是所有的模块向上面一样引入就可以使用，如angular
            angular: {
                exports: 'angular'
            }
        }
    });

    requirejs(['alerter', 'angular'], function (alerter) { // 引入依赖，还可以使用require
        alerter.showMsg();
        console.log(angular);
    })
})()