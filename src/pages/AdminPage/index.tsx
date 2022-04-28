import { CardsAdmin, Pagination, SearchItems } from "../../components"
import { Layout } from "../../components/layout"

const AdminPage = () => {
    return (
        <Layout>
            <SearchItems />
            <CardsAdmin />
        </Layout>
    )
}

export { AdminPage }