(
    function () {
        function employeSvc() {
            this.getEmployes = function () {
                var employes = [{
                                  employeName:"sai",
                                 employeId:"414",
                                 employeSalary:"15000",
                },   
                                 { employeName:"teja",
                                 employeId:"415",
                                 employeSalary:"16000",
                                 },
                                  
                                  {
                                employeName:"praveen",
                                 employeId:"416",
                                 employeSalary:"17000",
                },   
                                 {
                                employeName:"sri",
                                 employeId:"417",
                                 employeSalary:"19000",
                
                },
                                 ];
                   
                return employes;
            };
        }
        angular.module("employe")
            .service("employeSvc",[employeSvc]);

    })();
