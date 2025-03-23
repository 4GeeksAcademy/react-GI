import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Footer from "./Footer";

//create your first component

const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<Jumbotron />
			
			<div className="container">
			<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
			<Card tittle= "The Last of Us" imageUrl= "https://m.media-amazon.com/images/M/MV5BYmZlYzA5OTEtYzAwMC00NzgzLThlMjQtMWY4Mzc1YWMzMjM1XkEyXkFqcGc@._V1_FMjpg_UY4000_.jpg" content= "Joel and Ellie, a couple connected by the harsh world they live in, are forced to endure brutal circumstances and ruthless killers on a journey through post-pandemic America." linkUrl = "" /><Card tittle= "Breaking Bad" imageUrl= "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg" content= "A high school teacher diagnosed with inoperable lung cancer turns to producing and selling methamphetamines to support his family's future." linkUrl = "https://www.imdb.com/title/tt0903747/mediaviewer/rm3116305665/?ref_=tt_ov_i"/>
			<Card tittle= "Daredevil" imageUrl= "https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_FMjpg_UY2048_.jpg" content= "By day he's a blind lawyer and by night he's a vigilante. Matt Murdock fights New York City crime as Daredevil." linkUrl = "https://www.imdb.com/es/title/tt18923754/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_dare"/>
			<Card tittle= "House of the Dragon" imageUrl= "https://www.orientaserie.it/wp-content/uploads/2023/05/House-of-the-dragon-locandina.jpg" content= "The story of House Targaryen, set 200 years before the events of Game of Thrones." linkUrl = "https://www.imdb.com/es/title/tt11198330/?ref_=nv_sr_srsg_4_tt_7_nm_0_in_0_q_house%2520of%2520"/>
			<Card tittle= "The Big Ban Theory" imageUrl= "https://m.media-amazon.com/images/M/MV5BODliNDA1N2MtYThkYy00N2M0LTk1NzAtZTNkNWI2YTdkZjY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" content= "A girl moves into an apartment across the hall from a group of highly intelligent but socially awkward physicists and shows them how little she knows about life outside the lab." linkUrl = "https://www.imdb.com/es/title/tt0898266/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_the%2520big%2520ban"/>
			<Card tittle= "Game Of Thrones" imageUrl= "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" content= "Nine noble families fight for control of the mystical lands of Westeros, while an old enemy returns after thousands of years in hiding." linkUrl = "https://www.imdb.com/es/title/tt0944947/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_game%2520of%2520th"/>
			<Card tittle= "The Boys" imageUrl= "https://m.media-amazon.com/images/M/MV5BZTlkMmU1YmQtMTQxZS00NTY1LWI3OGUtNTk4NjRhOTBkNmJlXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg" content= "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers." linkUrl = "https://www.imdb.com/title/tt1190634/episodes/?ref_=tt_eps"/>
			<Card tittle= "Dope Thief" imageUrl= "https://m.media-amazon.com/images/M/MV5BNmY1YWI3OTYtMDlhMS00MGY3LWI1ZmUtODY1MGU1ZGYzZDY4XkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg" content= "Amigos y delincuentes de toda la vida que se hacen pasar por agentes de la DEA para robar en una casa en el campo, pero acaban revelando y desentrañando sin querer el mayor corredor oculto de narcóticos de la costa Este." linkUrl = "https://www.imdb.com/title/tt21638826/episodes/?ref_=tt_eps"/>
			</div>

</div>
<Footer />
		</div>
		
	);
};

export default Home;