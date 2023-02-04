import React from "react";

function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">
					<i class="bi bi-cup-hot-fill"></i>JOBSKI
				</a>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="/">
							HOME
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="/predict">
							PREDICT
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="/job-search">
							JOB SEARCH
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="/job-roles">
							JOB ROLES
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="/roadmaps">
							ROADMAPS
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
