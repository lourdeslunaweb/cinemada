import { FC } from "react"
import { Footer } from "../Footer"
import { Main } from "../Main"
import { Navbar } from "../Navbar"

type Props = {
    hideNavbar?: boolean
    hideFooter?: boolean
}
const Layout: FC<Props> = ({ children, hideNavbar, hideFooter }) => {
    return (
        <>
            { !hideNavbar && <Navbar /> }
            <Main>
                {children}
            </Main>
            { !hideFooter && <Footer /> }
        </>
    )
}

export { Layout }