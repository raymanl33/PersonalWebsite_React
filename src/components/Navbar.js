import { useNavigate } from "react-location";
import "../../styles/Navbar.css";
// import ReorderIcon from '@mui/icons-material/Reorder'

export default function Navbar() {
    
    const navigate = useNavigate();

    const handleClickHome = (e) => {
        e.preventDefault(); // DON'T REFRESH THE PAGE
        navigate({ to: "/", replace: true });
      };

    const handleClickExperience = (e) => {
        e.preventDefault();
        navigate({ to: "experience", replace: true});
    }

    const handleClickProjects = (e) => {
        e.preventDefault();
        navigate({ to: "projects", replace: true});
    }



    return (
        <div className="navbar">
            <div className="toggleButton">
                <button onClick={handleClickHome} className="links" type="submit">Home 🏠</button>
                <button onClick={handleClickExperience} className="links" type="submit">Experience 📁</button>
                <button onClick={handleClickProjects} className="links" type="submit">Projects 📚</button>
            </div>
          
        </div>
    )
}