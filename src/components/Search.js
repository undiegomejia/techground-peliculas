import React, { useState } from 'react';
import { ResultCard } from './ResultCard';

export const Search = () => {
	const [ query, setQuery ] = useState('');
	const [ results, setResults ] = useState([]);

	const onChange = (e) => {
		e.preventDefault();

		setQuery(e.target.value);

		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=93f7555c4ae5c5b68bfc36852b46cfcd&language=en-US&page=1&include_adult=false&query=${e
				.target.value}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (!data.errors) {
					setResults(data.results);
				} else {
					setResults([]);
				}
			});
	};

	return (
		<div className="row">
			<div className="container">
				<div className="search-container">
					<div className="my-2">
						<input className="form-control" type="text" placeholder="Search for a movie" value={query} onChange={onChange} />{' '}
					</div>
					{results.length > 0 && (
						<div className="d-flex flex-wrap">
							{' '}
							{results.map((movie) => (
								<div className="">
									<ResultCard key={movie.id} movie={movie} />{' '}
								</div>
							))}{' '}
						</div>
					)}{' '}
				</div>{' '}
			</div>{' '}
		</div>
	);
};
