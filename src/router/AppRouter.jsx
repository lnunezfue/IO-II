import { Navigate, Route, Routes } from "react-router-dom"
import { Main, Simplex, CPM, PERT, EOQ, DecisionTree,EOQDiscountPage,AHPPage, TablaDecision } from "../pages/index";


const AppRouter = () => {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Layout> */}
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/simplex" element={<Simplex />} />
                    <Route path="/critical-route" element={<CPM />} />
                    <Route path="/pert" element={<PERT />} />
                    <Route path="/eoq" element={<EOQ />} />
                    <Route path="/eoq-discounts" element={<EOQDiscountPage />} />
                    <Route path="/ahp" element={<AHPPage />} />
                    <Route path="/decision-tree" element={<DecisionTree />} />
                    <Route path="/decision-table" element={<TablaDecision />} />
                </Routes>
            {/* </Layout> */}
        </>
    )
}

export default AppRouter