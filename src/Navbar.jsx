function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          MovieRentals
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Movies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Customers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Rentals
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
