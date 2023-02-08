/* Stylesheet by Jianjin Chen, 2023 */
var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "Hello World";
function myFunc(){
    var myDiv =  document.getElementById("mydiv");
    myDiv.innerHTML = "Hello World.";
};

window.onload = myFunc();

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var myDiv =  document.getElementById("mydiv");
    myDiv.appendChild(table);
};

//call the initialize function when the window has loaded
window.onload = initialize();

    //Example 2.3 line 8...create an empty array
    var cityPop = [];

    //create the first city object
    var madison = {};
    //add each property to the object
    madison.city = 'Madison';
    madison.population = 233209;

    //push the city object into the array
    cityPop.push(madison);

    //repeat...
    var milwaukee = {};
    milwaukee.city = 'Milwaukee';
    milwaukee.population = 594833;
    cityPop.push(milwaukee);

    var greenBay = {};
    greenBay.city = 'Green Bay';
    greenBay.population = 104057;
    cityPop.push(greenBay);

    var superior = {};
    superior.city = 'Superior';
    superior.population = 27244;
    cityPop.push(superior);


        //WHILE LOOP...Example 2.4 line 25
    //define a counter variable
    var i = 0;
    //start the loop
    while (i < cityPop.length){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city;
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population;
        tr.appendChild(pop);

        table.appendChild(tr);

        //increment counter
        i++;
    };

    //FOREACH LOOP...Example 2.4 line 25
    cityPop.forEach(function(cityObject){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityObject.city; //NOTE DIFFERENT SYNTAX
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityObject.population; //NOTE DIFFERENT SYNTAX
        tr.appendChild(pop);

        table.appendChild(tr);
    });

    //FOREACH LOOP WITH OBJECT FOR LOOP...Example 2.4 line 25
    cityPop.forEach(function(cityObject){
        var tr = document.createElement("tr");

        for (var property in cityObject){
            var td = document.createElement("td");
            td.innerHTML = cityObject[property];
            tr.appendChild(td);
        };

        table.appendChild(tr);
    });

        //Example 2.4 line 25...loop to add a new row for each city
        for (var i = 0; i < cityPop.length; i++){
            var tr = document.createElement("tr");
        
            var city = document.createElement("td");
            //first conditional block
                if (cityPop[i].city == 'Madison'){
                    city.innerHTML = 'Badgerville';
                } else if (cityPop[i].city == 'Green Bay'){
                    city.innerHTML = 'Packerville';
                } else {
                    city.innerHTML = cityPop[i].city;
                }
        
                tr.appendChild(city);
        
                var pop = document.createElement("td");
            //second conditional block        
                if (cityPop[i].population < 500000){
                    pop.innerHTML = cityPop[i].population;
                } else {
                    pop.innerHTML = 'Too big!';
                };
        
                tr.appendChild(pop);
        
                table.appendChild(tr);
            };

            pop.innerHTML = cityPop[i].population < 500000 ? cityPop[i].population : 'Too big!';