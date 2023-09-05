import '../css/style.css'
import locations from "./store/locations";
import './plugins'
import formUI from "./views/form";
import currencyUI from "./views/currency";
import ticketUI from "./views/tickets";

document.addEventListener("DOMContentLoaded", () =>{
    initApp()
    const form = formUI.form


    //Events
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        onFormSubmit()
    })


    // Handlers
    async function initApp() {
        await locations.init()
        formUI.setAutocompletedData(locations.shortCitiesList)
    }

    async function onFormSubmit(){
        const origin = locations.getCityByCode(formUI.originValue)
        const destination = locations.getCityByCode(formUI.destinationValue)
        const depart_date = formUI.departDateValue
        const return_date = formUI.returnDateValue
        const currency = currencyUI.currencyValue

        console.log(currency)

        await locations.fetchTicket({
            origin,
            destination,
            depart_date,
            return_date,
            currency
        })

        ticketUI.renderTickets(locations.lastSearh)
    }
})