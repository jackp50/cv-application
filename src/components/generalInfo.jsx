export default function GeneralInfo({ formData, handleChange }) {
    return (
        <>
            <label>
                First Name: <input name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
            <label>
                Last Name: <input name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>
            <label>
                Email: <input name="email" type="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Phone Number: <input name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} />
            </label>
        </>
    );
}