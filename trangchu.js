var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "../login.html"
        })
        .when("/register", {
            templateUrl: "../register.html"
        })
        .when("/lienhe", {
            templateUrl: "../lienhe.html"
        })
        .when("/allitem", {
            templateUrl: "../sanpham.html"
        })
        .when("/contact", {
            templateUrl: "../contact.html"
        })
        .when("/giohang", {
            templateUrl: "../giohang.html",
            controller: "GioHang"
        })
})
// Chức năng thêm sản phẩm
app.factory('productService', function () {
    var productList = [];

    var addProduct = function (newObj) {
        productList.push(newObj);
    };

    var getProducts = function () {
        return productList;
    };

    return {
        addProduct: addProduct,
        getProducts: getProducts
    };
});
app.controller('GioHang', function ($scope, productService) {
    $scope.spdachon = productService.getProducts();
    $scope.TongTien = function () {
        $scope.tongtien = 0
        $scope.spdachon.forEach(element => {
            $scope.tongtien += element.price;
        });
    }
});
/*truyền dữ liệu*/
/*app.controller('Ctrl', function ($scope, productService) {
    $scope.all = [
        {   
            id:"1",
            name: "EGG TEE ",
            img: "../img/pic1.jpg",
            price: 400000
        },
        {   
            id:"2",
            name: "BLACK TEE",
            img: "../img/pic2.jpg",
            price: 350000
        },
        {
            id:"3",
            name: "PINK TEE ",
            img: "../img/pic3.jpg",
            price: 400000
        },
        {   
            id:"4",
            name: "16TYPH TEE",
            img: "../img/pic4.jpg",
            price: 430000
        },
        {   
            id:"5",
            name: "1984 JACKET",
            img: "../img/pic5.jpg",
            price: 650000
        },
        {   
            id:"6",
            name: "SLY JACKET",
            img: "../img/pic6.jpg",
            price: 535000
        },
        {   
            id:"7",
            name: "VARSITY JACKET",
            img: "../img/pic7.jpg",
            price: 585000
        },
        {   
            id:"8",
            name: "COACH JACKET",
            img: "../img/pic8.jpg",
            price: 495000
        },
        {   
            id:"9",
            name: "TIME-STOP HOODIE",
            img: "../img/pic9.jpg",
            price: 400000
        },
        {   
            id:"10",
            name: "BASIC SWEATER",
            img: "../img/pic10.jpg",
            price: 500000
        },
        {   
            id:"11",
            name: "TERRY SHORT",
            img: "../img/pic11.jpg",
            price: 580000
        },
        {   
            id:"12",
            name: "MULTICOLOR ZIP HOODIE",
            img: "../img/pic12.jpg",
            price: 480000
        },
        {   
            id:"13",
            name: "MULTI-PIXEL SWEATER",
            img: "../img/pic13.jpg",
            price: 650000
        },
        {   
            id:"14",
            name: "CLEAR BAG",
            img: "../img/pic14.jpg",
            price: 550000
        },
        {   
            id:"15",
            name: "WALLET COIN",
            img: "../img/pic15.jpg",
            price: 490000
        },
        {   
            id:"16",
            name: "BACKPACK BLUE",
            img: "../img/pic16.jpg",
            price: 480000
        }]
    // chức năng thêm vào giỏ hàng
    $scope.AddSp = function (currObj) {
        productService.addProduct(currObj);
        alert("Đã thêm 1 " + currObj.name)
    };
});*/

//search
//$(document).ready(function () {
    //$('#myInput').on('keyup', function (event) {
        //event.preventDefault();
        /* Act on the event */
        /*var tukhoa = $(this).val().toLowerCase();
        $('#sanpham form').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa) > -1);
        });
    });
});*/

