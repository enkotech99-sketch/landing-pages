import { Routes, Route } from "react-router-dom";

import RestaurantLanding from "../templates/restaurant/RestaurantLanding";
import BarberLanding from "../templates/barber/BarberLanding";
import ProfessionalsLanding from "../templates/professionals/ProfessionalsLanding";
import FitnessLanding from "../templates/fitness/fitnessLanding";
import BienesLanding from "../templates/bienes/bienesLanding";
import AutomotiveLanding from "../templates/automotive/automotiveLanding";
import HomeLanding from "../home/home";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/restaurant" element={<RestaurantLanding />} />
      <Route path="/barber" element={<BarberLanding />} />
      <Route path="/professionals" element={<ProfessionalsLanding />} />
      <Route path="/fitness" element={<FitnessLanding />} />
      <Route path="/bienes" element={<BienesLanding />} />
       <Route path="/automotive" element={<AutomotiveLanding />} />
    </Routes>
  );
}

export default AppRoutes;