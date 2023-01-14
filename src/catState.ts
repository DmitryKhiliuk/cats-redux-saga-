import {createSlice} from "@reduxjs/toolkit";

export type catsType = {
    weght: {
        imperial: string,
        metric: string
    },
    id:string
    name:string
    cfa_url?:string
    vetstreet_url:string
    vcahospitals_url?:string
    temperament:string
    origin:string
    country_codes:string
    country_code:string
    description:string
    life_span:string
    indoor:number
    lap?:number
    alt_names:string
    adaptability:number
    affection_level:number
    child_friendly:number
    dog_friendly:number
    energy_level:number
    grooming:number
    health_issues:number
    intelligence:number
    shedding_level:number
    social_needs:number
    stranger_friendly:number
    vocalisation:number
    experimental:number
    hairless:number
    natural:number
    rare:number
    rex:number
    suppressed_tail:number
    short_legs:number
    wikipedia_url:string
    hypoallergenic:number
    reference_image_id:string
}

export type initialStateType = {
    cats: catsType[],
    isLoading: boolean
}

export const catSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: [],
        isLoading: false
    } as initialStateType,
    reducers: {
        getCatsFetch: (state) => {
            state.isLoading = true
        },
        getCatsSuccess: (state,action) => {
            state.cats = action.payload
            state.isLoading = false
        },
        getCatsFailure: (state) => {
            state.isLoading = false
        }
    }
})

export const {getCatsFetch, getCatsSuccess, getCatsFailure} = catSlice.actions
export const catsReducer = catSlice.reducer
