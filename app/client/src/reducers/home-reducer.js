import React from 'react'
import * as types from '../actions/action-types'
import DictionaryMain from '../components/DictionaryMain'

const initialState = {
    dictionaries: [],
    showPopupWithParams: null
}

const homeReducer = function (state = initialState, action) {
    let newState = null
    let {dictionaries, showPopupWithParams} = state
    switch (action.type) {
        case types.ADD_DICTIONARY: {
            const {value} = action
            const valueCapped = value.charAt(0).toUpperCase() + value.slice(1)
            newState = {
                ...state,
                dictionaries: [...dictionaries, {
                    path: '/' + encodeURI(value),
                    name: valueCapped,// TODO need to format the value (caps first here, no space above) and caps below
                    main: ({match}) => (<DictionaryMain name={valueCapped} match={match}/>)
                }]
            }
            break
        }
        case types.DELETE_DICTIONARY: {
            dictionaries = dictionaries.filter(function (dictionary, index) {
                return action.value !== dictionary.name
            })
            newState = {...state, dictionaries}
            break
        }
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

export default homeReducer
