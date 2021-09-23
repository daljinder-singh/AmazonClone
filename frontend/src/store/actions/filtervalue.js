export const FILTERVALUE = 'Filter_value'

export const filters = (payload) =>{
    return{
        type: FILTERVALUE,
        payload
    }
}
