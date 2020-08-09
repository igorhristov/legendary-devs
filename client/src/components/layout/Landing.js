import React from 'react';

const Landing = () => {
    return (
        <section>
            <div className='dark-overlay'>
                <div className='landing-iner'>
                    <h1 className='x-large'>Developer connector</h1>
                    <p className='lead'>
                        Create a developer profile/portfolio, share post and get
                        help from other developers
                    </p>
                    <div className='buttons'>
                        <a href='register.html' className='btn btn-primary'>
                            Sign Up
                        </a>
                        <a href='login.html' className='btn btn-light'>
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Landing;
