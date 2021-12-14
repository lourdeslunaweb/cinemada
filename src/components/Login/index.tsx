import './index.css'

const Login = () => {
    return (
        <>
            <div>
                <div className="titan-background">
                    <span className="stars stars-L" />
                    <span className="stars stars-M" />
                    <span className="stars stars-S" />
                </div>
                <div className="marvellous-container">
                    <div className="header">
                        <h1><span className="title-marvel"></span> <span className="title-studios">CinemADA</span></h1>
                        <h2>
                            ~ Películas De Otro Planeta  ~
                        </h2>
                    </div>
                    <div className="installation-instructions">
                        <h3>Installation</h3>
                        <code>$ gem install power</code>
                        <code>$ gem install reality</code>
                        <code>$ gem install mind</code>
                        <code>$ gem install space</code>
                        <code>$ gem install time</code>
                        <code>$ gem install soul</code>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Login}