import React from 'react'

function Login() {
    return (
        <div style={{ border: "2px solid red", width:"100%", height:"100vh", display: "flex", background: " radial-gradient(879px at 10.4% 22.3%, rgb(255, 235, 238) 0%, rgb(186, 190, 245) 93.6%" }}>
            {/* FLEX 1 */}
            <div style={{ minWidth: "50%", textAlign: "center", display: "flex", flexDirection: "column", alignItem: "center", justifyContent: "center" }}>
                <img src="" alt="" />
                <h2>Sign in with your email or username</h2>
                <form action="" style={{ display: "flex", flexDirection: "column", alignItem: "center", justifyContent: "center" }}>
                    <input type="text" placeholder='Email or username' style={{ width: "70%", height: "40px", borderStyle: "none", margin: "10px auto", textAlign:"center" }} />
                    <button style={{ width: "70%", height: "40px", borderStyle: "none", margin: "5px auto" }}>Next</button>

                </form>
                <a href="">Need help signing in?</a>

                <hr />
                <h4>Don't have a BBC account?</h4>
                <a href="">Register now</a>

            </div>

            {/*  FLEX 2 */}
            <div>
                <img src="https://t4.ftcdn.net/jpg/03/33/68/01/240_F_333680128_5XjB38xRZLApJiVNFRozfJ5peKlzOmiJ.jpg" alt="" style={{ width: "275px", height: "185px", borderRadius:"7px",  position:"absolute", top:"100px", left:"650px" }} />


                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXd4IdSPcW9PhJ4J01qYo-0j2Ep874uzPzkVZHSxoNYCw9hBq2yoQ7xavyfh3qQnpPLH0&usqp=CAU" alt="" style={{ width: "275px", height: "185px", borderRadius:"7px", position:"absolute", top:"3px", left:"650px" }} />

                <img src="https://media.istockphoto.com/id/474222676/photo/i-like-this-work.jpg?s=612x612&w=0&k=20&c=62YHw3h69JCQF-zrALNFbQmUQAWatc2RVqZLdkC66Hc=" alt="" style={{ width: "275px", height: "185px",borderRadius:"7px", }} />

                <img src="https://static.vecteezy.com/system/resources/thumbnails/022/558/601/small/common-european-kingfisher-river-kingfisher-flying-after-emerging-from-water-with-caught-fish-prey-in-beak-free-photo.jpg" alt="" style={{ width: "275px", height: "185px", borderRadius:"7px", }} />

                <img src="https://miro.medium.com/v2/resize:fit:900/0*nyikhXvef0Z-90tX.png" alt="" style={{ width: "275px", height: "185px", borderRadius:"7px", }} />

            </div>
        </div>
    )
}

export default Login
