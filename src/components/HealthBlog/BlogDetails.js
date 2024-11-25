import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const HealthBlog = () => {
  const { slug } = useParams();  // Get slug from URL params
  const route = useNavigate();   // Hook to navigate programmatically

  useEffect(() => {
    if (slug === "HealthyLifeStyle") {
      route("/health-blog/healthy-lifestyle");
    } else if (slug === "ChildObesity") {
      route("/ChildObesity");
    } else if (slug === "vitamin-d-deficiency") {
      route("/VitaminD");
    } else if (slug === "kidney-care") {
      route("/Kidneys");
    } else if (slug === "quit-smoking") {
      route("/QuitSmoking");
    } else if (slug === "BloodSugar") {
      route("/BloodSugar");
    }
  }, [route, slug]);  // Dependency array ensures effect runs when route or slug change

  return null;  // No need to render anything here
};

export default HealthBlog;
