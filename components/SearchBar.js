
export default function SearchBar({
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
}) {
  return (
    <div className="search-filter-container">
      <div className="search-field">
        <label htmlFor="task-search">Search Tasks</label>
        <input
          id="task-search"
          type="search"
          placeholder="Search by task name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-field">
        <label htmlFor="task-filter">Filter by Status</label>
        <select
          id="task-filter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Tasks</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    </div>
  );
}
