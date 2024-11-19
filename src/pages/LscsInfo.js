import React from "react";

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
    <div className="p-6 sm:p-10 md:p-12 bg-gray-50 text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Lower Segment Cesarean Section (LSCS)
      </h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">What is LSCS?</h2>
        <p>
          LSCS is a surgical procedure to deliver a baby through an incision in
          the mother’s abdomen and uterus. It is often recommended when vaginal
          delivery poses risks to the mother or baby.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Indications for LSCS</h2>
        {indications.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-medium mb-2">{item.category}</h3>
            <ul className="list-disc pl-6">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">The LSCS Procedure</h2>
        <ol className="list-decimal pl-6">
          {steps.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Recovery Tips</h2>
        <ul className="list-disc pl-6">
          {recoveryTips.map((tip, index) => (
            <li key={index} className="mb-2">
              {tip}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Risks and Complications</h2>
        <ul className="list-disc pl-6">
          {risks.map((risk, index) => (
            <li key={index} className="mb-2">
              {risk}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LscsInfo;
