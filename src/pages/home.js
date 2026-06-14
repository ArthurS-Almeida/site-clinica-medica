import Card from '../components/card.js';



function Home() {
    return (
        <div>
            <header>
                <figure>
                    <span>Sua Logo</span>
                </figure>
                <nav>
                    <ul>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Unidade</li>
                        <li><button>Login</button></li>

                    </ul>
                </nav>
            </header>
            <main>
                <div>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="..." class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="..." class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="..." class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </main>
            <section> {/* Patrocinio */}
                <div>
                    <marquee>AAAAAA</marquee>
                </div>
            </section>
            <section>
                <article>
                    <h1>Blog:</h1>
                    <aside>
                        <Card />
                    </aside>
                </article>
            </section>
            <footer>
                <section>Empresa</section>
                <section>Contato</section>
                <section>Redes Sociais</section>
            </footer>
        </div>
    )
}

export default Home;