export default function EducationalInfo({ formData, handleChange }) {
    return (
        <>
            <label>
                School Name: <input name="school" type="text" value={formData.school} onChange={handleChange} />
            </label>

            <label>
                Degree Received: <input name="degree" type="text" value={formData.degree} onChange={handleChange} />
            </label>

            Date Attended:
            <label>
                Start: <input name="dateStart" type="date" value={formData.dateStart} onChange={handleChange} />
            </label>

            <label>
                End: <input name="dateEnd" type="date" value={formData.dateEnd} onChange={handleChange} />
            </label>
        </>
    );
}
