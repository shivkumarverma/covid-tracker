const URL = "https://covid19.mathdro.id/api";

let app = angular.module("MyApp",[]);

app.controller("MyCtrl",($scope , $http)=>{

    //this is controller
    $scope.title = "Stay Home Stay Safe";
    $scope.para = "Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.";
    console.log("app loaded");

    //calling api
    $http.get(URL).then((response)=>{
        //sucess
     $scope.all_data = response.data;
    } ,(error)=>{
        //error
     console.log(error);
    });

// get country data

$scope.get_c_data = ()=>{
    let country = $scope.c;
    console.log($scope.c);
    if(country == "")
    {
        return;
    }

    $http.get(`${URL}/countries/${country}`).then(
        (response)=>{
            console.log(response.data);
            $scope.c_data = response.data;
        },
        (error)=>{
            console.log(error);
        }
    )

}


});