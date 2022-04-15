import { CardsAdmin, Pagination, SearchItems } from "../../components"
import { Layout } from "../../components/layout"

const AdminPage = () => {
    return (
        <Layout>
            <SearchItems />
            <Pagination />
            <CardsAdmin />
            <Pagination />
        </Layout>
    )
}

export { AdminPage }