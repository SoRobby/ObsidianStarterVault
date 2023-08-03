class UpcomingRocketLaunches {
    getUpcomingRocketLaunches(element) {
        const URL = 'https://fdo.rocketlaunch.live/json/launches/next/5';
        let html = '';

        
        function formatElement(launchName, launchDate, launchVehicleName, missions, launchDescription){
            let elementHTML = `
            <div class="tailwind">
                <div class="block py-2">
                    <div class="text-xl font-bold --text-normal">${launchName}<small class="float-right --text-faint font-semibold text-sm pl-2">${launchDate}</small></div>
                    <div class="text-sm font-semibold --text-faint">Vehicle: ${launchVehicleName}</div>
                    <div class="text-sm font-semibold --text-faint">Missions: ${missions}</div>
                    <p class="text-sm --text-faint">${launchDescription}</p>
                </div>
            </div>
            `
            return elementHTML
        }


        fetch(URL).then(function (response) {
            return response.json();
        }).then(function (data) {
            let result = data.result;
            for (let i = 0; i < result.length; i++) {
                let missions = [];
                for(let j=0; j<result[i].missions.length; j++){
                    missions.push(result[i].missions[j].name);
                }
                missions = missions.join(', ');
                html += formatElement(result[i].name, result[i].date_str, result[i].vehicle.name, missions, result[i].launch_description);
            }
            element.innerHTML = html;
        });

    }
}