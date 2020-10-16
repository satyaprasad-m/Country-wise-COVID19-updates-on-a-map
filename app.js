
function PlotMap(){

	const API_URL = 'https://www.trackcorona.live/api/countries';
			var map = L.map('myMap',{
				center: [20.593684,78.96288],
				zoom:4
			});
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);

	fetch(API_URL)
		.then(response=>response.json())
		.then(data=>{
			data.data.forEach(country=>{
				var marker = L.marker([country.latitude,country.longitude],{riseOnHover:true});
				marker.bindPopup(`<h1>Country:${country.location}<span><img src="https://www.countryflags.io/${country.country_code}/flat/32.png"></img></span></h1>
					<h3>Recovered: ${country.recovered}</h3>
					<h3>Confirmed: ${country.confirmed}</h3>
					<h3>Dead: ${country.dead}</h3>
					<h3>Last updated: ${country.updated}</h3>
				`).openPopup();
				marker.addTo(map);

			})
		})

	}
PlotMap();