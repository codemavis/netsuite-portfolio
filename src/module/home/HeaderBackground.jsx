import React from 'react'

const HeaderBackground = ({ backgroundImage, title, path, isHome }) => {
    return (
        <div className="slider-item overlay" style={{ backgroundImage: `url('${backgroundImage}')` }}>
            <div className="container">
                <div className="row slider-text align-items-center justify-content-center">
                    <div className="col-lg-12 text-center col-sm-12">
                        <h1 className="mb-4">{title}</h1>
                        {isHome && <div class="btn-play-wrap mx-auto" data-aos="fade-up" data-aos-delay="200">
                            <a href="https://www.youtube.com/watch?v=_VnYSoMI-9Q" data-fancybox data-ratio="2"
                                class="btn-play"><span class="ion ion-ios-play"></span></a>
                        </div>
                        }

                        {!isHome &&
                            <p class="custom-breadcrumbs" data-aos="fade-right" data-aos-delay="100">
                                <a href="/">Home</a> <span class="mx-3">/</span> {path}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBackground