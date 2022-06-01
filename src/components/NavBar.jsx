function NavBar() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <h1>MTC</h1>
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navBarMenu">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navBarMenu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">Home</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">Servicios</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">Rutinas de ejecicios</a>
                            <a class="navbar-item">Dietas</a>
                            <a class="navbar-item">Paquetes</a>
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">Más</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">Sobre nosotros</a>
                            <a class="navbar-item">Contacto</a>
                        </div>
                    </div>
                    <a class="navbar-item">Promociones</a>
                </div>
            </div>
        </nav>
    );
  }
  
  export default NavBar;
  