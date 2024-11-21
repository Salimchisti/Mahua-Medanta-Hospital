import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const HealthBlog = () => {
  const { slug } = useParams();
  const route = useNavigate();

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
  }, [route, slug]); // Adding `route` and `slug` to the dependency array

  return null; // Return null or your component's JSX if needed
};

export default HealthBlog;
