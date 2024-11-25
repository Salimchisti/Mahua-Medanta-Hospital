import React from 'react';
import Layout from '../components/Layout';

const GynecologyObstetrics = () => (
  <Layout>
    <section className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="bg-white bg-opacity-90 mb-10 w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Gynecology, Obstetrics, and Maternity
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          Comprehensive care for women's health, including pregnancy, childbirth, and postnatal care.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto space-y-8 text-gray-700">
        <h3 className="text-2xl font-semibold">What is Gynecology?</h3>
        <p><strong>Gynecology</strong> is the medical practice that focuses on the health of the female reproductive system. It involves diagnosing and treating conditions affecting the uterus, ovaries, fallopian tubes, cervix, and vagina.</p>
        <p>Common gynecological services include:</p>
        <ul className="list-disc pl-5">
          <li>Annual health screenings and Pap smears</li>
          <li>Treatment for menstrual disorders (irregular periods, heavy bleeding, etc.)</li>
          <li>Management of pelvic pain, endometriosis, fibroids, and ovarian cysts</li>
          <li>Fertility assessments and treatments</li>
          <li>Screening and management of sexually transmitted infections (STIs)</li>
          <li>Menopause care and hormone replacement therapy (HRT)</li>
        </ul>

        <h3 className="text-2xl font-semibold">What is Obstetrics?</h3>
        <p><strong>Obstetrics</strong> is the branch of medicine concerned with the care of women during pregnancy, childbirth, and the postnatal period. Obstetricians manage the health of both the mother and the baby throughout the course of pregnancy and delivery.</p>
        <p>Key aspects of obstetric care include:</p>
        <ul className="list-disc pl-5">
          <li>Preconception counseling and prenatal care</li>
          <li>Monitoring fetal growth and development through ultrasounds and tests</li>
          <li>Management of high-risk pregnancies (e.g., gestational diabetes, preeclampsia, multiple pregnancies)</li>
          <li>Assistance during labor and delivery (normal and cesarean section)</li>
          <li>Postpartum care for both mother and baby, including breastfeeding support and mental health care</li>
        </ul>

        <h3 className="text-2xl font-semibold">What is Maternity Care?</h3>
        <p><strong>Maternity care</strong> refers to the medical care provided to a woman during her pregnancy, childbirth, and postpartum period. This includes regular check-ups, education, and emotional support to ensure a healthy pregnancy and a positive birthing experience.</p>
        <p>Key aspects of maternity care include:</p>
        <ul className="list-disc pl-5">
          <li>Regular prenatal visits to monitor the mother’s health and the baby’s development</li>
          <li>Blood tests, ultrasounds, and other screenings to detect potential risks and conditions</li>
          <li>Advice on nutrition, exercise, and lifestyle modifications for a healthy pregnancy</li>
          <li>Labor and delivery support, including pain management options such as epidurals or natural childbirth techniques</li>
          <li>Postpartum care, including monitoring for complications such as postpartum depression and ensuring recovery from childbirth</li>
        </ul>

        <h3 className="text-2xl font-semibold">High-Risk Pregnancy Management</h3>
        <p>A high-risk pregnancy is one in which there are potential complications that could affect the health of the mother or baby. Common risk factors include:</p>
        <ul className="list-disc pl-5">
          <li>Advanced maternal age (35 years or older)</li>
          <li>Pre-existing health conditions such as diabetes, hypertension, or thyroid disorders</li>
          <li>Multiple pregnancies (twins, triplets, etc.)</li>
          <li>History of pregnancy complications (e.g., preeclampsia, gestational diabetes)</li>
          <li>Infections or conditions like preterm labor</li>
        </ul>
        <p>Obstetricians work closely with patients to monitor and manage these risk factors, often with more frequent visits, specialized tests, and treatment options to ensure a healthy pregnancy and delivery.</p>

        <h3 className="text-2xl font-semibold">Postpartum Care</h3>
        <p>Postpartum care is critical to ensure the well-being of the mother after childbirth. This period includes physical and emotional recovery, as well as guidance on breastfeeding, contraception, and family planning. Common aspects of postpartum care include:</p>
        <ul className="list-disc pl-5">
          <li>Monitoring for signs of postpartum depression or anxiety</li>
          <li>Pelvic floor exercises and recovery from childbirth</li>
          <li>Breastfeeding support and guidance on infant care</li>
          <li>Follow-up visits to ensure that the mother’s physical health is returning to normal</li>
          <li>Counseling on birth control options and family planning</li>
        </ul>

        <h3 className="text-2xl font-semibold">Why Choose Gynecology, Obstetrics, and Maternity Care?</h3>
        <p>Choosing the right care provider for gynecological, obstetric, and maternity services is essential to ensure the health of both mother and baby. Our team of experienced professionals offers compassionate, personalized care that focuses on the needs of the individual. We emphasize a holistic approach to care that includes:</p>
        <ul className="list-disc pl-5">
          <li>Patient education to empower women to make informed decisions about their health</li>
          <li>Collaborative care between obstetricians, gynecologists, and other specialists</li>
          <li>A focus on emotional and psychological well-being, especially during pregnancy and postpartum</li>
          <li>Access to the latest medical technologies and procedures for optimal outcomes</li>
        </ul>
        <p>Whether you’re seeking routine care or specialized treatment, we provide the highest quality services to meet your unique needs.</p>
      </div>
    </section>
  </Layout>
);

export default GynecologyObstetrics;
