import { useState } from "react";
import GeneralInfo from "./components/generalInfo";
import EducationalInfo from "./components/educationalInfo";
import WorkInfo from "./components/workInfo";

export default function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        school: "",
        degree: "",
        dateStart: "",
        dateEnd: "",
        jobTitle: "",
        companyName: "",
        mainResponsibilities: "",
        workDateStart: "",
        workDateEnd: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    return (
        <>
            {currentStep === 1 && <GeneralInfo formData={formData} handleChange={handleChange} />}
            {currentStep === 2 && <EducationalInfo formData={formData} handleChange={handleChange} />}
            {currentStep === 3 && <WorkInfo formData={formData} handleChange={handleChange} />}
            {currentStep === 4 && (
                <div>
                    <h2>Review Your Information:</h2>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            )}

            {currentStep > 1 && <button onClick={prevStep}>Previous</button>}
            {currentStep < 4 ? <button onClick={nextStep}>Next</button> : <button onClick={() => alert("Submitted!")}>Submit</button>}
        </>
    );
}
