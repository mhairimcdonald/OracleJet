define(['ojs/ojscore', 'text!../endpoints.json'], function (oj, endpoints){
    var EmployeeFactory ={
        resourceUrl: JSON.parse(endpoints).employees,
        //create a single employee instance:
        createEmployeeModel: function(){
            var Employee = oj.Model.extend({
                urlRoot: this.resourceUrl,
                idAttribute: "id"
            });
            return new Employee();
        },
        //create an employee collection:
        createEmployeeCollection: function() {
            var Employees = oj.Collection.extend({
                url: this.resourceUrl,
                model: this.createEmployeeModel()
            });
            return new Employees();
        }
    };
    return EmployeeFactory;
});