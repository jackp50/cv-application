export default function WorkInfo({ formData, handleChange }) {
    return (
        <>
            <label>
                Job Title: <input name="jobTitle" type="text" value={formData.jobTitle} onChange={handleChange} />
            </label>

            <label>
                Company Name: <input name="companyName" type="text" value={formData.companyName} onChange={handleChange} />
            </label>

            <label>
                Main Responsibilities: <input name="mainResponsibilities" type="text" value={formData.mainResponsibilities} onChange={handleChange} />
            </label>

            Date worked:
            <label>
                From: <input name="workDateStart" type="date" value={formData.workDateStart} onChange={handleChange} />
            </label>
            <label>
                To: <input name="workDateEnd" type="date" value={formData.workDateEnd} onChange={handleChange} />
            </label>
        </>
    );
}
