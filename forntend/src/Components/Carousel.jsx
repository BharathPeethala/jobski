import React from "react";
// import Slider from "react-slick";

function Carousel() {
	return (
		<div class="container">
			<div
				id="carouselExampleControls"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="Slider-Container">
							<h2 class="Main-Headings">CONFUSED ? 😕</h2>
							<h5>
								<i>
									"Do not know which job role suits you, predict the job role as
									per your skills"
								</i>
							</h5>
							<a href="/predict">
								<button class="btn  Slider-btn" type="submit">
									PREDICT
								</button>
							</a>
						</div>
					</div>
					<div class="carousel-item">
						<div class="Slider-Container">
							<h2 class="Main-Headings">NEED A PLAN ? 🤔</h2>
							<h5>
								<i>
									"Need detailed roadmaps to achieve trending and high paying
									jobs and skills"
								</i>
							</h5>
							<a href="/roadmaps">
								<button class="btn  Slider-btn" type="submit">
									ROADMAPS
								</button>
							</a>
						</div>
					</div>
					<div class="carousel-item">
						<div class="Slider-Container">
							<h2 class="Main-Headings">TIRED ? 😫</h2>
							<h5>
								<i>
									"Tired off for searching jobs in different job platforms? one
									place for job postings"
								</i>
							</h5>
							<a href="/job-search">
								<button class="btn  Slider-btn" type="submit">
									JOB POSTS
								</button>
							</a>
						</div>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

export default Carousel;
