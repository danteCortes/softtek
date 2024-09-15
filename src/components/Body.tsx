import { Route, Routes } from "react-router-dom"
import { FlexibleHealth } from "@pages/FlexibleHealth";
import { Plans } from "@pages/Plans";

export function Body(){
    return (
        <>
            <Routes>
                <Route path="/" element={<FlexibleHealth />} />
                <Route path="/plans" element={<Plans />} />
            </Routes>
        </>
    )
}