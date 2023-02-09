// load city population data from previous json file to generate table
//initialize function called when the script loads
function initialize(){
	cities();
    Ajax();
    debugAjax();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//create a table element
	var table = document.createElement("table");

	//create a header row element and append it to the table
	var headerRow = document.createElement("tr");
	table.appendChild(headerRow);

	//create the "City" and "Population" column headers
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	
	//loop to add a new row for each city
    cityPop.forEach(function(cityObject){
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend',rowHtml);
	})
	
	//append the table element to the div
	document.querySelector("#mydiv").appendChild(table);

    //add new elements, prepare for the citysize column and click event
    addColumns(cityPop);
    addEvents();

};
// add the citysize column
function addColumns(cityPop){
    // read the table rows
	var rows = document.querySelectorAll("tr")
    // add new column for each row
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
            // column header
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
        //classfiy city level   
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
            //apply cell to each row
			var newRow = document.createElement('td')
			newRow.innerHTML = citySize
			row.appendChild(newRow)
    	};
    });
};

//add the click event
function addEvents(){
    // read the table rows
	table = document.querySelector("table");

    // when cursor hovering over the table
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";
        // create random color
	    for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		    };
		}
		table.style.color = color;
	});
    
	// add the click event
	function clickme(){

		alert('Hey, you clicked me!')
	};
	// when mouse clicked table
		table.addEventListener("click", clickme);
    };	
// call the mouseevent function
document.addEventListener('DOMContentLoaded', initialize)


function Ajax(){
    var myData;
    fetch('data/MegaCities.geojson')
    .then(function(response){
        return response.json();

    })
    .then(function(response){
        myData = response;
        console.log(myData);
    })
    console.log(myData)

};


function debugCallback(myData){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};

function debugAjax(){
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
            return response.json();
		})
        .then(debugCallback)

};
