import React from "react";
import childImage from "../../assets/images/Child.jpeg";

const ChildObesity = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Section: Childhood Obesity */}
      <div className="flex flex-wrap p-4">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Childhood Obesity</h2>
          <p>
            Childhood obesity, also referred to as childhood obesity risk or increased risk of
            childhood obesity, is an increasingly common condition. It is not just a problem
            among the affluent; most middle-class households are now affected. Obesity among
            children increases their chances of developing type 2 diabetes, high blood pressure,
            heart disease, and certain cancers. In fact, according to the Centers for Disease
            Control and Prevention (CDC), over 15.5% of Indian children are obese or overweight.
            The World Health Organization defines child obesity as a body mass index (BMI) equal
            to or greater than the 85th percentile for age and sex. There are many causes of
            childhood obesity that range from genetics to environment. This article lists the top
            7 causes of childhood obesity along with some effective tips on how you can prevent
            your child from getting fat.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full flex items-center justify-center p-4">
        <img
          src={childImage}
          alt="Child"
          className="w-full h-auto max-w-xl rounded-lg shadow-md"
        />
      </div>

      {/* Section: Causes */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Causes</h2>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            <h3 className="text-lg font-semibold">Genetics and Obesity</h3>
            <p>
              Genetics is one of the strongest factors associated with obesity. In fact, it is
              estimated that 68% of obesity is caused by genetics. Obesity can also be caused by
              an under-developed 'hunger’s brake' system in the brain. Add to this, certain
              medications such as antidepressants, painkillers, seizure medicines, anti-psychotics,
              and anti-anxiety medications. Another cause of childhood obesity is lipodystrophy,
              a condition that causes a person’s fat tissue to be severely under-developed.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-lg font-semibold">Behavior and Eating Habits</h3>
            <p>
              Another cause of childhood obesity is your child’s behavior. It is important to keep
              in mind that obesity is not just about eating the wrong food. It is also about the
              environment of eating, e.g., setting the expectation that food should be eaten, and
              the motivation behind eating. Children are influenced by their peers; if your child
              sees other children eating junk food, they may also start eating junk food. Many
              children start eating unhealthy foods like junk food because they are bored or have
              little to do.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Diet-related Causes of Obesity in Children</h3>
            <ul className="list-disc pl-6">
              <li>
                The High-calorie, Low-quality Diet: This diet provides too many calories from
                unhealthy foods and too few vitamins, minerals, and fiber.
              </li>
              <li>
                The Gluten-rich Diet: A diet rich in gluten has been linked to an increased risk of
                obesity in children.
              </li>
              <li>
                The Sugar-rich Diet: This diet is high in sugar and fructose, linked to increased
                risks of obesity and Type 2 diabetes in children.
              </li>
              <li>
                The Unhealthy Meal Combination: A combination high in saturated fat (e.g., a
                sandwich with cheese), sodium (e.g., a soda with a sandwich), or sugar (e.g., a
                muffin with soda).
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Section: Effects of Obesity */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Effects of Obesity</h2>
        <ul className="list-disc pl-6">
          <li>Type 2 Diabetes: This long-term illness alters how your child’s body utilizes sugar (glucose).</li>
          <li>High Blood Pressure and Cholesterol: These can lead to heart attack or stroke.</li>
          <li>Joint Ache: Additional weight puts extra strain on knees, hips, and the back.</li>
          <li>Breathing Issues: Overweight children are more likely to develop asthma and obstructive sleep apnea.</li>
          <li>Fatty Liver Disease: Fatty deposits accumulate in the liver, leading to damage and scarring.</li>
          <li>Social and Emotional Issues: Obese children may be bullied or teased, leading to emotional issues.</li>
        </ul>
      </div>

      {/* Section: Prevention */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Prevention of Obesity</h2>
        <p>
          The right diet and nutrition during childhood can prevent obesity. Many researchers
          believe that the best way to prevent childhood obesity is to provide healthy meals and
          snacks to children. Offering healthy foods like fruits, vegetables, and whole grains
          helps children avoid unhealthy junk food.
        </p>
      </div>

      {/* Section: Conclusion */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p>
          Childhood obesity has become a serious health concern. To prevent childhood obesity, it’s
          essential to recognize the causes and implement preventative measures. Providing a
          healthy diet, promoting physical activity, and setting a good example are key to reducing
          the risk of obesity in children. By doing so, we can protect their long-term health and
          well-being.
        </p>
      </div>
    </div>
  );
};

export default ChildObesity;
