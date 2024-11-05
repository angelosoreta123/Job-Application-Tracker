const JobForm = ({
  onSubmit,
  type,
  setType,
  title,
  setTitle,
  description,
  setDescription,
  salary,
  setSalary,
  location,
  setLocation,
  companyName,
  setCompanyName,
  contactEmail,
  setContactEmail,
  contactPhone,
  setContactPhone,
  formTitle,
  buttonTitle,
  status,
  setStatus,
}) => {
  return (
    <section className="bg-black">
      <div className="container m-auto max-w-2xl py-24">
        <div className="px-6 py-8 mb-4 shadow-md shadow-gray-300 rounded-md border-2">
          <form onSubmit={onSubmit}>
            <h2 className="text-white text-center font-semibold mb-6 text-3xl">
              {formTitle}
            </h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-white font-bold mb-2">
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border border-gray-600 rounded w-full py-2 px-3 bg-white text-black"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border border-gray-600 rounded w-full py-2 px-3 bg-white text-black mb-2"
                placeholder="E.g. Software Engineer"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-white font-bold mb-2"
              >
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border border-gray-600 rounded w-full py-2 px-3 bg-white text-black"
                rows="4"
                placeholder="Describe key responsibilities, skills required, and any specific qualifications."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-white font-bold mb-2">Salary</label>
              <select
                id="salary"
                name="salary"
                className="border border-gray-600 rounded w-full py-2 px-3 bg-white text-black"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Below ₱10,000">Below ₱10,000</option>
                <option value="₱10,000 - ₱20,000">₱10,000 - ₱20,000</option>
                <option value="₱30,000 - ₱40,000">₱30,000 - ₱40,000</option>
                <option value="₱40,000 - ₱50,000">₱40,000 - ₱50,000</option>
                <option value="₱60,000 - ₱70,000">₱60,000 - ₱70,000</option>
                <option value="₱70,000 - ₱80,000">₱70,000 - ₱80,000</option>
                <option value="₱80,000 - ₱90,000">₱80,000 - ₱90,000</option>
                <option value="₱100,000 - ₱120,000">₱100,000 - ₱120,000</option>
                <option value="₱120,000 - ₱150,000">₱120,000 - ₱150,000</option>
                <option value="₱150,000 - ₱175,000">₱150,000 - ₱175,000</option>
                <option value="₱175,000 - ₱200,000">₱175,000 - ₱200,000</option>
                <option value="Over ₱200,000">Over ₱200,000</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border border-gray-600 rounded w-full py-2 px-3 bg-white text-black mb-2"
                placeholder="E.g. City, Country"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border border-gray-600 rounded w-full py-2 px-3 bg-white text-black"
                placeholder="E.g. Example Software Company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Contact Email
              </label>
              <input
                type="text"
                id="contact_email"
                name="contact_email"
                className="border border-gray-600 rounded w-full py-2 px-3 bg-white text-black"
                placeholder="E.g. hiring@example.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border border-gray-600 rounded w-full py-2 px-3 bg-white text-black"
                placeholder="E.g. 09181234567"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Job Status
              </label>
              <select
                id="status"
                name="status"
                className="border border-gray-600 rounded w-full py-2 px-3 bg-white text-black"
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer Received">Offer Received</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div>
              <button
                className="bg-white hover:bg-slate-400 text-black font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-6"
                type="submit"
              >
                {buttonTitle}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobForm;
