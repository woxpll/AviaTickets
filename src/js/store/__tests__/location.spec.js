import locationsInstance, { Locations } from "../locations";
import {formatDate} from "../../helpers/date";
import api, {Api} from "../../service/apiService";

const countries = [{code: "RUS", name: "Russia"}]

describe("Locations store tests", () => {
    it('Check that locationsInstance is instance of Locations class', () => {
        expect(locationsInstance).toBeInstanceOf(Locations)
    })
    it('Success Locations instance create', () => {
        const instance = new Locations(api, {formatDate})
        expect(instance.countries).toBe(null)
        expect(instance.shortCitiesList).toEqual({})
        expect(instance.formatDate).toEqual(formatDate)
    })

    it('Check correct countries serialize', () => {
        const res = locationsInstance.serializeCountries(countries)
        const expectedData = {RUS: {code: "RUS", name: "Russia"}}

        expect(res).toEqual(expectedData)

    })
})