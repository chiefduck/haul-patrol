import { useLocation } from "react-router-dom";

interface LocationContext {
  neighborhood: string;
  isNeighborhoodPage: boolean;
  displayName: string;
}

const neighborhoodMap: Record<string, string> = {
  "/westminster": "Westminster",
  "/arvada": "Arvada",
  "/aurora": "Aurora",
  "/lakewood": "Lakewood",
  "/lodo": "LoDo",
  "/parker": "Parker",
  "/boulder": "Boulder",
  "/littleton": "Littleton",
  "/castle-rock": "Castle Rock",
  "/cherry-creek": "Cherry Creek",
  "/highlands-ranch": "Highlands Ranch",
  "/highlands-park": "Highlands & Park Hill",
  "/capitol-hill": "Capitol Hill",
};

export const useLocationContext = (): LocationContext => {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();
  
  const neighborhood = neighborhoodMap[pathname] || "Denver";
  const isNeighborhoodPage = pathname !== "/" && pathname !== "";
  const displayName = isNeighborhoodPage ? neighborhood : "Denver";
  
  return {
    neighborhood: displayName,
    isNeighborhoodPage,
    displayName,
  };
};
