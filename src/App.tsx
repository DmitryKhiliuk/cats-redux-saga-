import React, {useEffect} from 'react';
import './App.css';
import {getCatsFetch} from "./catState";
import {useAppDispatch, useAppSelector} from "./index";

function App() {

    const cats = useAppSelector(state => state.catsReducer.cats)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCatsFetch())
    }, [dispatch])

  return (
    <div className="App">
        <h1>CAT SPECIES GALLERY</h1>
        <p>Images of different species of cats. Lots of cats for your viewing pleasure</p>
        <hr/>
        <div className={'Gallery'}>
            {cats.map((cat) =>
                <div key={cat.id} className={'row'}>
                    <div className={'column column-left'}>
                        <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.name} width={200} height={200}/>
                    </div>
                    <div className={'column column-right'}>
                        <h2>{cat.name}</h2>
                        <h5>Temperament: {cat.temperament}</h5>
                        <p>{cat.description}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default App;
