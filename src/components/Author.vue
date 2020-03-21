<template>
	<div class="author">

		<g-image alt="Author image" class="author__image" src="https://res.cloudinary.com/samtech/image/upload/f_auto/q_auto/v1584740237/sammy.jpg" style="background-size: contain; object-fit:cover; " width="300" height="300"  blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			Hello, <br>
			I'm a frontend developer based in Uyo, Nigeria. I'm interested in web performance, accessibility and software engineering principles most times.


		</p>

		<p class="author__links">
			<a href="//twitter.com/samuelumoren16">
				<img alt="twitter" src="https://image.flaticon.com/icons/png/512/124/124021.png" width="32" data-src="https://image.flaticon.com/icons/png/512/124/124021.png" data-srcset="https://image.flaticon.com/icons/png/512/124/124021.png 32w" data-sizes="(max-width: 32px) 100vw, 32px" class="g-image g-image--lazy g-image--loaded" sizes="(max-width: 32px) 100vw, 32px" srcset="https://image.flaticon.com/icons/png/512/124/124021.png 32w">
			</a>
			<a href="//github.com/Umoren">
				<img alt="Github" src="https://image.flaticon.com/icons/png/512/25/25231.png"  width="32" data-src="https://image.flaticon.com/icons/png/512/25/25231.png" data-srcset="https://image.flaticon.com/icons/png/512/25/25231.png 32w" data-sizes="(max-width: 32px) 100vw, 32px" class="g-image g-image--lazy g-image--loaded" sizes="(max-width: 32px) 100vw, 32px" srcset="https://image.flaticon.com/icons/png/512/25/25231.png 32w">
			</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
