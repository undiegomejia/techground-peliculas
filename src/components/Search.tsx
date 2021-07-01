import React, { useState } from 'react';
import themoviedb from '../api/themoviedb';

import axios from 'axios'

import { SearchCard } from './SearchCard';


export const Search = () => {

	const [ query, setQuery ] = useState('');
	const [ results, setResults ] = useState([]);

	const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

        setQuery(e.target.value)

        const fetchData = async () => {
            try{
                let res= await themoviedb.get(`https://api.themoviedb.org/3/search/movie?api_key=93f7555c4ae5c5b68bfc36852b46cfcd&language=en-US&page=1&include_adult=false&query=${e
				.target.value}`)
                  if(res.status == 200){
                    
                }      
                return res.data 
            }
            catch(err){
                console.error(err)
            }
          }

          fetchData().then(res => setResults(res.results))

        
	};
    

	return (
		<div className="row">
			<div className="col-lg-12 p-3">
                <h4>Oh wow! You can easily search for any movie! <span role="img">🎞✨</span></h4>
                <input className="form-control" type="text" placeholder="Search for a movie" value={query} onChange={onChange} />
		    </div>
            <div className="col-lg-12 p-3">
            {results ? results.length > 0 && (
						<div className="d-flex flex-wrap">
							{results.map((movie:any) => (
								<div key={movie.id} className="">
									<SearchCard key={movie.id} movie={movie} />
								</div>
							))}
						</div>
					):<p>No hay resultados</p>}
            </div>
        </div>
	);
};
