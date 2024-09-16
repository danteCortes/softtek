import { Route, Routes } from "react-router-dom"
import { FlexibleHealth } from "@pages/FlexibleHealth";
import { Plans } from "@pages/Plans";
import { Summary } from "@pages/Summary";

export function Body(){
    return (
        <>
            <Routes>
                <Route path="/" element={<FlexibleHealth />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/summary" element={<Summary />} />
            </Routes>
        </>
    )
}