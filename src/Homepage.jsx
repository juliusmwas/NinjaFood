import "tailwindcss"

function Homepage () {
    return (
        <div>
            <nav>
                <div>
                    <h1>Ninja <span>Food</span></h1>
                </div>
                
                <div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </nav>
            
            {/* End Nav bar */}
        </div>
    )
}

export default Homepage;