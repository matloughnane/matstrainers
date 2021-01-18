---
layout: default
title: About
description: I am a developer from London, when taking photos, I like to look down and see where my trainers have taken me.
permalink: /about/
---

{% assign statics = site.static_files | reverse %}

<div class="bg-gray-800">

	<!-- Root element for center items -->
	<div class="flex flex-col h-screen"
		style=" position: absolute;top:0;bottom:0;left:0;right:0;z-index:0; background-image: url({{statics[3].path}}); background-position: center; background-size: cover; filter: blur(8px); -webkit-filter: blur(8px);">
	</div>
	<div style="z-index:1;">
		<div class="flex flex-col h-screen"
			style="filter: blur(0px) !important;-webkit-filter: blur(0px) !important;">
			<!-- Auth Card Container -->
			<div class="grid place-items-center mx-2 my-20 sm:my-auto">
				<!-- Auth Card -->
				<div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

					<!-- Card Title -->
					<h2 class="text-left font-semibold text-3xl lg:text-4xl text-gray-800">
						About
					</h2>

					<h3 class="mt-8 mb-8">
						{{page.description}}
					</h3>

					<br />

					<ul class="icons">
						{% if site.social_urls.facebook %}
						<li>
							<a target="_blank" href="{{ site.social_urls.facebook }}"
								class="text-gray-700 hover:text-red-700 icon fab fa-facebook">
								<span class="label">Facebook</span>
							</a>
						</li>
						{% endif %}
						{% if site.social_urls.twitter %}
						<li>
							<a target="_blank" href="{{ site.social_urls.twitter }}"
								class="text-gray-700 hover:text-red-700 icon fab fa-twitter">
								<span class="label">Twitter</span>
							</a>
						</li>
						{% endif %}
						{% if site.social_urls.instagram %}
						<li>
							<a target="_blank" href="{{ site.social_urls.instagram }}"
								class="text-gray-700 hover:text-red-700 icon fab fa-instagram">
								<span class="label">Instagram</span>
							</a>
						</li>
						{% endif %}
						{% if site.social_urls.dribbble %}
						<li>
							<a target="_blank" href="{{ site.social_urls.dribbble }}"
								class="text-gray-700 hover:text-red-700 icon fab fa-dribbble">
								<span class="label">Dribbble</span>
							</a>
						</li>
						{% endif %}
						{% if site.social_urls.github %}
						<li>
							<a target="_blank" href="{{ site.social_urls.github }}"
								class="text-gray-700 hover:text-red-700 icon fab fa-github">
								<span class="label">GitHub</span>
							</a>
						</li>
						{% endif %}
						{% if site.social_urls.linkedin %}
						<li>
							<a target="_blank" href="{{ site.social_urls.linkedin }}"
								class="text-gray-700 hover:text-red-700 icon fab fa-linkedin">
								<span class="label">LinkedIn</span>
							</a>
						</li>
						{% endif %}
					</ul>

				</div>
			</div>

		</div>

	</div>