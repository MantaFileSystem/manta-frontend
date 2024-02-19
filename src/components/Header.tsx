import SearchBar from "./SearchBar";
import TimeBar from "./Dashboard/TimeBar";

export default function Header() {
  return (
    <div className="dashborad-header">
      <SearchBar />
      <TimeBar />
    </div>
  );
}
