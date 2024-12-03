import React from "react";
import lscsimg1 from '../assets/images/LSCS---Lower-Segment-Cesarean-Section.jpg';

const LscsInfo = () => {
  const indications = [
    {
      category: "Maternal Factors",
      points: [
        "Prolonged labor (failure to progress).",
        "Placenta previa (placenta covering the cervix).",
        "Uterine rupture or scar dehiscence from a previous cesarean section.",
        "Severe maternal health issues like eclampsia, hypertension, or diabetes.",
      ],
    },
    {
      category: "Fetal Factors",
      points: [
        "Fetal distress (reduced oxygen supply).",
        "Malpresentation (e.g., breech or transverse lie).",
        "Macrosomia (large baby size).",
      ],
    },
    {
      category: "Obstetric Factors",
      points: [
        "Multiple pregnancies (twins, triplets, etc.).",
        "Cephalopelvic disproportion (baby's head too large for the pelvis).",
      ],
    },
    {
      category: "Elective Reasons",
      points: ["Patient request (without medical indication)."],
    },
  ];

  const steps = [
    "Pre-surgical assessments such as blood tests and fetal monitoring.",
    "Administration of spinal or epidural anesthesia (occasionally general anesthesia).",
    "Horizontal abdominal incision on the lower abdomen ('bikini cut').",
    "Transverse uterine incision on the lower uterine segment.",
    "Delivery of the baby and removal of the placenta.",
    "Suturing of the uterus and abdomen layer by layer.",
  ];

  const recoveryTips = [
    "Keep the incision clean and dry.",
    "Avoid heavy lifting for at least 6 weeks.",
    "Attend follow-up appointments to check for proper healing.",
    "Begin light movement to prevent blood clots.",
  ];

  const risks = [
    "Infection at the incision site.",
    "Excessive bleeding or blood clots.",
    "Delayed bowel function recovery.",
    "Increased risk of complications in future pregnancies such as uterine rupture or placenta accreta.",
  ];

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-gray-100 text-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600">
        Lower Segment Cesarean Section (LSCS)
      </h1>

      {/* Image for LSCS */}
      <div className="flex justify-center mb-10">
        <img
          src={lscsimg1}
          alt="LSCS Procedure"
          className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 rounded-lg shadow-md border border-gray-200"
        />
      </div>

      {/* Section: What is LSCS? */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">What is LSCS?</h2>
        <p className="text-gray-700 leading-relaxed">
          LSCS is a surgical procedure to deliver a baby through an incision in
          the mother’s abdomen and uterus. It is often recommended when vaginal
          delivery poses risks to the mother or baby.
        </p>
      </section>

      {/* Section: Indications */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Indications for LSCS</h2>
        {indications.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">{item.category}</h3>
            <ul className="list-disc pl-6 text-gray-700">
              {item.points.map((point, i) => (
                <li key={i} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Section: Procedure */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">The LSCS Procedure</h2>
        <ol className="list-decimal pl-6 text-gray-700">
          {steps.map((step, index) => (
            <li key={index} className="mb-3">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Section: Recovery Tips */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Recovery Tips</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {recoveryTips.map((tip, index) => (
            <li key={index} className="mb-3">
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Section: Risks and Complications */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Risks and Complications</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {risks.map((risk, index) => (
            <li key={index} className="mb-3">
              {risk}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LscsInfo;
