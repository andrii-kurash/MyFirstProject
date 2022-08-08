$(function () {
	$('.top__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		fade: true,
		breakpoint: 500,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: false
				}
			},
		]
	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});

	const slides = [
		`<div class="slider__slide">
		<div class="slide__card">
		  <img class="card-user-photo" src="images/card-user-photo-1.jpg" alt="First User Photo">
		  <p class="card-user-name">Leonardo DiCaprio</p>
		  <p class="card-user-review">Very happy with your service. I always meet VIP clients only on your cars.
			It is convenient that the calculation is by the minute, it saves the company's budget.</p>
		</div>
		<div class="slide__card">
		  <img class="card-user-photo" src="images/card-user-photo-2.jpg" alt="Second User Photo">
		  <p class="card-user-name">Arnold Schwarzneger</p>
		  <p class="card-user-review">I am very glad that you exist!
			I still can’t buy a behu, but to take a ride is a great opportunity!
			It feels like I have a personal huge fleet of luxury cars)))</p>
		</div>
		<div class="slide__card">
		  <img class="card-user-photo" src="images/card-user-photo-3.jpg" alt="Third User Photo">
		  <p class="card-user-name">Angelina Jolie</p>
		  <p class="card-user-review">Guys, you are TOPCHIK!
			I took the car on a date, drove the girl, she is delighted, I'm happy, everyone is happy)</p>
		</div>
	  </div>`,
	  `<div class="slider__slide">
	  <div class="slide__card">
		<img class="card-user-photo" src="images/card-user-photo-4.jpg" alt="First User Photo">
		<p class="card-user-name">Dmytro Gordon</p>
		<p class="card-user-review">I am very glad that you exist!
		I still can’t buy a behu, but to take a ride is a great opportunity!
		It feels like I have a personal huge fleet of luxury cars)))</p>
	  </div>
	  <div class="slide__card">
		<img class="card-user-photo" src="images/card-user-photo-5.jpg" alt="Second User Photo">
		<p class="card-user-name">Oleksiy Arestovych</p>
		<p class="card-user-review">Guys, you are TOPCHIK!
		I took the car on a date, drove the girl, she is delighted, I'm happy, everyone is happy)</p>
	  </div>
	  <div class="slide__card">
		<img class="card-user-photo" src="images/card-user-photo-6.jpg" alt="Third User Photo">
		<p class="card-user-name">Volodymyr Povoroznyk</p>
		<p class="card-user-review">Very happy with your service. I always meet VIP clients only on your cars.
		It is convenient that the calculation is by the minute, it saves the company's budget.</p>
	  </div>
	  </div>`,
	  `<div class="slider__slide">
	  <div class="slide__card">
		<img class="card-user-photo" src="images/card-user-photo-7.jpg" alt="First User Photo">
		<p class="card-user-name">Your dad</p>
		<p class="card-user-review">Guys, you are TOPCHIK!
		I took the car on a date, drove the girl, she is delighted, I'm happy, everyone is happy)</p>
	  </div>
	  <div class="slide__card">
		<img class="card-user-photo" src="images/card-user-photo-8.jpg" alt="Second User Photo">
		<p class="card-user-name">Mister Nobody</p>
		<p class="card-user-review">Very happy with your service. I always meet VIP clients only on your cars.
		It is convenient that the calculation is by the minute, it saves the company's budget.</p>
	  </div>
	  <div class="slide__card">
		<img class="card-user-photo" src="images/card-user-photo-9.jpg" alt="Third User Photo">
		<p class="card-user-name">Super Star</p>
		<p class="card-user-review">Guys, you are TOPCHIK!
		I am very glad that you exist!
		I still can’t buy a behu, but to take a ride is a great opportunity!
		It feels like I have a personal huge fleet of luxury cars)))</p>
	  </div>
	  </div>`
	];

	let currentSlideIdx = 0;

	function renderSlider() {
		const slideContainer = document.querySelector('.reviews-slider__slides');
		slideContainer.innerHTML = slides[currentSlideIdx];
	}

	function prev() {
		currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
		renderSlider(); 
	}
	function next() {
		currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
		renderSlider(); 
	}

	const prevButton = document.querySelector('.reviews-slider__button-prev');
	prevButton.addEventListener('click', prev);

	const nextButton = document.querySelector('.reviews-slider__button-next');
	nextButton.addEventListener('click', next);

	renderSlider();

});