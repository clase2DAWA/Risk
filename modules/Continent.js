/*import { COUNTRY } from './Country.js';

var CONTINENT = CONTINENT || {}

CONTINENT.continent = class {

    constructor(countries, dominated, bonusDomination) {

        this.countries = [];
        this.dominated = false;
        this.bonusDomination = bonusDomination;
        this.generateCountries();
    }

    randomNumberCountries() {

        return Math.floor(Math.random() * 7) + 3;

    }

    generateCountries() {

        for ( let i = 0 ; i < this.randomNumberCountries(); i++){
            this.countries.push ( new COUNTRY.country(60 + Math.random()*80));
        }
    }
}

export { CONTINENT }; 
*/