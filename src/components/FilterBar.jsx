const FilterBar = ({ searchJob, setSearchJob, status, setStatus }) => {
  return (
    <div className="border-black border w-96 flex m-auto mb-5">
      <input
        type="text"
        placeholder="Search Job"
        className="rounded w-auto py-1 px-3 border-black outline-none"
        value={searchJob}
        onChange={(e) => setSearchJob(e.target.value)}
        aria-label="Search Job"
      />
      <select
        id="status"
        name="status"
        className="rounded w-auto py-2 px-3 outline-none"
        required
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        aria-label="Filter by status"
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer Received">Offer Received</option>
        <option value="Shortlisted">Shortlisted</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default FilterBar;
