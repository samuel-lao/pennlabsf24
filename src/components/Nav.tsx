import React, { ChangeEvent, useEffect, useState } from 'react'

type Props = {
	handleSearch: (arg0: string) => void,
	autoSearch: string
}

const Nav = ({ handleSearch, autoSearch }: Props) => {
	const [term, setTerm] = useState(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTerm(e.target.value);
	  };

	const onSubmit = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		handleSearch(term)
	}

	useEffect(() => {
		if (autoSearch)
			handleSearch(autoSearch)
	}, [autoSearch])

	return (
		<div
			style={{
				width: "100%",
				padding: "0.5rem 0rem",
				borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
				display: "flex",
				gap: "20px",
				alignItems: 'center'

				// position: "absolute",
				// top: 0
			}}>
			<a href="/">
				<svg width="50" height="50" viewBox="0 0 647 767" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingLeft: "1.5rem" }}>
					<path d="M422.461 38.748C493.994 38.748 535.01 87.332 535.01 149.832C535.01 213.309 493.506 260.184 421.729 260.184H355.078V372H289.16V38.748H422.461ZM467.871 149.832C467.871 112.479 446.143 91.2383 409.766 91.2383H354.834V208.426H394.385C440.283 208.426 467.871 194.998 467.871 149.832Z" fill="black" />
					<path d="M49.8047 289.385C49.8047 279.619 58.1055 271.074 67.8711 271.074H153.564C178.467 271.074 185.303 280.596 187.744 299.395L192.627 330.4H591.064C604.492 330.4 613.281 338.457 613.281 350.176C613.281 352.373 612.793 356.279 612.305 359.453L592.773 488.604C587.646 523.516 569.336 545.488 533.691 545.488H223.877L227.783 571.123C229.98 586.016 238.525 595.781 252.441 595.781H533.203C542.725 595.781 551.025 603.594 551.025 614.092C551.025 624.59 542.725 632.402 533.203 632.402H248.291C212.891 632.402 194.58 610.674 189.453 576.006L150.391 307.939H67.8711C58.1055 307.939 49.8047 299.395 49.8047 289.385ZM227.783 711.504C227.783 689.531 245.361 671.953 267.578 671.953C289.551 671.953 307.129 689.531 307.129 711.504C307.129 733.721 289.551 751.055 267.578 751.055C245.361 751.055 227.783 733.721 227.783 711.504ZM456.055 711.504C456.055 689.531 473.877 671.953 495.85 671.953C518.066 671.953 535.645 689.531 535.645 711.504C535.645 733.721 518.066 751.055 495.85 751.055C473.877 751.055 456.055 733.721 456.055 711.504Z" fill="#30B897" />
				</svg>
			</a>
			{/* <h2>Penn Course Cart</h2> */}
			<form onSubmit={onSubmit}>
				<input type="search" placeholder="Search" onChange={handleChange} />
			</form>
		</div>
	)


}

export default Nav
