import React from 'react'

const Banner = () => {

    let activeObject = { home: 'active', about: '', projects: '', contact: '' }

    const currentPath = window.location.pathname.split("/").filter(Boolean).pop();

    activeObject = {
        home: !currentPath ? 'active' : '',
        about: currentPath == 'about' ? 'active' : '',
        projects: currentPath == 'projects' || currentPath == 'solutions' ? 'active' : '',
        contact: currentPath == 'contact' ? 'active' : '',
    }

    console.log('activeObject', activeObject)

    return (
        <header role="banner">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">FitMo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        <ul className="navbar-nav pl-md-5 ml-auto">
                            <li className="nav-item"><a className={`nav-link ${activeObject.home}`} href="/">Home</a></li>
                            <li className="nav-item"><a className={`nav-link ${activeObject.projects}`} href="/projects">Projects</a></li>
                            <li className="nav-item"><a className={`nav-link ${activeObject.about}`} href="/about">About</a></li>
                            <li className="nav-item"><a className={`nav-link ${activeObject.contact}`} href="/contact">Contact</a></li>
                        </ul>
                        <form method="post" className="search-form">
                            <span className="icon ion ion-search"></span>
                            <input type="text" className="form-control" placeholder="Search..." />
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Banner