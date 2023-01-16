import {call, put, takeEvery} from 'redux-saga/effects'
import {catsType, getCatsSuccess, initialStateType} from "./catState";

function* workGetCatsFetch() {
    const cats: catsType[] = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
    // @ts-ignore
    const formattedCats: catsType[] = yield cats.json()
    const formattedCatsShortened = formattedCats.slice(0,10)
    yield put(getCatsSuccess(formattedCatsShortened))
}

export function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}

