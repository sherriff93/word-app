import React from 'react'
import * as types from '../actions/action-types'
import DictionaryMain from '../components/DictionaryMain'

const initialState = {
    dictionaries: []
}

const homeLoggedInReducer = function (state = initialState, action) {
    let newState = null
    let {dictionaries, showPopupWithParams} = state
    switch (action.type) {
        case types.SHOW_EDIT_DICTIONARY_POPUP: {
            const {dictionary} = action
            showPopupWithParams = {
                type: 'edit_dictionary',
                dictionary: dictionary
            }
            newState = {...state, showPopupWithParams}
            break
        }
        case types.HIDE_CURRENT_POPUP: {
            showPopupWithParams = null
            newState = {...state, showPopupWithParams}
            break
        }
        case types.FETCH_DICTIONARIES_SUCCESS: {
            newState = {
                ...state,
                dictionaries: action.dictionaries.map((dictionary) => {
                    return {
                        ...dictionary,
                        main: ({match}) => (<DictionaryMain name={dictionary.name} match={match}/>),
                    }
                }),
                // isLoading: false // TODO isLoading? Here and in the fail function
            }
            break
        }
        case types.FETCH_DICTIONARIES_FAIL: { // TODO is this needed if isLading isn't? Same with words
            newState = {
                ...state,
                // isLoading: false
            }
            break
        }
        default:
            newState = state
    }
    return newState
}

export default homeLoggedInReducer
