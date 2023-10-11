interface Props {
    stato: string;
    onClose: ()=>void;
}

function Offcanvas({onClose,stato}:Props){
    return(
        <div className={"offcanvas offcanvas-end " + stato} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header border-bottom border-3 border-danger">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{fontSize:"30px"}}>Menù</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onClose}></button>
        </div>
        <div className="offcanvas-body position-absolute top-50 start-50 translate-middle" style={{fontSize:"20px"}}>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item border-bottom border-3 border-warning">
              <center><a className="nav-link active" aria-current="page" href="#">Home</a></center>
            </li>
            <li className="nav-item border-bottom border-3 border-warning">
              <center><a className="nav-link" href="#">Ordina</a></center>
            </li>
            <li className="nav-item border-bottom border-3 border-warning">
              <center><a className="nav-link" href="#">Login</a></center>
            </li>
          </ul>
          </div>
          </div>
    );
}

export default Offcanvas;