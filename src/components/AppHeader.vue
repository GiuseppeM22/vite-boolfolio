<script>
    export default {
        name: "AppHeader",
        data() {
            return {
            navLinks: [
                { label: "Home", name: "home" },
                { label: "About us", name: "about"  },
                { label: "Projects", name: "projects" },
            ]
            }
        }
    }
</script>
<template>
    <section>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">MyWebSite</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul  v-for="link in navLinks" class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: link.name, params: link.params}">{{ link.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
</template>